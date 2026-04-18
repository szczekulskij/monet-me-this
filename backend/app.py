import sys
import os
import datetime
import time
import random
import warnings
from pathlib import Path

from flask import Flask, request, send_file, jsonify
from flask_cors import CORS
from PIL import Image

warnings.filterwarnings("ignore")

# Add project root to path for cycleGAN imports
PROJECT_ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(PROJECT_ROOT))

import numpy as np
import tensorflow as tf
from tensorflow.keras.utils import save_img
from cycleGAN.src.config import IMAGE_SIZE

app = Flask(__name__)
CORS(app)

# --- Configuration ---
IMAGES_ROOT = PROJECT_ROOT / "images"
MONET_ORIGINALS = IMAGES_ROOT / "artists" / "monet" / "monet_jpg"
MONET_GENERATED = IMAGES_ROOT / "artists" / "monet" / "monet_generated"
RANDOM_PHOTOS = IMAGES_ROOT / "random_images" / "photo_jpg"
GENERATED_OUTPUT = IMAGES_ROOT / "generated_images"
GENERATED_OUTPUT.mkdir(parents=True, exist_ok=True)

TEMP_DIR = Path(__file__).resolve().parent / "tmp"
TEMP_DIR.mkdir(parents=True, exist_ok=True)

# Load model once at startup
monet_generator = tf.keras.models.load_model(
    str(PROJECT_ROOT / "cycleGAN" / "saved_models" / "monet_generator.h5")
)


def _list_images(folder: Path) -> list[Path]:
    """List all image files in a folder (non-recursive, skip dotfiles)."""
    if not folder.exists():
        return []
    exts = {".jpg", ".jpeg", ".png"}
    return [f for f in folder.iterdir() if f.is_file() and f.suffix.lower() in exts]


def _random_image(folder: Path):
    """Return a random image file from a folder as a Flask response."""
    images = _list_images(folder)
    if not images:
        return jsonify({"error": f"No images found in {folder.name}"}), 404
    chosen = random.choice(images)
    return send_file(str(chosen), mimetype="image/jpeg")


def _transform_image(image: Image.Image) -> tf.Tensor:
    """Preprocess a PIL image for the CycleGAN generator."""
    arr = tf.keras.preprocessing.image.img_to_array(image)
    arr = (tf.cast(arr, tf.float32) / 127.5) - 1
    arr = tf.image.resize(arr, [IMAGE_SIZE, IMAGE_SIZE])
    arr = tf.reshape(arr, [IMAGE_SIZE, IMAGE_SIZE, 3])
    return tf.expand_dims(arr, 0)


# --- Health ---
@app.route("/healthcheck")
def healthcheck():
    return jsonify({"status": "ok"})


# --- Game endpoints (ported from Java backend) ---
@app.route("/images/monet/original")
def monet_original():
    return _random_image(MONET_ORIGINALS)


@app.route("/images/monet/generated")
def monet_generated():
    return _random_image(MONET_GENERATED)


@app.route("/images/random")
def random_photo():
    return _random_image(RANDOM_PHOTOS)


# --- Generator endpoint (from original Flask backend) ---
@app.route("/generate/image/monet", methods=["POST"])
def generate_monet():
    if "image" not in request.files:
        return jsonify({"error": "No image file provided"}), 400

    image_file = request.files["image"]
    image = Image.open(image_file.stream).convert("RGB")
    tensor = _transform_image(image)
    generated = monet_generator(tensor)[0]

    ts = int(time.mktime(datetime.datetime.now().timetuple()) * 1000)
    filename = f"generated_{ts}.jpg"
    output_path = TEMP_DIR / filename

    save_img(str(output_path), generated)
    return send_file(str(output_path), mimetype="image/jpeg")


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
