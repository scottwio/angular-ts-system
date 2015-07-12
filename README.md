# angular-ts-system

run the below commands from public

to start typescript
    tsc --watch --sourceMap --outDir dist --module system -t es5 app/**/*.ts

to compile bundle
    jspm bundle-sfx dist/app dist/bundle.js -m
