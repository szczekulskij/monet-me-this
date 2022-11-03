# monet-me-this
monet paiting comparison(og vs artificial) based on GAN's generated paintings



# Useful commands:
* `ts-node file.ts` -> comiple an execute a file without creating a js copy
* `tsc file.ts` -> compile file into javascript file: `file.js`



## Useful information:
* Initial fronted template taken from [link](https://github.com/issaafalkattan/React-Landing-Page-Template)


### Java's backend endpoints:
* http://localhost:8080/images/monet/original
* http://localhost:8080/images/monet/generated
* http://localhost:8080/images/image
* http://localhost:8080/healthcheck

### Python backend calls:
To run backend: `python python/flask_backend/app.py`
* http://localhost:5000/generate/image/monet
* http://localhost:5000/healthcheck