#!/bin/bash
npx cap sync
cd android
./gradlew clean build
cd ..
#adb install android/app/build/outputs/apk/debug/app-debug.apk
