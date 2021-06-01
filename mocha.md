npm i --save-dev mocha
npm i --save-dev chai
npm i --save-dev nyc
in test.spec.js
var chai = require('chai')
var expect= chai.expect;
var should= chai.should;
var assert= chai.assert;
  "scripts": {
    "test": "nyc mocha --reporter spec -w --recursive"
  },

Chai is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework.

Behavioral-Driven Development (BDD)

Test-Driven Development (TDD)