/* Module dependencies */

var debug = require('debug')('duo-sass');
var sass = require('node-sass');

/* Export `plugin` */

module.exports = plugin;

/**
 * Compile sass to css, optional using `opts`.
 *
 * @api public
 * @param {Object} [opts]
 * @return {Function}
 */

function plugin(opts) {
  opts = opts || {};
  return function sass(file) {
    if ('scss' != file.type) return;
    debug('compiling %s to css', file.id);
    file.src = render(file.src, opts);
    file.type = 'css';
  };
}

/**
 * Render the sass `src` with `opts`.
 *
 * @api private
 * @param {String} src
 * @param {Object} opts
 * @return {String}
 */

function render(src, opts) {
  return sass(src, opts).render();
}
