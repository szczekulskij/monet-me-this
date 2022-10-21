import tensorflow as tf
from tensorflow import keras
import tensorflow_addons as tfa
from python.src.config import IMAGE_SIZE

def Downsample(X, filter_count, kernel_size, padding, stride, apply_norm=True):
    initializer = tf.random_normal_initializer(0., 0.02)
    gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    X = tf.keras.layers.ZeroPadding2D((padding,padding))(X)
    X = tf.keras.layers.Conv2D(filter_count, (kernel_size,kernel_size), padding='valid', strides=(stride,stride), 
                                      kernel_initializer=initializer, use_bias=False)(X)
    if apply_norm:
        X = tfa.layers.InstanceNormalization(gamma_initializer=gamma_init)(X)
    X = tf.keras.layers.LeakyReLU()(X)
    return X

def Upsample(X, filter_count, kernel_size, stride, activation='relu', apply_norm=True):
    initializer = tf.random_normal_initializer(0., 0.02)
    gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    X = tf.keras.layers.Conv2DTranspose(filter_count, (kernel_size,kernel_size), padding='same', strides=(stride,stride), 
                                        kernel_initializer=initializer, use_bias=False)(X)
    if apply_norm:
        X = tfa.layers.InstanceNormalization(gamma_initializer=gamma_init)(X)
    X = tf.keras.layers.Activation(activation)(X)
    return X

def ResidualBlock(X):
    initializer = tf.random_normal_initializer(0., 0.02)
    gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    X_shortcut = X
    
    # Layer 1   
    X = tf.keras.layers.ZeroPadding2D((1,1))(X)
    X = tf.keras.layers.Conv2D(256, (3,3), padding='valid', strides=(1,1), kernel_initializer=initializer, use_bias=False)(X)
    X = tfa.layers.InstanceNormalization(gamma_initializer=gamma_init)(X)
    X = tf.keras.layers.Activation('relu')(X)
    
    # Layer 2  
    X = tf.keras.layers.ZeroPadding2D((1,1))(X)
    X = tf.keras.layers.Conv2D(256, (3,3), padding='valid', strides=(1,1), kernel_initializer=initializer, use_bias=False)(X)
    X = tfa.layers.InstanceNormalization(gamma_initializer=gamma_init)(X)
    X = tf.keras.layers.Add()([X, X_shortcut])
    X = tf.keras.layers.Activation('relu')(X)
    return X


###################################################### main models ######################################################
def resnet(height=IMAGE_SIZE, width=IMAGE_SIZE):
    initializer = tf.random_normal_initializer(0., 0.02)
    gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    
    X_input = tf.keras.layers.Input((height, width, 3))
    
    skips = []
    
    X = Downsample(X_input, 64, 7, 3, 1, apply_norm=False)
    skips.append(X)
    
    X = Downsample(X, 128, 3, 1, 2)
    skips.append(X)
    
    X = Downsample(X, 256, 3, 1, 2)
    
    X = ResidualBlock(X)
    X = ResidualBlock(X)
    X = ResidualBlock(X)
    X = ResidualBlock(X)
    X = ResidualBlock(X)
    X = ResidualBlock(X)
    #X = ResidualBlock(X)
    #X = ResidualBlock(X)
    #X = ResidualBlock(X)
    
    skips = list(reversed(skips))
        
    X = Upsample(X, 128, 4, 2)
    X = tf.keras.layers.Concatenate()([X, skips[0]])
    X = Upsample(X, 64, 4, 2)
    X = tf.keras.layers.Concatenate()([X, skips[1]])
    X = Upsample(X, 3, 7, 1, activation='tanh', apply_norm=False)
    model = tf.keras.models.Model(inputs=X_input, outputs=X)
    return model


def discriminator(height=IMAGE_SIZE, width=IMAGE_SIZE):
    initializer = tf.random_normal_initializer(0., 0.02)
    # gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    
    X_input = tf.keras.layers.Input((height, width, 3))

    X = Downsample(X_input, 64, 4, 1, 2, apply_norm=False)
    X = Downsample(X, 128, 4, 1, 2)
    X = Downsample(X, 256, 4, 1, 2)
    X = Downsample(X, 512, 4, 1, 1)
    X = tf.keras.layers.ZeroPadding2D()(X)
    X = tf.keras.layers.Conv2D(1, (4,4), padding='valid', strides=(1,1), kernel_initializer=initializer, use_bias=False)(X)   
    X = tf.keras.layers.Activation('sigmoid')(X)
    model = tf.keras.models.Model(inputs=X_input, outputs=X)
    return model