# meta-scraper

## What:

Scrapes a remote page and extracts all the `<link/>`, `<meta/>`, and `<title/>` tags.

## Installation:

```sh
$ npm i pdehaan/meta-scraper -s
```

## Usage:

### API:

```js
const { areWeMetaYet } = require('meta-scraper');

areWeMetaYet('https://reddit.com/r/worldnews')
  .then(({link, meta, title}) => [].concat(link, meta, title))
  .then((tags) => tags.sort().join('\n'))
  .then(console.log)
  .catch(console.error);
```

### CLI:

```sh
# Assuming `meta-scraper` is installed globally
$ meta-scraper -u https://reddit.com/r/funny
```

Alternatively, you can install `meta-scraper` locally and then call `meta-scraper` via package.json `scripts`:

```js
"scripts": {
  "cli": "meta-scraper -u https://reddit.com/r/funny",
  "cli2": "meta-scraper -u "
}
```

Now you can call `meta-scraper` in one of two ways:

1. `$ npm run cli` &mdash; Will scrape the URL specified in package.json and dump the meta tags.
2. `$ npm run cli2 -- https://reddit.com/r/gaming` &mdash; Will scrape the URL specified on the CLI and dump the meta tags.

You see the /example/ directory for full code of all the options above.

#### Output:

```html
<link rel="alternate" media="only screen and (max-width: 640px)" href="https://m.reddit.com/r/sports/">
<link rel="alternate" type="application/atom+xml" title="RSS" href="https://www.reddit.com/r/sports/.rss">
<link rel="apple-touch-icon-precomposed" href="//www.redditstatic.com/icon-touch.png">
<link rel="canonical" href="https:///r/sports/">
<link rel="dns-prefetch" href="//out.reddit.com">
<link rel="icon" href="//www.redditstatic.com/icon.png" sizes="256x256" type="image/png">
<link rel="preconnect" href="//out.reddit.com">
<link rel="shortcut icon" href="//www.redditstatic.com/favicon.ico" type="image/x-icon">
<link rel="stylesheet" href="https://b.thumbs.redditmedia.com/AzLuMkhZfk6jBhwHZPyXZuLVQKLhPM4ToSrm52U_28M.css" title="applied_subreddit_stylesheet" type="text/css">
<link rel="stylesheet" type="text/css" href="//www.redditstatic.com/reddit.DZIb11y75Do.css" media="all">
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="description" content="reddit: the front page of the internet">
<meta name="keywords" content=" reddit, reddit.com, vote, comment, submit ">
<meta name="referrer" content="always">
<meta name="viewport" content="width=1024">
<meta property="og:description" content="The central hub for all things sports on reddit.">
<meta property="og:image" content="https://www.redditstatic.com/icon.png">
<meta property="og:site_name" content="reddit">
<meta property="og:title" content="the sportspage of the Internet &#x2022; /r/sports">
<meta property="twitter:card" content="summary">
<meta property="twitter:site" content="reddit">
<meta property="twitter:title" content="the sportspage of the Internet &#x2022; /r/sports">
<title>the sportspage of the Internet</title>
```
