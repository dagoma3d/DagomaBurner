
## For debian based distribution

### Update nodejs version
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

### Compile

cd ${PROJECT}/src || exit 1

sudo npm install -g electron-prebuilt@1.2.3
rm -rf node_modules && npm install

### Start

npm start


### TODO :

- graisser les axes,
- test de premiere couche
- m119 pour l'état des endstops
- m114 position que marlin pense être
- m115 l'UUID,...
-


### Check webhook...
