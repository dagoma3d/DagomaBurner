
## For debian based distribution

### Update nodejs version
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs

### Compile

cd ${PROJECT}/src || exit 1

rm -rf node_modules && npm install

### Start

npm start
