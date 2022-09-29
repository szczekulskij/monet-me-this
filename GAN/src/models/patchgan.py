import tensorflow as tf
from tensorflow import keras
import tensorflow_addons as tfa
from src.config import IMAGE_SIZE

def Discriminator(height=IMAGE_SIZE, width=IMAGE_SIZE):
    initializer = tf.random_normal_initializer(0., 0.02)
    gamma_init = keras.initializers.RandomNormal(mean=0.0, stddev=0.02)
    
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