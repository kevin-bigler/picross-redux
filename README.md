# picross-redux

picross things

## Usage

```
npm i esm && npm i -D nodemon
npx nodemon -r esm <script>
# https://stackoverflow.com/questions/56953426/nodemon-crashes-when-trying-to-use-es6-modules-but-works-well-with-es5
```

### npm scripts

* `npm run start` - runs the compiler and a server at the same time in dev mode with HMR (Hot Module Replacement) 🔥.
* `npm run build` - runs the compiler once and generates a production build.
* `npm run build_serve` - it makes a build and serves it to port 8080.
* `npm run test` - runs the unit tests (.spec.ts files).

go to [http://localhost:1234](http://localhost:1234) in your browser. Done.
