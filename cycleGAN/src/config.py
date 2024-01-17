from python.src.utils import connect_to_tpu

EPOCHS = 100
IMAGE_SIZE = 256
SIZE_RESIZE = 128
BATCH_SIZE = 16
AUTOTUNE, STRATEGY = connect_to_tpu()