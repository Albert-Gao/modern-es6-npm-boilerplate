'use strict';

/* global require */

var People = require('./dist/index').default;

var people = new People('Albert', '26');

console.log(people.getPeople());
