# Modern ES6 NPM Boilerplate

A template which you could use to write your NPM package via ES6 syntax.

It uses:

- Babel
- Jest
- ESLint

Just added 1 more:

- "babel-plugin-transform-object-rest-spread",

## How to use

1. Clone this repo from github
   - `git clone https://github.com/Mr-Binary/es6-npm-boilerplate.git` 
1. Inside repo directory run `npm install && rm -r .git && git init`
1. Update package.json with your information

## Commands:

- `npm run lint` : linting via ESLint
- `npm run clean` : Clean the `./dist` folder
- `npm run build`: Clean and build `src` to `dist`
- `npm run test`: Run tests via `Jest`
- `npm run example`: Run example to see if the transpiled code works or not. 
- `npm run prepublish`: Clean, lint, test then build

## About .vscode folder

It contains an example to show how to debug the `Jest` test in Visual studio code, remove it if you don't want.

You should add `.vscode` to the `.gitignore` file.