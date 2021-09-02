# Chat app

Production url: https://pensive-einstein-d1b9a3.netlify.app/

## Hwo it works?

Username in chat app is by default set to Tomas. You can change it by
setting up name query in URL:

**example**:

localhost:3000?name=John

or

https://pensive-einstein-d1b9a3.netlify.app?name=John

## Getting start

Instal dependencies

`yarn`

Start dev server

`yarn start`

Start testing

`yarn test`

## Project structure

Project is bootstrapped by CRA.

**Folders** :

- builders - place for building tests fixtures
- config - place for app configurations
- exceptions - place for custom exceptions
- models - place for out model structutrs
- services - place where all logic and heavy lifting is located
- UI - place for our react components
