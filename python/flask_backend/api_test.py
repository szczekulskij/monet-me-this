from io import BytesIO
from PIL import Image
import requests
import shutil

url = 'http://127.0.0.1:5000/generate/image/monet'
my_img = {'image': open('test.jpg', 'rb')}
r = requests.post(url, files=my_img, stream=True)

print(r.status_code)
# print(r.headers)
# print(r.url)
# print(r.content)

im = Image.open(BytesIO(r.content))
im.show()