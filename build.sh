#!/bin/bash

#brew install jq

jq --indent 2 '.version = ((.version | tonumber) + 0.01 | tostring)' src/package.json > tmp.$$.json && mv tmp.$$.json src/package.json
version="$(jq '.version | tonumber' src/package.json)"

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${version}" ./build/electron-v0.35.1-darwin-x64/SikwiConfigurator.app/Contents/Info.plist
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${version}" ./build/electron-v0.35.1-darwin-x64/SikwiConfigurator.app/Contents/Info.plist

asar pack src/ app.asar
cp app.asar ./build/electron-v0.35.1-darwin-x64/SikwiConfigurator.app/Contents/Resources/
cp app.asar ./build/electron-v0.35.1-win32-x64/resources/
