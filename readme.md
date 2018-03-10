# Project Documentation

This document is to provide information about the project
 - Approach
 - required software
 - how to run the project

## Approach
Use Angular 4 and webpack.
Create an API service to manage AJAX call and seperate it from the main component.
Only start searching after at least 3 characters.
Conditionally return recommended venues with name and rating or display no result message.

## Installing
### Required software
**NPM** comes as a part of **Node.js**. To install **Node.js** follow the instructions located here:
https://nodejs.org/en/

Once the node is installed, update the npm to the latest version
```
npm install npm@latest -g
```

### Installation process
Once you have pulled the source files, go to the root folder and run the following commands:
```
npm install
```

## Running
```
npm start
```
You need to open browser and type in http://localhost:8080

## Build
```
npm run build
```




