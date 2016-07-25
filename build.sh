#!/bin/bash

#brew install jq

#jq --indent 2 '.version = ((.version | tonumber) + 0.01 | tostring)' src/package.json > tmp.$$.json && mv tmp.$$.json src/package.json
version="$(jq -r '.version' src/package.json)"
versionUnderscore=${version//./_}

/usr/libexec/PlistBuddy -c "Set :CFBundleShortVersionString ${version}" "./build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Info.plist"
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion ${version}" "./build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Info.plist"


############ Windows ############
echo "Build Windows"
rm -rf build/DagomaDoctor-win32-x64/resources/app/
cp -R src/ build/DagomaDoctor-win32-x64/resources/app
rm -rf build/DagomaDoctor-win32-x64/resources/app/node_modules
cp -R build/modules/win/node_modules/ build/DagomaDoctor-win32-x64/resources/app/node_modules
asar pack build/DagomaDoctor-win32-x64/resources/app/ build/DagomaDoctor-win32-x64/resources/app.asar
rm -rf build/DagomaDoctor-win32-x64/resources/app/

############ Mac ############
echo "Build Mac"
rm -rf build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/
cp -R src/ build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/
rm -rf build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/node_modules
cp -R build/modules/mac/node_modules/ build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/node_modules
asar pack build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/ build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app.asar
rm -rf build/DagomaDoctor-darwin-x64/DagomaDoctor.app/Contents/Resources/app/

############ Linux ############
echo "Build Linux"
rm -rf build/DagomaDoctor-linux-x64/resources/app/
cp -R src/ build/DagomaDoctor-linux-x64/resources/app
rm -rf build/DagomaDoctor-linux-x64/resources/app/node_modules
cp -R build/modules/linux/node_modules/ build/DagomaDoctor-linux-x64/resources/app/node_modules
asar pack build/DagomaDoctor-linux-x64/resources/app/ build/DagomaDoctor-linux-x64/resources/app.asar
rm -rf build/DagomaDoctor-linux-x64/resources/app/
tar -czf build/DagomaDoctor-linux-x64.tar.gz build/DagomaDoctor-linux-x64

echo "Build Finished"
