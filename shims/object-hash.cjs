const stringify = require('fast-json-stable-stringify');

const objectHash = (obj) => {
  // We don't actually need to hash it since it is only being used as cache keys
  return stringify(obj);
};

module.exports = objectHash;
