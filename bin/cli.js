#!/usr/bin/env node

const argv = require('yargs')
  .usage('Usage: $0 -u [string]')
  .alias('u', 'url')
  .demand(['u'])
  .argv;

const { areWeMetaYet } = require('../index');

areWeMetaYet(argv.url)
  .then(({link, meta, title}) => [].concat(link, meta, title))
  .then((tags) => tags.sort().join('\n'))
  .then(console.log) // eslint-disable-line no-console
  .catch(console.error); // eslint-disable-line no-console
