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

//# sourceMappingURL=data:application/json;base64,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SyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ3hELFNBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7Q0FDaEIiLCJmaWxlIjoiYmV2ZS5lczUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUiBmcm9tICdyYW1kYSdcbmltcG9ydCBmcyBmcm9tICdmcydcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgeWFyZ3MgZnJvbSAneWFyZ3MnXG5sZXQgZm91bmQgPSBmYWxzZVxuY29uc3QgZ3VscCA9IFtcbiAgcGF0aC5ub3JtYWxpemUocHJvY2Vzcy5jd2QoKSArICcvbm9kZV9tb2R1bGVzLy5iaW4vZ3VscCcpLFxuICBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKGZzLnJlYWxwYXRoU3luYyhfX2ZpbGVuYW1lKSksICcvZ3VscCcpLFxuICBwYXRoLm5vcm1hbGl6ZShwcm9jZXNzLmN3ZCgpICsgJy9ub2RlX21vZHVsZXMvYmV2ZXJhZ2Uvbm9kZV9tb2R1bGVzL2d1bHAvYmluL2d1bHAuanMnKVxuXVxubGV0IGFyZ3YgPSB5YXJnc1xuICAudXNhZ2UoJ2JldmVyYWdlIFtndWxwLXRhc2tzXScpXG4gIC5vcHRpb24oJ2gnLCB7YWxpYXM6IFsnaGVscCcsICc/J10sIHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdzaG93IGJldmVyYWdlIGhlbHAgKyBgZ3VscCBoZWxwIC0tc2lsZW50YCd9KVxuICAub3B0aW9uKCdvJywge2FsaWFzOiAnb3B0aW9ucycsIHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdzYW1lIGFzIGBndWxwIGJldmVyYWdlIC0tc2lsZW50YCd9KVxuICAuYXJndlxubGV0IHRhc2tzID0gYXJndi5fXG5sZXQgYmV2ZXJhZ2UgPSBhcmd2Lm8gfHwgUi5jb250YWlucygnYmV2ZXJhZ2UnLCB0YXNrcylcbmxldCBoZWxwID0gYXJndi5oIHx8IFIuY29udGFpbnMoJ2hlbHAnLCB0YXNrcykgfHwgUi5pc0VtcHR5KHRhc2tzKVxuXG4vLyAqbm9uLWJldmVyYWdlLW9wdGlvbnMqXG4vLyBub3QgcGFzc2VkIG9uIHRvIGd1bHBcbnByb2Nlc3MuYXJndiA9IFIuZGlmZmVyZW5jZShwcm9jZXNzLmFyZ3YsXG4gIFsnLW8nLCAnLS1vcHRpb25zJywgJy0/JywgJy1oJywgJy0taGVscCddKVxuXG5pZiAoYmV2ZXJhZ2UgfHwgaGVscCkge1xuICAvLyB0aGlzIGlzIGEgc2lsZW50IGd1bHBcbiAgcHJvY2Vzcy5hcmd2LnB1c2goJy0tc2lsZW50JylcblxuICAvLyBhZGQgdGFza3MgZm9yIG9wdGlvbnNcbiAgaWYgKGhlbHAgJiYgIVIuY29udGFpbnMoJ2hlbHAnLCB0YXNrcykpIHtcbiAgICBwcm9jZXNzLmFyZ3Yuc3BsaWNlKDIsIDAsICdoZWxwJylcbiAgfVxuICBpZiAoYmV2ZXJhZ2UgJiYgIVIuY29udGFpbnMoJ2JldmVyYWdlJywgdGFza3MpKSB7XG4gICAgcHJvY2Vzcy5hcmd2LnNwbGljZSgyLCAwLCAnYmV2ZXJhZ2UnKVxuICB9XG59XG5cbmZvciAobGV0IGZpbGUgb2YgZ3VscCkge1xuICB0cnkge1xuICAgIHJlcXVpcmUoZmlsZSkgLy8gZGVsZWdhdGUgdG8gZ3VscFxuICAgIGZvdW5kID0gdHJ1ZVxuICAgIGlmIChhcmd2LmgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnXFxuJyArXG4gICAgICAgIHlhcmdzLmhlbHAoKSArXG4gICAgICAgICdcXG5SdW5uaW5nIGBndWxwICcgK1xuICAgICAgICBwcm9jZXNzLmFyZ3Yuc2xpY2UoMikuam9pbignICcpICtcbiAgICAgICAgJ2Agbm93Li4uJ1xuICAgICAgKVxuICAgIH1cbiAgICBicmVha1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5pZiAoIWZvdW5kKSB7XG4gIGNvbnNvbGUuZXJyb3IoJ2d1bHAgbm90IGZvdW5kIGF0OicpOyBjb25zb2xlLmVycm9yKGd1bHApXG4gIHByb2Nlc3MuZXhpdCgxKVxufVxuIl19