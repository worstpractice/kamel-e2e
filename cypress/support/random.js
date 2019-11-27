'use strict';
const Chance = require('chance');

const chance = new Chance();

chance.mixin({
  domain() {
    const domains = ['se', 'com', 'org', 'net', 'de', 'es'];
    return `${chance.pickone(domains)}`.replace(/[^a-z0-9]/gi, '');
  },
});

chance.mixin({
  password() {
    return `${chance.animal().toLowerCase()}${chance.integer().toString().slice(0, 3)}`.replace(/[^a-z0-9]/gi, '');
  },
});

chance.mixin({
  email() {
    return {
      email: `${chance.word().toLowerCase()}@${chance.word()}.${chance.url()}`.replace(/[^a-z0-9]/gi, ''),
    };
  },
});

chance.mixin({
  user() {
    const [firstName, lastName] = chance.name().split(' ');
    const languages = ['French', 'German', 'Swedish', 'Spanish', 'English', 'Finnish', 'Swahili'];
    return {
      name: `${firstName} ${lastName}`,
      password: chance.password(),
      email: `${firstName}.${lastName}@${chance.word()}.${chance.domain()}`.toLowerCase(),
      language: chance.pickone(languages),
    };
  },
});

module.exports = { random: chance };
