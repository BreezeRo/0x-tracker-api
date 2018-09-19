const _ = require('lodash');

const transformToken = token =>
  _.pick(token, ['address', 'imageUrl', 'name', 'symbol', 'price']);

module.exports = transformToken;
