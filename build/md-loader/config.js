const Config = require('markdown-it-chain');
const anchor = require('markdown-it-anchor');
const slugify = require('transliteration').slugify;
const overWriteFenceRule = require('./fence');
const containers = require('./containers');

const config = new Config();
config
  .options.html(true).end()

  .plugin('anchor').use(anchor, [
    {
      level: 2,
      slugify: slugify,
      permalink: true,
      permalinkBefore: true
    }
  ]).end()

  .plugin('containers').use(containers).end();

const md = config.toMd();
overWriteFenceRule(md);

module.exports = md;
