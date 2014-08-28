var co = require('co');
var Duo = require('duo');
var sass = require('./');

co(function *(){
  var duo = Duo(__dirname + '/test/fixtures/simple');
  duo.entry('index.scss');
  duo.use(stylus());
  var css = yield duo.run();
  console.log(css)
})();
