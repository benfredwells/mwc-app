to run build / clean scripts:
npm run build
npm run clean

the build script is defined in package.json

to compile typescript:
npx tsc

to create bundle.js:
npx rollup -c --bundleConfigAsCjs

files are copied using npx copyfiles