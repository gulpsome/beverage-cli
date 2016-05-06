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
  var where = _path2.default.normalize(process.cwd() + '/node_modules/');
  console.error('Gulp insists to be installed locally.');
  console.error('It wasn\'t found in ' + where + '.');
  console.error('Preferably a devDependency, try this:');
  console.error('npm install gulp --save-dev');
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

//# sourceMappingURL=data:application/json;base64,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LEdBSUEsVUFMRjtBQU9EO0FBQ0Q7QUFDRCxLQWJELENBYUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLFVBQVEsS0FBUixDQUFjLG9CQUFkLEVBQXFDLFFBQVEsS0FBUixDQUFjLElBQWQ7QUFDckMsVUFBUSxJQUFSLENBQWEsQ0FBYjtBQUNEIiwiZmlsZSI6ImJldmUtY2xpLmVzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSIGZyb20gJ3JhbWRhJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCB5YXJncyBmcm9tICd5YXJncydcbmltcG9ydCB7aXNMb2NhbH0gZnJvbSAnYmUtZ29vZHMnXG5cbmlmICghaXNMb2NhbCgnZ3VscCcsIHtzdHJpY3Q6IHRydWV9KSkge1xuICBsZXQgd2hlcmUgPSBwYXRoLm5vcm1hbGl6ZShgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvYClcbiAgY29uc29sZS5lcnJvcignR3VscCBpbnNpc3RzIHRvIGJlIGluc3RhbGxlZCBsb2NhbGx5LicpXG4gIGNvbnNvbGUuZXJyb3IoYEl0IHdhc24ndCBmb3VuZCBpbiAke3doZXJlfS5gKVxuICBjb25zb2xlLmVycm9yKCdQcmVmZXJhYmx5IGEgZGV2RGVwZW5kZW5jeSwgdHJ5IHRoaXM6JylcbiAgY29uc29sZS5lcnJvcignbnBtIGluc3RhbGwgZ3VscCAtLXNhdmUtZGV2JylcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG5cbmxldCBmb3VuZCA9IGZhbHNlXG5jb25zdCBndWxwID0gW1xuICBwYXRoLm5vcm1hbGl6ZShwcm9jZXNzLmN3ZCgpICsgJy9ub2RlX21vZHVsZXMvLmJpbi9ndWxwJyksXG4gIHBhdGguam9pbihwYXRoLmRpcm5hbWUoZnMucmVhbHBhdGhTeW5jKF9fZmlsZW5hbWUpKSwgJy9ndWxwJyksXG4gIHBhdGgubm9ybWFsaXplKHByb2Nlc3MuY3dkKCkgKyAnL25vZGVfbW9kdWxlcy9iZXZlcmFnZS9ub2RlX21vZHVsZXMvZ3VscC9iaW4vZ3VscC5qcycpXG5dXG5sZXQgYXJndiA9IHlhcmdzXG4gIC51c2FnZSgnYmV2ZXJhZ2UgW2d1bHAtdGFza3NdJylcbiAgLm9wdGlvbignaCcsIHthbGlhczogWydoZWxwJywgJz8nXSwgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3Nob3cgYmV2ZXJhZ2UgaGVscCArIGBndWxwIGhlbHAgLS1zaWxlbnRgJ30pXG4gIC5vcHRpb24oJ28nLCB7YWxpYXM6ICdvcHRpb25zJywgdHlwZTogJ2Jvb2xlYW4nLCBkZXNjcmlwdGlvbjogJ3NhbWUgYXMgYGd1bHAgYmV2ZXJhZ2UgLS1zaWxlbnRgJ30pXG4gIC5hcmd2XG5sZXQgdGFza3MgPSBhcmd2Ll9cbmxldCBiZXZlcmFnZSA9IGFyZ3YubyB8fCBSLmNvbnRhaW5zKCdiZXZlcmFnZScsIHRhc2tzKVxubGV0IGhlbHAgPSBhcmd2LmggfHwgUi5jb250YWlucygnaGVscCcsIHRhc2tzKSB8fCBSLmlzRW1wdHkodGFza3MpXG5cbi8vIGlmIGl0J3MganV0cyBub2RlICsgYmV2ZXJhZ2UgKHdpdGggbmVpdGhlciB0YXNrIG5vciBvcHRpb25zIGdpdmVuKVxuaWYgKHByb2Nlc3MuYXJndi5sZW5ndGggPD0gMikge1xuICBjb25zb2xlLmxvZygnJylcbiAgY29uc29sZS5sb2coJ1VzYWdlOiBiZXZlcmFnZSAtPycpXG59XG5cbi8vICpub24tYmV2ZXJhZ2Utb3B0aW9ucypcbi8vIG5vdCBwYXNzZWQgb24gdG8gZ3VscFxucHJvY2Vzcy5hcmd2ID0gUi5kaWZmZXJlbmNlKHByb2Nlc3MuYXJndixcbiAgWyctbycsICctLW9wdGlvbnMnLCAnLT8nLCAnLWgnLCAnLS1oZWxwJ10pXG5cbmlmIChiZXZlcmFnZSB8fCBoZWxwKSB7XG4gIC8vIHRoaXMgaXMgYSBzaWxlbnQgZ3VscFxuICBwcm9jZXNzLmFyZ3YucHVzaCgnLS1zaWxlbnQnKVxuXG4gIC8vIGFkZCB0YXNrcyBmb3Igb3B0aW9uc1xuICBpZiAoaGVscCAmJiAhUi5jb250YWlucygnaGVscCcsIHRhc2tzKSkge1xuICAgIHByb2Nlc3MuYXJndi5zcGxpY2UoMiwgMCwgJ2hlbHAnKVxuICB9XG4gIGlmIChiZXZlcmFnZSAmJiAhUi5jb250YWlucygnYmV2ZXJhZ2UnLCB0YXNrcykpIHtcbiAgICBwcm9jZXNzLmFyZ3Yuc3BsaWNlKDIsIDAsICdiZXZlcmFnZScpXG4gIH1cbn1cblxuZm9yIChsZXQgZmlsZSBvZiBndWxwKSB7XG4gIHRyeSB7XG4gICAgcmVxdWlyZShmaWxlKSAvLyBkZWxlZ2F0ZSB0byBndWxwXG4gICAgZm91bmQgPSB0cnVlXG4gICAgaWYgKGFyZ3YuaCkge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICdcXG4nICtcbiAgICAgICAgeWFyZ3MuaGVscCgpICtcbiAgICAgICAgJ1xcblJ1bm5pbmcgYGd1bHAgJyArXG4gICAgICAgIHByb2Nlc3MuYXJndi5zbGljZSgyKS5qb2luKCcgJykgK1xuICAgICAgICAnYCBub3cuLi4nXG4gICAgICApXG4gICAgfVxuICAgIGJyZWFrXG4gIH0gY2F0Y2ggKGUpIHt9XG59XG5cbmlmICghZm91bmQpIHtcbiAgY29uc29sZS5lcnJvcignZ3VscCBub3QgZm91bmQgYXQ6Jyk7IGNvbnNvbGUuZXJyb3IoZ3VscClcbiAgcHJvY2Vzcy5leGl0KDEpXG59XG4iXX0=