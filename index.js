/**
 * Module dependencies.
 */

var assign = require('object-assign');
var debug = require('debug')('duo-sass');
var sass = require('node-sass');

/**
 * Export `plugin`.
 */

module.exports = plugin;

/**
 * Compile Sass to CSS, optional using `opts`.
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
 * Render the Sass `src` with `opts`.
 *
 * @api private
 * @param {String} src
 * @param {Object} opts
 * @return {String}
 */

function render(src, opts) {
  return sass.renderSync(assign(opts, { data: src }));
}
