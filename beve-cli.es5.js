'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

var _beGoods = require('be-goods');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (!(0, _beGoods.isLocal)('gulp', { strict: true })) {
  console.error('Gulp insists to be installed locally.');
  console.error('Preferably a devDependency.');
  var where = _path2.default.normalize(process.cwd() + '/node_modules/');
  console.error('Not found in ' + where + '.');
  process.exit(1);
}

var found = false;
var gulp = [_path2.default.normalize(process.cwd() + '/node_modules/.bin/gulp'), _path2.default.join(_path2.default.dirname(_fs2.default.realpathSync(__filename)), '/gulp'), _path2.default.normalize(process.cwd() + '/node_modules/beverage/node_modules/gulp/bin/gulp.js')];
var argv = _yargs2.default.usage('beverage [gulp-tasks]').option('h', { alias: ['help', '?'], type: 'boolean', description: 'show beverage help + `gulp help --silent`' }).option('o', { alias: 'options', type: 'boolean', description: 'same as `gulp beverage --silent`' }).argv;
var tasks = argv._;
var beverage = argv.o || _ramda2.default.contains('beverage', tasks);
var help = argv.h || _ramda2.default.contains('help', tasks) || _ramda2.default.isEmpty(tasks);

// if it's juts node + beverage (with neither task nor options given)
if (process.argv.length <= 2) {
  console.log('');
  console.log('Usage: beverage -?');
}

// *non-beverage-options*
// not passed on to gulp
process.argv = _ramda2.default.difference(process.argv, ['-o', '--options', '-?', '-h', '--help']);

