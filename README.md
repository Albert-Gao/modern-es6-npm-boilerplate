# Modern ES6 NPM Boilerplate

[![Build Status](https://travis-ci.org/Albert-Gao/modern-es6-npm-boilerplate.svg?branch=master)](https://travis-ci.org/Albert-Gao/modern-es6-npm-boilerplate)

A template which you could use to write your NPM package via ES6 syntax.

It uses:

- Babel
- Jest
- ESLint (with Airbnb and prettier)

Just added 1 more:

- "babel-plugin-transform-object-rest-spread",

## How to use

1. Clone this repo from github
   - `git clone https://github.com/Mr-Binary/es6-npm-boilerplate.git`
1. Inside repo directory run `npm install && rm -r .git && git init`
1. Update package.json with your information

## Commands

- `npm run check` : Checking the updates of all your dependencies
- `npm run lint` : linting via ESLint
- `npm run clean` : Clean the `./dist` folder
- `npm run build`: Clean and build `src` to `dist`
- `npm run test`: Run tests via `Jest`
- `npm run example`: Run example to see if the transpiled code works or not.
- `npm run prepublish`: Clean, lint, test then build,
- `npm run pub`: Interactive way to checking, clean, test, bumping version, tag commits, push repo and publish

## About travis

Instead of running the default `test` command, we will run the `npm run prepare` since it including all the phases for the final release.

And in the readme.md, we have a status icon which shows how to add that building status from Travis. Do remember to modify its URL after forking your repo.

## About .vscode folder

It contains an example to show how to debug the `Jest` test in Visual studio code, remove it if you don't want.

You should add `.vscode` to the `.gitignore` file.