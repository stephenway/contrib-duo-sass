var Duo = require('duo');
var assert = require('assert');
var fs = require('co-fs');
var path = require('path');
var fixture = path.join.bind(path, __dirname, 'fixtures');
var join = path.join;
var extname = path.extname;
var sass = require('..');

describe('duosass', function () {
  it('should transpile sass to css', function *() {
    var root = fixture('simple');
    var duo = Duo(root);
    duo.entry(join(root, 'index.scss'));
    duo.use(sass());
    var actual = yield duo.run();
    var expected = yield fs.readFile(join(root, 'index.css'), 'utf8');
    assert.equal(actual.trim(), expected.trim());
  });
});
