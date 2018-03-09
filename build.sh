#!/usr/bin/env bash

APP_NAME=DagomApp

apply_update_url_to_config() {
	if test $# -lt 1
	then
		"[error] Need build date as first parameter"
		exit 1
	fi
	if test $# -lt 2
	then
		"[error] Need build code as second parameter"
		exit 1
	fi
	UPDATE_URL="http://dist.dagoma.fr/update/diff/${APP_NAME}/${1}/${2}"
	git checkout src/config.json
	sed -i "s#THE_UPDATE_URL#${UPDATE_URL}#" src/config.json
  sed -i "s#\"THE_BUILD_DATE\"#${1}#" src/config.json
}

if test $# -lt 1
then
	echo "[error] Please provide a build_date as first parameter"
	bdExample=`git log -1 --format=%ct`
	echo "[error] E.g: ${0} ${bdExample}"
	exit 1
fi

BUILD_DATE=$1

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
${PLISTBUDDY} -c "Set :CFBundleShortVersionString ${version}" "./build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Info.plist"
${PLISTBUDDY} -c "Set :CFBundleVersion ${version}" "./build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Info.plist"
fi

echo "[INFO] Cleaning all previous generated zip archive..."
rm -f build/*.zip
rm -f build/*.tar.gz
rm -f build/*.diff

############ Windows ############
echo "[INFO] Building Windows ia32 ..."

# Obtanined by : echo -n 'win-arc:ia3' | md5sum
#BIN_HASH="a937d125692dd4f0f86f89458326881d"
# New update hash from : echo -n 'os:win-arc:ia3' | md5sum
BIN_HASH="2ae1978d18e9da2c76c3e604c065bfa4"
apply_update_url_to_config "${BUILD_DATE}" "${BIN_HASH}"

rm -rf build/${APP_NAME}-win-ia32/resources/app/
cp -R src/ build/${APP_NAME}-win-ia32/resources/app
rm -rf build/${APP_NAME}-win-ia32/resources/app/node_modules
cp -R build/modules/win-ia32/node_modules/ build/${APP_NAME}-win-ia32/resources/app/node_modules
bash -c "cd build/${APP_NAME}-win-ia32/resources && zip -y -r ../../${APP_NAME}-win-ia32.diff app > /dev/null"
${ASAR} pack build/${APP_NAME}-win-ia32/resources/app/ build/${APP_NAME}-win-ia32/resources/app.asar
rm -rf build/${APP_NAME}-win-ia32/resources/app/
bash -c "cd build && zip -y -r ${APP_NAME}-win-ia32.zip ${APP_NAME}-win-ia32 > /dev/null"
echo "[INFO] Built: build/${APP_NAME}-win-ia32.zip"

############ Windows ############
echo "[INFO] Building Windows x64 ..."

# Obtanined by : echo -n 'win-arc:x64' | md5sum
#BIN_HASH="29784abacee62e7b397e41a65a26b56d"
# New update hash from : echo -n 'os:win-arc:x64' | md5sum
BIN_HASH="59aadf3454997763c10755b4c5e41039"
apply_update_url_to_config "${BUILD_DATE}" "${BIN_HASH}"

rm -rf build/${APP_NAME}-win-x64/resources/app/
cp -R src/ build/${APP_NAME}-win-x64/resources/app
rm -rf build/${APP_NAME}-win-x64/resources/app/node_modules
cp -R build/modules/win-x64/node_modules/ build/${APP_NAME}-win-x64/resources/app/node_modules
bash -c "cd build/${APP_NAME}-win-x64/resources && zip -y -r ../../${APP_NAME}-win-x64.diff app > /dev/null"
${ASAR} pack build/${APP_NAME}-win-x64/resources/app/ build/${APP_NAME}-win-x64/resources/app.asar
rm -rf build/${APP_NAME}-win-x64/resources/app/
bash -c "cd build && zip -y -r ${APP_NAME}-win-x64.zip ${APP_NAME}-win-x64 > /dev/null"
echo "[INFO] Built: build/${APP_NAME}-win-x64.zip"

############ Mac ############
echo "[INFO] Building Mac ..."

# Obtanined by : echo -n 'mac' | md5sum
#BIN_HASH="140c1f12feeb2c52dfbeb2da6066a73a"
# New update hash from : echo -n 'os:mac' | md5sum
BIN_HASH="da2c74615500af2d5233d1fa9938505b"
apply_update_url_to_config "${BUILD_DATE}" "${BIN_HASH}"

rm -rf build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/
cp -R src/ build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/
rm -rf build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/node_modules
cp -R build/modules/mac/node_modules/ build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/node_modules
bash -c "cd build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources && zip -y -r ../../../../${APP_NAME}-darwin-x64.diff app > /dev/null"
${ASAR} pack build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/ build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app.asar
rm -rf build/${APP_NAME}-darwin-x64/${APP_NAME}.app/Contents/Resources/app/
bash -c "cd build && zip -y -r ${APP_NAME}-darwin-x64.zip ${APP_NAME}-darwin-x64 > /dev/null"
echo "[INFO] Built: build/${APP_NAME}-darwin-x64.zip"

############ Linux ############
echo "[INFO] Building Linux ..."

# Obtanined by : echo -n 'lin' | md5sum
#BIN_HASH="c93169f1eb9be7246f990690b5e66b2d"
# New update hash from : echo -n 'os:lin' | md5sum
BIN_HASH="6b9de332f1b95f66d80e364c87d5b41f"
apply_update_url_to_config "${BUILD_DATE}" "${BIN_HASH}"

rm -rf build/${APP_NAME}-linux-x64/resources/app/
cp -R src/ build/${APP_NAME}-linux-x64/resources/app
rm -rf build/${APP_NAME}-linux-x64/resources/app/node_modules
cp -R build/modules/linux/node_modules/ build/${APP_NAME}-linux-x64/resources/app/node_modules
bash -c "cd build/${APP_NAME}-linux-x64/resources && zip -y -r ../../${APP_NAME}-linux-x64.diff app > /dev/null"
${ASAR} pack build/${APP_NAME}-linux-x64/resources/app/ build/${APP_NAME}-linux-x64/resources/app.asar
rm -rf build/${APP_NAME}-linux-x64/resources/app/
tar -czf build/${APP_NAME}-linux-x64.tar.gz -C build/ ${APP_NAME}-linux-x64
bash -c "cd build && zip -y -r ${APP_NAME}-linux-x64.zip ${APP_NAME}-linux-x64.tar.gz > /dev/null"
echo "[INFO] Built: build/${APP_NAME}-linux-x64.zip"

echo "[INFO] Build Finished ..."
