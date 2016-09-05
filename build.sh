#!/usr/bin/env bash

echo "[INFO] Installing building tools ..."
npm install || exit 1

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
${PLISTBUDDY} -c "Set :CFBundleShortVersionString ${version}" "./build/DagomApp-darwin-x64/DagomApp.app/Contents/Info.plist"
${PLISTBUDDY} -c "Set :CFBundleVersion ${version}" "./build/DagomApp-darwin-x64/DagomApp.app/Contents/Info.plist"
fi

echo "[INFO] Cleaning all previous generated zip archive..."
rm -f build/*.zip
rm -f build/*.tar.gz

############ Windows ############
echo "[INFO] Building Windows ia32 ..."
rm -rf build/DagomApp-win-ia32/resources/app/
cp -R src/ build/DagomApp-win-ia32/resources/app
rm -rf build/DagomApp-win-ia32/resources/app/node_modules
cp -R build/modules/win-ia32/node_modules/ build/DagomApp-win-ia32/resources/app/node_modules
${ASAR} pack build/DagomApp-win-ia32/resources/app/ build/DagomApp-win-ia32/resources/app.asar
rm -rf build/DagomApp-win-ia32/resources/app/
bash -c "cd build && zip -y -r DagomApp-win-ia32.zip DagomApp-win-ia32 > /dev/null"
echo "[INFO] Built: build/DagomApp-win-ia32.zip"

############ Windows ############
echo "[INFO] Building Windows x64 ..."
rm -rf build/DagomApp-win-x64/resources/app/
cp -R src/ build/DagomApp-win-x64/resources/app
rm -rf build/DagomApp-win-x64/resources/app/node_modules
cp -R build/modules/win-x64/node_modules/ build/DagomApp-win-x64/resources/app/node_modules
${ASAR} pack build/DagomApp-win-x64/resources/app/ build/DagomApp-win-x64/resources/app.asar
rm -rf build/DagomApp-win-x64/resources/app/
bash -c "cd build && zip -y -r DagomApp-win-x64.zip DagomApp-win-x64 > /dev/null"
echo "[INFO] Built: build/DagomApp-win-x64.zip"

############ Mac ############
echo "[INFO] Building Mac ..."
rm -rf build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/
cp -R src/ build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/
rm -rf build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/node_modules
cp -R build/modules/mac/node_modules/ build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/node_modules
${ASAR} pack build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/ build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app.asar
rm -rf build/DagomApp-darwin-x64/DagomApp.app/Contents/Resources/app/
bash -c "cd build && zip -y -r DagomApp-darwin-x64.zip DagomApp-darwin-x64 > /dev/null"
echo "[INFO] Built: build/DagomApp-darwin-x64.zip"

############ Linux ############
echo "[INFO] Building Linux ..."
rm -rf build/DagomApp-linux-x64/resources/app/
cp -R src/ build/DagomApp-linux-x64/resources/app
rm -rf build/DagomApp-linux-x64/resources/app/node_modules
cp -R build/modules/linux/node_modules/ build/DagomApp-linux-x64/resources/app/node_modules
${ASAR} pack build/DagomApp-linux-x64/resources/app/ build/DagomApp-linux-x64/resources/app.asar
rm -rf build/DagomApp-linux-x64/resources/app/
tar -czf build/DagomApp-linux-x64.tar.gz -C build/ DagomApp-linux-x64
bash -c "cd build && zip -y -r DagomApp-linux-x64.zip DagomApp-linux-x64.tar.gz > /dev/null"
echo "[INFO] Built: build/DagomApp-linux-x64.zip"

echo "[INFO] Build Finished ..."
