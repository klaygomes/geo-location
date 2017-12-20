# Avenue Code UI Challenge #

## Development scripts

### `npm install`

> Installs package dependencies

### `npm run dev`

> Start this project in development on `http://localhost:3000`. To use another port, you can run `npm run dev -- -p <your port here>`.

### `npm run build`

> Build this project for publishing.

### `npm run start`

> Start this project in production mode on `http://localhost:3000`. You must run `npm run build`

### `npm run storybook`

> Start storybook on `http://localhost:9001`

### `npm run test`

> Execute tests

### `npm run test:watch`

> Execute tests, but keep runing watching for changes. Good for development.

### `npm run test:coverage`

> Create coverage report

### Commit Message Pattern

This document is based on [AngularJS Git Commit Msg Convention]. See the
[commit history] for examples of properly-formatted commit messages.

```bash
<type>: <subject>

<body>
```

## Example commit message:

```bash
fix: ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use `range-parser` (Express dependency) to compute
range. It is more well-tested in the wild.
```

## Message subject (first line)
The first line cannot be longer than 70 characters, the second line is always blank and
other lines should be wrapped at 80 characters. The type and scope should
always be lowercase as shown below.

### Allowed `<type>` values:

* **feat** (new feature for the user, not a new feature for build script)
* **fix** (bug fix for the user, not a fix to a build script)
* **docs** (changes to the documentation)
* **style** (formatting, missing semi colons, etc; no production code change)
* **refactor** (refactoring production code, eg. renaming a variable)
* **test** (adding missing tests, refactoring tests; no production code change)
* **chore** (updating grunt tasks etc; no production code change)

## Message body
* uses the imperative, present tense: “change” not “changed” nor “changes”
* includes motivation for the change and contrasts with previous behavior

For more info about message body, see:

* http://365git.tumblr.com/post/3308646748/writing-git-commit-messages
* http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html


[AngularJS Git Commit Msg Convention]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
[commit history]: https://github.com/karma-runner/karma/commits/master