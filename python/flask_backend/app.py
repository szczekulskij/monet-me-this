from requests import request
from flask import Flask
import re
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import tensorflow_addons as tfa
from tensorflow.keras.layers import Layer

import matplotlib.pyplot as plt
import warnings
warnings.warn("ignore")
import numpy as np
import pandas as pd

from python.src.data_handling import load_dataset
from python.src.config import STRATEGY as strategy
from python.src.config import (BATCH_SIZE, IMAGE_SIZE, BATCH_SIZE, SIZE_RESIZE, AUTOTUNE, EPOCHS)

def transform_image(image):
    # a = tf.keras.preprocessing.image.load_img(image_path)
    a = tf.keras.preprocessing.image.img_to_array(image)
    a = tf.keras.preprocessing.image.img_to_array(a) 
    a = (tf.cast(a, tf.float32) / 127.5) - 1
    a = tf.reshape(a, [*[IMAGE_SIZE, IMAGE_SIZE], 3])
    a = tf.expand_dims(a,0)
    return a




app = Flask(__name__)
monet_generator = tf.keras.models.load_model('python/saved_models/monet_generator.h5')

@app.route("/healthcheck")
def healthcheck():
    return "OK"

# @app.route("/generate/word", methods=['POST'])
# def generate_img_based_on_word():
#     word = request.form['word']
#     artist = request.form['artist']
#     print(output[0].shape)
#     plt.imshow(output[0])
#     return 0

@app.route("/generate/image", methods=['POST'])
def generate_img_based_on_img():
    image = request.form['image']
    image = transform_image(image)
    artist = request.form['artist']
    if artist == "monet":
        return monet_generator(image)[0]
    # elif artist == "vangogh":
    #     return vanGogh_generator(image)[0]
    else :
        raise Exception("wrong arist name")


if __name__ == "__main__":
    app.run()