# monet-me-this Web App Game
You can find a live version at [monet-me-this.com](http://monet-me-this.com/).

# Frontend
## Requirements
* node - v20.5.0
* npm - 9.8.0

## Dependencies installation
* install dependencies - `npm config set legacy-peer-deps true && npm i && npm install node-sass@latest && npm update && npm install` (can skip `npm update`)
* install gatsby cli - `npm install -g gatsby-cli`
* install lintering - `npm install --save-dev eslint-plugin-prettier`

## Running website locally and debugging
* `npm run develop` - start off your website quickly (eg. without compiling)
* `gatsby build` - build your code (eg. compile your code into public folder)
* `gatsby serve` - serve your built code
* `gatsby clean` - remove your built code (eg. the one from /public folder)
* `npm linter` - linter your repo 

## Coding in this repo
* You should utilize already existing designs created for [material-ui](https://mui.com/material-ui/icons/)
* The public folder is autogenerated (therefore better to ignore it within git), yet for CV re-direct (look `href="/resume.pdf"`) code snippet to work, the resume.pdf has to be in `/public` folder.
* Therefore my own command to built for deployment: `gatsby clean && gatsby build && cp src/assets/resume.pdf public/.` 

## Frameworks and packages used
- [Gatsby](https://www.gatsbyjs.com/) (Based on [React](https://reactjs.org/))
- [Material-UI](https://material-ui.com/)
- [react-tsparticles](https://github.com/matteobruni/tsparticles)
- [react-vertical-timeline-component](https://github.com/stephane-monnot/react-vertical-timeline)
- ... and more!



# Backends:

## Java's backend endpoints:
* http://localhost:8080/images/monet/original
* http://localhost:8080/images/monet/generated
* http://localhost:8080/images/image
* http://localhost:8080/images/generated
* http://localhost:8080/healthcheck

## Python backend calls:
To run backend: `python python/flask_backend/app.py`
* http://localhost:5000/generate/image/monet
* http://localhost:5000/healthcheck



# CycleGAN:
## Requirements
* python - 3.8.16