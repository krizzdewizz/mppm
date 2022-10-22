#!/bin/bash

export ANDROID_HOME=/C/Users/christian.oetterli/AppData/Local/Android/Sdk

npx cap sync
cd android
./gradlew clean build
cd ..
#adb install android/app/build/outputs/apk/debug/app-debug.apk
