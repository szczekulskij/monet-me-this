import os
import matplotlib
from flask import Flask, request, Response, send_file, session, send_from_directory, redirect, url_for
import cv2
import re
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import tensorflow_addons as tfa
from tensorflow.keras.utils import save_img
from tensorflow.keras.layers import Layer
from werkzeug.utils import secure_filename

from PIL import Image
import matplotlib.pyplot as plt
from flask_cors import CORS, cross_origin


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
    # Transform image to 256x256x3 !!
    # Transform image to 256x256x3 !!
    # Transform image to 256x256x3 !!

    a = tf.keras.preprocessing.image.img_to_array(image)
    a = tf.keras.preprocessing.image.img_to_array(a) 
    a = (tf.cast(a, tf.float32) / 127.5) - 1
    a = tf.reshape(a, [*[IMAGE_SIZE, IMAGE_SIZE], 3])
    a = tf.expand_dims(a,0)
    return a




app = Flask(__name__)
cors = CORS(app)
UPLOAD_FOLDER ="upload_folder"
ALLOWED_EXTENSIONS = set(['txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif'])
app.config['CORS_HEADERS'] = 'Content-Type'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
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

@app.route("/generate/image/monet", methods=['POST'])
def generate_img_based_on_img():
    image_file = request.files['image']
    image = Image.open(image_file.stream)
    image = transform_image(image)
    generated_image_tensor = monet_generator(image)[0]
    save_img("images/generated_images/temp.jpg", generated_image_tensor)
    return send_file("temp.jpg")


if __name__ == "__main__":
    app.run(port=5000, debug = True)