const parseUrl = require('./url-parser.js')

// Example :
const urlFormat = '/:version/api/:collection/:id';
const urlInstance = '/6/api/listings/3?sort=desc&limit=10';

const parsedUrl = parseUrl(urlFormat, urlInstance);
console.log(parsedUrl);
