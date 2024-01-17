import tensorflow as tf
from cycleGAN.src.config import (BATCH_SIZE, AUTOTUNE, IMAGE_SIZE, SIZE_RESIZE)

def load_dataset(filenames, apply_jitter=False, repeat=True, shuffle=True, batch_size=BATCH_SIZE):
    dataset = tf.data.TFRecordDataset(filenames)
    dataset = dataset.map(read_tfrecord, num_parallel_calls=AUTOTUNE)
    
    if apply_jitter:
        dataset = dataset.map(data_augment, num_parallel_calls=AUTOTUNE)
            
    if repeat:
        dataset = dataset.repeat()
    if shuffle:
        dataset = dataset.shuffle(512)
        
    dataset = dataset.batch(batch_size)
    dataset = dataset.cache()
    dataset = dataset.prefetch(AUTOTUNE)
    
    return dataset

def read_tfrecord(example):
    def decode_image(image):
        image = tf.image.decode_jpeg(image, channels=3)
        image = (tf.cast(image, tf.float32) / 127.5) - 1
        image = tf.reshape(image, [*[IMAGE_SIZE, IMAGE_SIZE], 3])
        return image
    tfrecord_format = {
        "image_name": tf.io.FixedLenFeature([], tf.string),
        "image": tf.io.FixedLenFeature([], tf.string),
        "target": tf.io.FixedLenFeature([], tf.string)
    }
    example = tf.io.parse_single_example(example, tfrecord_format)
    image = decode_image(example['image'])
    
    return image

def data_augment(image):
    p_spatial = tf.random.uniform([], 0, 1.0, dtype=tf.float32)
    p_rotate = tf.random.uniform([], 0, 1.0, dtype=tf.float32)
    
    if p_rotate > .8:
        image = tf.image.rot90(image, k=3) 
    elif p_rotate > .6:
        image = tf.image.rot90(image, k=2) 
    elif p_rotate > .4:
        image = tf.image.rot90(image, k=1)
        
    image = tf.image.random_flip_left_right(image)
    image = tf.image.random_flip_up_down(image)
    if p_spatial > .75:
        image = tf.image.transpose(image)
        
    image = tf.image.random_crop(image, size=[SIZE_RESIZE, SIZE_RESIZE, 3])
        
    return image