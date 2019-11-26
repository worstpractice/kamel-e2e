'use strict';
const Chance = require('chance');

const chance = new Chance();

chance.mixin({
  password() {
    return {
      password: `${chance.animal().toLowerCase()}${chance.integer().toString().slice(0, 3)}`.replace(/[^a-z0-9]/gi, ''),
    };
  },
});

chance.mixin({
  user() {
    return {
      name: chance.name(),
      password: chance.password(),
      email: chance.email(),
    };
  },
});

module.exports = { random: chance };
