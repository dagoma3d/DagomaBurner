#!/bin/bash

#brew install jq

#jq --indent 2 '.version = ((.version | tonumber) + 0.01 | tostring)' src/package.json > tmp.$$.json && mv tmp.$$.json src/package.json
version="$(jq -r '.version' src/package.json)"
versionUnderscore=${version//./_}

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${version}" "./build/electron-v0.36.4-darwin-x64/DagomaBurner.app/Contents/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${version}" "./build/electron-v0.36.4-darwin-x64/DagomaBurner.app/Contents/Info.plist"


# Windows
asar pack src/ app.asar
cp app.asar ./build/electron-v0.36.4-win32-x64/resources/

cp -R "./build/electron-v0.36.4-win32-x64" "./build/DagomaBurner ${versionUnderscore}"

# MAC
#asar pack src/ app.asar
#cp app.asar "./build/electron-v0.36.4-darwin-x64/DagomaBurner.app/Contents/Resources/"
#cp -R "./build/electron-v0.36.4-darwin-x64/DagomaBurner.app" "./build/DagomaBurner ${versionUnderscore}.app"