if (beverage || help) {
  // this is a silent gulp
  process.argv.push('--silent');

  // add tasks for options
  if (help && !_ramda2.default.contains('help', tasks)) {
    process.argv.splice(2, 0, 'help');
  }
  if (beverage && !_ramda2.default.contains('beverage', tasks)) {
    process.argv.splice(2, 0, 'beverage');
  }
}

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = gulp[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var file = _step.value;

    try {
      require(file); // delegate to gulp
      found = true;
      if (argv.h) {
        console.log('\n' + _yargs2.default.help() + '\nRunning `gulp ' + process.argv.slice(2).join(' ') + '` now...');
      }
      break;
    } catch (e) {}
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

if (!found) {
  console.error('gulp not found at:');console.error(gulp);
  process.exit(1);
}

//# sourceMappingURL=data:application/json;base64,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S0FiRCxDQWFFLE9BQU8sQ0FBUCxFQUFVLENBQUU7QUFDZjs7Ozs7Ozs7Ozs7Ozs7OztBQUVELElBQUksQ0FBQyxLQUFMLEVBQVk7QUFDVixVQUFRLEtBQVIsQ0FBYyxvQkFBZCxFQUFxQyxRQUFRLEtBQVIsQ0FBYyxJQUFkO0FBQ3JDLFVBQVEsSUFBUixDQUFhLENBQWI7QUFDRCIsImZpbGUiOiJiZXZlLWNsaS5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnXG5pbXBvcnQge2lzTG9jYWx9IGZyb20gJ2JlLWdvb2RzJ1xuXG5pZiAoIWlzTG9jYWwoJ2d1bHAnLCB7c3RyaWN0OiB0cnVlfSkpIHtcbiAgY29uc29sZS5lcnJvcignR3VscCBpbnNpc3RzIHRvIGJlIGluc3RhbGxlZCBsb2NhbGx5LicpXG4gIGNvbnNvbGUuZXJyb3IoJ1ByZWZlcmFibHkgYSBkZXZEZXBlbmRlbmN5LicpXG4gIGxldCB3aGVyZSA9IHBhdGgubm9ybWFsaXplKGAke3Byb2Nlc3MuY3dkKCl9L25vZGVfbW9kdWxlcy9gKVxuICBjb25zb2xlLmVycm9yKGBOb3QgZm91bmQgaW4gJHt3aGVyZX0uYClcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG5cbmxldCBmb3VuZCA9IGZhbHNlXG5jb25zdCBndWxwID0gW1xuICBwYXRoLm5vcm1hbGl6ZShwcm9jZXNzLmN3ZCgpICsgJy9ub2RlX21vZHVsZXMvLmJpbi9ndWxwJyksXG4gIHBhdGguam9pbihwYXRoLmRpcm5hbWUoZnMucmVhbHBhdGhTeW5jKF9fZmlsZW5hbWUpKSwgJy9ndWxwJyksXG4gIHBhdGgubm9ybWFsaXplKHByb2Nlc3MuY3dkKCkgKyAnL25vZGVfbW9kdWxlcy9iZXZlcmFnZS9ub2RlX21vZHVsZXMvZ3VscC9iaW4vZ3VscC5qcycpXG5dXG5sZXQgYXJndiA9IHlhcmdzXG4gIC51c2FnZSgnYmV2ZXJhZ2UgW2d1bHAtdGFza3NdJylcbiAgLm9wdGlvbignaCcsIHthbGlhczogWydoZWxwJywgJz8nXSwgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3Nob3cgYmV2ZXJhZ2UgaGVscCArIGBndWxwIGhlbHAgLS1zaWxlbnRgJ30pXG4gIC5vcHRpb24oJ28nLCB7YWxpYXM6ICdvcHRpb25zJywgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3NhbWUgYXMgYGd1bHAgYmV2ZXJhZ2UgLS1zaWxlbnRgJ30pXG4gIC5hcmd2XG5sZXQgdGFza3MgPSBhcmd2Ll9cbmxldCBiZXZlcmFnZSA9IGFyZ3YubyB8fCBSLmNvbnRhaW5zKCdiZXZlcmFnZScsIHRhc2tzKVxubGV0IGhlbHAgPSBhcmd2LmggfHwgUi5jb250YWlucygnaGVscCcsIHRhc2tzKSB8fCBSLmlzRW1wdHkodGFza3MpXG5cbi8vIGlmIGl0J3MganV0cyBub2RlICsgYmV2ZXJhZ2UgKHdpdGggbmVpdGhlciB0YXNrIG5vciBvcHRpb25zIGdpdmVuKVxuaWYgKHByb2Nlc3MuYXJndi5sZW5ndGggPD0gMikge1xuICBjb25zb2xlLmxvZygnJylcbiAgY29uc29sZS5sb2coJ1VzYWdlOiBiZXZlcmFnZSAtPycpXG59XG5cbi8vICpub24tYmV2ZXJhZ2Utb3B0aW9ucypcbi8vIG5vdCBwYXNzZWQgb24gdG8gZ3VscFxucHJvY2Vzcy5hcmd2ID0gUi5kaWZmZXJlbmNlKHByb2Nlc3MuYXJndixcbiAgWyctbycsICctLW9wdGlvbnMnLCAnLT8nLCAnLWgnLCAnLS1oZWxwJ10pXG5cbmlmIChiZXZlcmFnZSB8fCBoZWxwKSB7XG4gIC8vIHRoaXMgaXMgYSBzaWxlbnQgZ3VscFxuICBwcm9jZXNzLmFyZ3YucHVzaCgnLS1zaWxlbnQnKVxuXG4gIC8vIGFkZCB0YXNrcyBmb3Igb3B0aW9uc1xuICBpZiAoaGVscCAmJiAhUi5jb250YWlucygnaGVscCcsIHRhc2tzKSkge1xuICAgIHByb2Nlc3MuYXJndi5zcGxpY2UoMiwgMCwgJ2hlbHAnKVxuICB9XG4gIGlmIChiZXZlcmFnZSAmJiAhUi5jb250YWlucygnYmV2ZXJhZ2UnLCB0YXNrcykpIHtcbiAgICBwcm9jZXNzLmFyZ3Yuc3BsaWNlKDIsIDAsICdiZXZlcmFnZScpXG4gIH1cbn1cblxuZm9yIChsZXQgZmlsZSBvZiBndWxwKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZShmaWxlKSAvLyBkZWxlZ2F0ZSB0byBndWxwXG4gICAgZm91bmQgPSB0cnVlXG4gICAgaWYgKGFyZ3YuaCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgeWFyZ3MuaGVscCgpICtcbiAgICAgICAgJ1xcblJ1bm5pbmcgYGd1bHAgJyArXG4gICAgICAgIHByb2Nlc3MuYXJndi5zbGljZSgyKS5qb2luKCcgJykgK1xuICAgICAgICAnYCBub3cuLi4nXG4gICAgICApXG4gICAgfVxuICAgIGJyZWFrXG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmlmICghZm91bmQpIHtcbiAgY29uc29sZS5lcnJvcignZ3VscCBub3QgZm91bmQgYXQ6Jyk7IGNvbnNvbGUuZXJyb3IoZ3VscClcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG4iXX0=