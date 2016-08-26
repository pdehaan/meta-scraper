const cheerio = require('cheerio');
const fetch = require('node-fetch');

function areWeMetaYet(url) {
  return fetch(url)
    .then((res) => res.text())
    .then(cheerio.load)
    .then(($) => {
      const getTags = (sel) => $(sel).map((idx, el) => $(el)).get();
      return {
        link: getTags('link'),
        meta: getTags('meta'),
        title: getTags('title')
      }
    });
}

module.exports = {
  areWeMetaYet
};
