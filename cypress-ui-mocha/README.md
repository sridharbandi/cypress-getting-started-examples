## Cypress UI Automation Template with Page Object Model and Mocha

### How to use?
Create the Page Objects of your Web application under **_cypress/e2e/pages_** package and call those Page Objects in your mocha tests under **_cypress/e2e/specs/_** package (Sample Page Objects, Mocha tests included in this template)

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