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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJldmUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBSSxDQUFDLHNCQUFRLE1BQVIsRUFBZ0IsRUFBQyxRQUFRLElBQVQsRUFBaEIsQ0FBTCxFQUFzQztBQUNwQyxVQUFRLEtBQVIsQ0FBYyx1Q0FBZDtBQUNBLFVBQVEsS0FBUixDQUFjLDZCQUFkO0FBQ0EsTUFBSSxRQUFRLGVBQUssU0FBTCxDQUFrQixRQUFRLEdBQVIsRUFBbEIsb0JBQVo7QUFDQSxVQUFRLEtBQVIsbUJBQThCLEtBQTlCO0FBQ0EsVUFBUSxJQUFSLENBQWEsQ0FBYjtBQUNEOztBQUVELElBQUksUUFBUSxLQUFaO0FBQ0EsSUFBTSxPQUFPLENBQ1gsZUFBSyxTQUFMLENBQWUsUUFBUSxHQUFSLEtBQWdCLHlCQUEvQixDQURXLEVBRVgsZUFBSyxJQUFMLENBQVUsZUFBSyxPQUFMLENBQWEsYUFBRyxZQUFILENBQWdCLFVBQWhCLENBQWIsQ0FBVixFQUFxRCxPQUFyRCxDQUZXLEVBR1gsZUFBSyxTQUFMLENBQWUsUUFBUSxHQUFSLEtBQWdCLHNEQUEvQixDQUhXLENBQWI7QUFLQSxJQUFJLE9BQU8sZ0JBQ1IsS0FEUSxDQUNGLHVCQURFLEVBRVIsTUFGUSxDQUVELEdBRkMsRUFFSSxFQUFDLE9BQU8sQ0FBQyxNQUFELEVBQVMsR0FBVCxDQUFSLEVBQXVCLE1BQU0sU0FBN0IsRUFBd0MsYUFBYSwyQ0FBckQsRUFGSixFQUdSLE1BSFEsQ0FHRCxHQUhDLEVBR0ksRUFBQyxPQUFPLFNBQVIsRUFBbUIsTUFBTSxTQUF6QixFQUFvQyxhQUFhLGtDQUFqRCxFQUhKLEVBSVIsSUFKSDtBQUtBLElBQUksUUFBUSxLQUFLLENBQWpCO0FBQ0EsSUFBSSxXQUFXLEtBQUssQ0FBTCxJQUFVLGdCQUFFLFFBQUYsQ0FBVyxVQUFYLEVBQXVCLEtBQXZCLENBQXpCO0FBQ0EsSUFBSSxPQUFPLEtBQUssQ0FBTCxJQUFVLGdCQUFFLFFBQUYsQ0FBVyxNQUFYLEVBQW1CLEtBQW5CLENBQVYsSUFBdUMsZ0JBQUUsT0FBRixDQUFVLEtBQVYsQ0FBbEQ7OztBQUdBLElBQUksUUFBUSxJQUFSLENBQWEsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM1QixVQUFRLEdBQVIsQ0FBWSxFQUFaO0FBQ0EsVUFBUSxHQUFSLENBQVksb0JBQVo7QUFDRDs7OztBQUlELFFBQVEsSUFBUixHQUFlLGdCQUFFLFVBQUYsQ0FBYSxRQUFRLElBQXJCLEVBQ2IsQ0FBQyxJQUFELEVBQU8sV0FBUCxFQUFvQixJQUFwQixFQUEwQixJQUExQixFQUFnQyxRQUFoQyxDQURhLENBQWY7O0FBR0EsSUFBSSxZQUFZLElBQWhCLEVBQXNCOztBQUVwQixVQUFRLElBQVIsQ0FBYSxJQUFiLENBQWtCLFVBQWxCOzs7QUFHQSxNQUFJLFFBQVEsQ0FBQyxnQkFBRSxRQUFGLENBQVcsTUFBWCxFQUFtQixLQUFuQixDQUFiLEVBQXdDO0FBQ3RDLFlBQVEsSUFBUixDQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsTUFBMUI7QUFDRDtBQUNELE1BQUksWUFBWSxDQUFDLGdCQUFFLFFBQUYsQ0FBVyxVQUFYLEVBQXVCLEtBQXZCLENBQWpCLEVBQWdEO0FBQzlDLFlBQVEsSUFBUixDQUFhLE1BQWIsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsRUFBMEIsVUFBMUI7QUFDRDtBQUNGOzs7Ozs7O0FBRUQsdUJBQWlCLElBQWpCLDhIQUF1QjtBQUFBLFFBQWQsSUFBYzs7QUFDckIsUUFBSTtBQUNGLGNBQVEsSUFBUixFO0FBQ0EsY0FBUSxJQUFSO0FBQ0EsVUFBSSxLQUFLLENBQVQsRUFBWTtBQUNWLGdCQUFRLEdBQVIsQ0FDRSxPQUNBLGdCQUFNLElBQU4sRUFEQSxHQUVBLGtCQUZBLEdBR0EsUUFBUSxJQUFSLENBQWEsS0FBYixDQUFtQixDQUFuQixFQUFzQixJQUF0QixDQUEyQixHQUEzQixDQUhBLEdBSUEsVUFMRjtBQU9EO0FBQ0Q7QUFDRCxLQWJELENBYUUsT0FBTyxDQUFQLEVBQVUsQ0FBRTtBQUNmOzs7Ozs7Ozs7Ozs7Ozs7O0FBRUQsSUFBSSxDQUFDLEtBQUwsRUFBWTtBQUNWLFVBQVEsS0FBUixDQUFjLG9CQUFkLEVBQXFDLFFBQVEsS0FBUixDQUFjLElBQWQ7QUFDckMsVUFBUSxJQUFSLENBQWEsQ0FBYjtBQUNEIiwiZmlsZSI6ImJldmUuZXM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFIgZnJvbSAncmFtZGEnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IHlhcmdzIGZyb20gJ3lhcmdzJ1xuaW1wb3J0IHtpc0xvY2FsfSBmcm9tICdiZS1nb29kcydcblxuaWYgKCFpc0xvY2FsKCdndWxwJywge3N0cmljdDogdHJ1ZX0pKSB7XG4gIGNvbnNvbGUuZXJyb3IoJ0d1bHAgaW5zaXN0cyB0byBiZSBpbnN0YWxsZWQgbG9jYWxseS4nKVxuICBjb25zb2xlLmVycm9yKCdQcmVmZXJhYmx5IGEgZGV2RGVwZW5kZW5jeS4nKVxuICBsZXQgd2hlcmUgPSBwYXRoLm5vcm1hbGl6ZShgJHtwcm9jZXNzLmN3ZCgpfS9ub2RlX21vZHVsZXMvYClcbiAgY29uc29sZS5lcnJvcihgTm90IGZvdW5kIGluICR7d2hlcmV9LmApXG4gIHByb2Nlc3MuZXhpdCgxKVxufVxuXG5sZXQgZm91bmQgPSBmYWxzZVxuY29uc3QgZ3VscCA9IFtcbiAgcGF0aC5ub3JtYWxpemUocHJvY2Vzcy5jd2QoKSArICcvbm9kZV9tb2R1bGVzLy5iaW4vZ3VscCcpLFxuICBwYXRoLmpvaW4ocGF0aC5kaXJuYW1lKGZzLnJlYWxwYXRoU3luYyhfX2ZpbGVuYW1lKSksICcvZ3VscCcpLFxuICBwYXRoLm5vcm1hbGl6ZShwcm9jZXNzLmN3ZCgpICsgJy9ub2RlX21vZHVsZXMvYmV2ZXJhZ2Uvbm9kZV9tb2R1bGVzL2d1bHAvYmluL2d1bHAuanMnKVxuXVxubGV0IGFyZ3YgPSB5YXJnc1xuICAudXNhZ2UoJ2JldmVyYWdlIFtndWxwLXRhc2tzXScpXG4gIC5vcHRpb24oJ2gnLCB7YWxpYXM6IFsnaGVscCcsICc/J10sIHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdzaG93IGJldmVyYWdlIGhlbHAgKyBgZ3VscCBoZWxwIC0tc2lsZW50YCd9KVxuICAub3B0aW9uKCdvJywge2FsaWFzOiAnb3B0aW9ucycsIHR5cGU6ICdib29sZWFuJywgZGVzY3JpcHRpb246ICdzYW1lIGFzIGBndWxwIGJldmVyYWdlIC0tc2lsZW50YCd9KVxuICAuYXJndlxubGV0IHRhc2tzID0gYXJndi5fXG5sZXQgYmV2ZXJhZ2UgPSBhcmd2Lm8gfHwgUi5jb250YWlucygnYmV2ZXJhZ2UnLCB0YXNrcylcbmxldCBoZWxwID0gYXJndi5oIHx8IFIuY29udGFpbnMoJ2hlbHAnLCB0YXNrcykgfHwgUi5pc0VtcHR5KHRhc2tzKVxuXG4vLyBpZiBpdCdzIGp1dHMgbm9kZSArIGJldmVyYWdlICh3aXRoIG5laXRoZXIgdGFzayBub3Igb3B0aW9ucyBnaXZlbilcbmlmIChwcm9jZXNzLmFyZ3YubGVuZ3RoIDw9IDIpIHtcbiAgY29uc29sZS5sb2coJycpXG4gIGNvbnNvbGUubG9nKCdVc2FnZTogYmV2ZXJhZ2UgLT8nKVxufVxuXG4vLyAqbm9uLWJldmVyYWdlLW9wdGlvbnMqXG4vLyBub3QgcGFzc2VkIG9uIHRvIGd1bHBcbnByb2Nlc3MuYXJndiA9IFIuZGlmZmVyZW5jZShwcm9jZXNzLmFyZ3YsXG4gIFsnLW8nLCAnLS1vcHRpb25zJywgJy0/JywgJy1oJywgJy0taGVscCddKVxuXG5pZiAoYmV2ZXJhZ2UgfHwgaGVscCkge1xuICAvLyB0aGlzIGlzIGEgc2lsZW50IGd1bHBcbiAgcHJvY2Vzcy5hcmd2LnB1c2goJy0tc2lsZW50JylcblxuICAvLyBhZGQgdGFza3MgZm9yIG9wdGlvbnNcbiAgaWYgKGhlbHAgJiYgIVIuY29udGFpbnMoJ2hlbHAnLCB0YXNrcykpIHtcbiAgICBwcm9jZXNzLmFyZ3Yuc3BsaWNlKDIsIDAsICdoZWxwJylcbiAgfVxuICBpZiAoYmV2ZXJhZ2UgJiYgIVIuY29udGFpbnMoJ2JldmVyYWdlJywgdGFza3MpKSB7XG4gICAgcHJvY2Vzcy5hcmd2LnNwbGljZSgyLCAwLCAnYmV2ZXJhZ2UnKVxuICB9XG59XG5cbmZvciAobGV0IGZpbGUgb2YgZ3VscCkge1xuICB0cnkge1xuICAgIHJlcXVpcmUoZmlsZSkgLy8gZGVsZWdhdGUgdG8gZ3VscFxuICAgIGZvdW5kID0gdHJ1ZVxuICAgIGlmIChhcmd2LmgpIHtcbiAgICAgIGNvbnNvbGUubG9nKFxuICAgICAgICAnXFxuJyArXG4gICAgICAgIHlhcmdzLmhlbHAoKSArXG4gICAgICAgICdcXG5SdW5uaW5nIGBndWxwICcgK1xuICAgICAgICBwcm9jZXNzLmFyZ3Yuc2xpY2UoMikuam9pbignICcpICtcbiAgICAgICAgJ2Agbm93Li4uJ1xuICAgICAgKVxuICAgIH1cbiAgICBicmVha1xuICB9IGNhdGNoIChlKSB7fVxufVxuXG5pZiAoIWZvdW5kKSB7XG4gIGNvbnNvbGUuZXJyb3IoJ2d1bHAgbm90IGZvdW5kIGF0OicpOyBjb25zb2xlLmVycm9yKGd1bHApXG4gIHByb2Nlc3MuZXhpdCgxKVxufVxuIl19