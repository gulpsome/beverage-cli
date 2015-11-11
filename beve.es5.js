'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _yargs = require('yargs');

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

//# sourceMappingURL=data:application/json;base64,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O0FBQ0QsWUFBSztLQUNOLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRTtHQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBSSxDQUFDLEtBQUssRUFBRTtBQUNWLFNBQU8sQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxBQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDeEQsU0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQTtDQUNoQiIsImZpbGUiOiJiZXZlLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncydcbmxldCBmb3VuZCA9IGZhbHNlXG5jb25zdCBndWxwID0gW1xuICBwYXRoLm5vcm1hbGl6ZShwcm9jZXNzLmN3ZCgpICsgJy9ub2RlX21vZHVsZXMvLmJpbi9ndWxwJyksXG4gIHBhdGguam9pbihwYXRoLmRpcm5hbWUoZnMucmVhbHBhdGhTeW5jKF9fZmlsZW5hbWUpKSwgJy9ndWxwJyksXG4gIHBhdGgubm9ybWFsaXplKHByb2Nlc3MuY3dkKCkgKyAnL25vZGVfbW9kdWxlcy9iZXZlcmFnZS9ub2RlX21vZHVsZXMvZ3VscC9iaW4vZ3VscC5qcycpXG5dXG5sZXQgYXJndiA9IHlhcmdzXG4gIC51c2FnZSgnYmV2ZXJhZ2UgW2d1bHAtdGFza3NdJylcbiAgLm9wdGlvbignaCcsIHthbGlhczogWydoZWxwJywgJz8nXSwgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3Nob3cgYmV2ZXJhZ2UgaGVscCArIGBndWxwIGhlbHAgLS1zaWxlbnRgJ30pXG4gIC5vcHRpb24oJ28nLCB7YWxpYXM6ICdvcHRpb25zJywgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3NhbWUgYXMgYGd1bHAgYmV2ZXJhZ2UgLS1zaWxlbnRgJ30pXG4gIC5hcmd2XG5sZXQgdGFza3MgPSBhcmd2Ll9cbmxldCBiZXZlcmFnZSA9IGFyZ3YubyB8fCBSLmNvbnRhaW5zKCdiZXZlcmFnZScsIHRhc2tzKVxubGV0IGhlbHAgPSBhcmd2LmggfHwgUi5jb250YWlucygnaGVscCcsIHRhc2tzKSB8fCBSLmlzRW1wdHkodGFza3MpXG5cbi8vIGlmIGl0J3MganV0cyBub2RlICsgYmV2ZXJhZ2UgKHdpdGggbmVpdGhlciB0YXNrIG5vciBvcHRpb25zIGdpdmVuKVxuaWYgKHByb2Nlc3MuYXJndi5sZW5ndGggPD0gMikge1xuICBjb25zb2xlLmxvZygnJylcbiAgY29uc29sZS5sb2coJ1VzYWdlOiBiZXZlcmFnZSAtPycpXG59XG5cbi8vICpub24tYmV2ZXJhZ2Utb3B0aW9ucypcbi8vIG5vdCBwYXNzZWQgb24gdG8gZ3VscFxucHJvY2Vzcy5hcmd2ID0gUi5kaWZmZXJlbmNlKHByb2Nlc3MuYXJndixcbiAgWyctbycsICctLW9wdGlvbnMnLCAnLT8nLCAnLWgnLCAnLS1oZWxwJ10pXG5cbmlmIChiZXZlcmFnZSB8fCBoZWxwKSB7XG4gIC8vIHRoaXMgaXMgYSBzaWxlbnQgZ3VscFxuICBwcm9jZXNzLmFyZ3YucHVzaCgnLS1zaWxlbnQnKVxuXG4gIC8vIGFkZCB0YXNrcyBmb3Igb3B0aW9uc1xuICBpZiAoaGVscCAmJiAhUi5jb250YWlucygnaGVscCcsIHRhc2tzKSkge1xuICAgIHByb2Nlc3MuYXJndi5zcGxpY2UoMiwgMCwgJ2hlbHAnKVxuICB9XG4gIGlmIChiZXZlcmFnZSAmJiAhUi5jb250YWlucygnYmV2ZXJhZ2UnLCB0YXNrcykpIHtcbiAgICBwcm9jZXNzLmFyZ3Yuc3BsaWNlKDIsIDAsICdiZXZlcmFnZScpXG4gIH1cbn1cblxuZm9yIChsZXQgZmlsZSBvZiBndWxwKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZShmaWxlKSAvLyBkZWxlZ2F0ZSB0byBndWxwXG4gICAgZm91bmQgPSB0cnVlXG4gICAgaWYgKGFyZ3YuaCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgeWFyZ3MuaGVscCgpICtcbiAgICAgICAgJ1xcblJ1bm5pbmcgYGd1bHAgJyArXG4gICAgICAgIHByb2Nlc3MuYXJndi5zbGljZSgyKS5qb2luKCcgJykgK1xuICAgICAgICAnYCBub3cuLi4nXG4gICAgICApXG4gICAgfVxuICAgIGJyZWFrXG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmlmICghZm91bmQpIHtcbiAgY29uc29sZS5lcnJvcignZ3VscCBub3QgZm91bmQgYXQ6Jyk7IGNvbnNvbGUuZXJyb3IoZ3VscClcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG4iXX0=