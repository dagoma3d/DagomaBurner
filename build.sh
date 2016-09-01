#!/usr/bin/env bash

echo "[INFO] Installing building tools ..."
npm install

#brew install jq

PLISTBUDDY=/usr/libexec/PlistBuddy
ASAR=node_modules/asar/bin/asar

echo "[INFO] Computing version number ..."

#jq --indent 2 '.version = ((.version | tonumber) + 0.01 | tostring)' src/package.json > tmp.$$.json && mv tmp.$$.json src/package.json
version="$(jq -r '.version' src/package.json)"
versionUnderscore=${version//./_}

echo "[INFO] Built Version: ${version}"

if [ "$(uname)" == "Darwin" ]
then
${PLISTBUDDY} -c "Set :CFBundleShortVersionString ${version}" "./build/Dagoma-darwin-x64/Dagoma.app/Contents/Info.plist"
${PLISTBUDDY} -c "Set :CFBundleVersion ${version}" "./build/Dagoma-darwin-x64/Dagoma.app/Contents/Info.plist"
fi

echo "[INFO] Cleaning all previous generated zip archive..."
rm -f build/*.zip
rm -f build/*.tar.gz

############ Windows ############
echo "[INFO] Building Windows ..."
rm -rf build/Dagoma-x64/resources/app/
cp -R src/ build/Dagoma-x64/resources/app
rm -rf build/Dagoma-x64/resources/app/node_modules
cp -R build/modules/win/node_modules/ build/Dagoma-x64/resources/app/node_modules
${ASAR} pack build/Dagoma-x64/resources/app/ build/Dagoma-x64/resources/app.asar
rm -rf build/Dagoma-x64/resources/app/
bash -c "cd build && zip -y -r Dagoma-x64.zip Dagoma-x64 > /dev/null"
echo "[INFO] Built: build/Dagoma-x64.zip"

############ Mac ############
echo "[INFO] Building Mac ..."
rm -rf build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/
cp -R src/ build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/
rm -rf build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/node_modules
cp -R build/modules/mac/node_modules/ build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/node_modules
${ASAR} pack build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/ build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app.asar
rm -rf build/Dagoma-darwin-x64/Dagoma.app/Contents/Resources/app/
bash -c "cd build && zip -y -r Dagoma-darwin-x64.zip Dagoma-darwin-x64 > /dev/null"
echo "[INFO] Built: build/Dagoma-darwin-x64.zip"

############ Linux ############
echo "[INFO] Building Linux ..."
rm -rf build/Dagoma-linux-x64/resources/app/
cp -R src/ build/Dagoma-linux-x64/resources/app
rm -rf build/Dagoma-linux-x64/resources/app/node_modules
cp -R build/modules/linux/node_modules/ build/Dagoma-linux-x64/resources/app/node_modules
${ASAR} pack build/Dagoma-linux-x64/resources/app/ build/Dagoma-linux-x64/resources/app.asar
rm -rf build/Dagoma-linux-x64/resources/app/
tar -czf build/Dagoma-linux-x64.tar.gz -C build/ Dagoma-linux-x64
bash -c "cd build && zip -y -r Dagoma-linux-x64.zip Dagoma-linux-x64.tar.gz > /dev/null"
echo "[INFO] Built: build/Dagoma-linux-x64.zip"

echo "[INFO] Build Finished ..."
