#!/usr/bin/bash

set -e

rm -f blackbox.js
rm -rf build

esbuild src/index.ts --bundle --outfile=blackbox.js --platform=node --minify
mkdir -p build
cp node_modules/rpio/build/Release/rpio.node build/rpio.node
