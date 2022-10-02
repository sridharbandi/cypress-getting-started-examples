## Cypress UI Automation Template with Page Object Model, Cucumber and Typescript

### How to use?
Create the Page Objects of your Web application under **_cypress/e2e/pages_** package and call those Page Objects in your step definitions under **_cypress/e2e/features/*/_** package (Sample Page Objects, Step definitions and Feature file included in this template)

### How to run?
To install the dependencies issue the below commands in project root directory
```javascript
npm install
``` 
To run the tests issue the below command
```javascript
npm test
``` 
By default it runs in Electron browser in headless mode. Below commands are to run the tests in headless and headed Chrome.
```javascript
npm run test:chrome              #Chrome 
npm run test:chrome:headless     #Chrome Headless
```

> Feel free to modify it to your own needs :)