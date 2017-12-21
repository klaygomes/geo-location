# Avenue Code UI Challenge #

GeoLocation is a working web application which aims to retrieve details about the user's location and allow the user to find out the physical location of websites, by displaying its hosting position on a map.

For this solution the following technologies were chosen:

 - React;
 - Redux;
 - Redux Sagas;
 - Next.js;
 - Jest;
 - Enzyme;
 - Storybook

## Online version
You can access an online version of this application by navigating to https://geo-location-challenge.herokuapp.com/ or if you are using a cellphone use the qr code below

![GeoLocation](static/geocode-site.png)

## Requirements

- Node v8.x.x
- NPM v5.x.x

In order to build this application localy you must first install [nodejs](https://nodejs.org/en/)

## Development scripts

### `npm install`

> Installs package dependencies

### `npm run dev`

> Start this project in development on `http://localhost:3000`. To use another port, you can run `npm run dev -- -p `.

### `npm run build`

> Build this project for publishing.

### `npm run start`

> Start this project in production mode on `http://localhost:3000`. You must run `npm run build`

### `npm run storybook`

> Start storybook on `http://localhost:9001`

### `npm run test`

> Execute all tests

### `npm run test:watch`

> Execute all tests, but keep watching for changes. Good for development.

### `npm run test:coverage`

> Generate coverage report into the folder `./coverage/Icov-report/`

## Configuration file

It is possible to change global configuration variables by editing `./env-config.js`. Check this file for more information.

## Storybook

We use [Storybook]! If you want to check this out [click here](https://geo-location-storybook.herokuapp.com/).

## Code coverage

You can check online a report of our [Code Coverage]

## Themes

This application is shipped with a basic `dark` theme, fell free to create you own changing `./theme.js` file and then editing `./env-config.json`, you should also create a stylesheet file into `./static/styles/` with the following name  `theme.[THEME_NAME].css`, where `THEME_NAME` is the name you gave to your theme, this is only needed if you wish a global style.

## How to Publish to Heroku

In order to publish this application and its artifacts to heroku you will need to install [heroku client] and ask `write` access to each repository/application.

### `./publish.sh`

> Publish [Geo Location Application] to `geo-location-challenge` heroku repository

### `./publish-storybook.sh`

> Publish [Storybook] to `geo-location-storybook` heroku repository

### `./publish-coverage.sh`

> Publish [Code Coverage] to `geo-location-coverage` heroku repository

## Windows users

Everything will work fine if you use `git-bash` as your terminal shell. [Click here](https://git-scm.com/downloads) to download/install if you don't have it yet.

## Commit Message Pattern

The convention adopted on this project is based on [AngularJS Git Commit Msg Convention]. See the
[commit history] for examples of properly-formatted commit messages.

```bash
<type>: <subject>

<body>
```

### Example commit message:

```bash
fix: ensure Range headers adhere more closely to RFC 2616

Add one new dependency, use `range-parser` (Express dependency) to compute
range. It is more well-tested in the wild.
```

### Message subject (first line)
The first line cannot be longer than 70 characters, the second line is always blank and
other lines should be wrapped at 80 characters. The type and scope should
be always lowercase as shown below.

#### Allowed `type` values:

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
[commit history]: https://bitbucket.org/klaygomes/ui-challenge/commits/all
[heroku client]:https://devcenter.heroku.com/articles/heroku-cli
[Geo Location Application]:https://geo-location-challenge.herokuapp.com/
[Storybook]:https://geo-location-storybook.herokuapp.com/
[Code Coverage]:https://geo-location-coverage.herokuapp.com/