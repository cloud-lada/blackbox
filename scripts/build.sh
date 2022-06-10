#!/usr/bin/bash

set -e

rm -f blackbox.js
rm -rf build

esbuild src/main.ts --bundle --outfile=blackbox.js --platform=node --minify --analyze
chmod +x blackbox.js
mkdir -p build
cp node_modules/rpio/build/Release/rpio.node build/rpio.node
