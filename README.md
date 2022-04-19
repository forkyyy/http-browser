# HTTP BROWSER
HTTP Browser method using FlareSolverr

# Requirements:
- NodeJS 16.x

# Installation
- Execute the installation script: sh install.sh

# Install dependencies
- npm i request
- npm i colors
- npm i sync-request
- npm i request-promise
- npm i minimist

# Install FlareSolverr (This can take some minutes):
- Unzip solvers.zip
- cd solvers/flaresolver01; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver02; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver03; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver04; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver05; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver06; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver07; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver08; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver09; export PUPPETEER_PRODUCT=firefox; npm install; npm run
- cd ../; cd flaresolver10; export PUPPETEER_PRODUCT=firefox; npm install; npm run
  
# Usage
- Run the solvers using: python3 start_solvers.py
- Run the method using: node beta.js "https://website.com" 600 64 GET --mode browser --geo all --conn 32

# Information
- This method is the HTTP-BROWSER from booter.sx upgraded to HTTP/2.0 by forky & WeAreRainBowHAT
- Booter.sx hacked by T13R and forky
