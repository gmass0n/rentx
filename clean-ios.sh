#!/bin/bash

pkill -x "Simulator"

rm -rf .expo

rm -rf node_modules
yarn

cd ios
rm -rf ~/Library/Caches/CocoaPods
rm -rf Pods
rm -rf Podfile.lock
rm -rf ~/Library/Developer/Xcode/DerivedData/*
pod deintegrate
pod setup
pod install