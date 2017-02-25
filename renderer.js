// works with the normal build
// fails with webpack-dev-server

var _ = require('lodash');

console.log('lodash', Object.keys(_));
console.log('paths', global.module.paths);