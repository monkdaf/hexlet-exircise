/**
 * Created by daf on 01.07.2016.
 */

/**
 * Задание
 *
 Экспортируйте функцию по умолчанию, которую снаружи именуют и используют как make. Вторым параметром эта функция принимает пользовательскую random функцию.

 Допишите вызов пользовательской функции random в функции run.
 */

/**
 * Решение учителя
 *
 // BEGIN
 const card = customRandom(cards);
 // END

 // BEGIN
 export default (cards, customRandom = random) =>
 (name1, name2) =>
 run(name1, name2, cards, customRandom);
 // END
 */

/**
 * Моё решение
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _hexletPairs = require('hexlet-pairs');

var pairs = _interopRequireWildcard(_hexletPairs);

var _hexletPairsData = require('hexlet-pairs-data');

var run = function run(player1, player2, cards, customRandom) {
  var iter = function iter(_x, _x2, _x3, _x4, _x5, _x6) {
    var _again = true;

    _function: while (_again) {
      var health1 = _x,
          name1 = _x2,
          health2 = _x3,
          name2 = _x4,
          order = _x5,
          log = _x6;
      _again = false;

      if (health1 < 0) {
        return (0, _hexletPairsData.cons)(pairs.cons(pairs.car((0, _hexletPairsData.head)(log)), name1 + ' был убит'), log);
      }
      // BEGIN (write your solution here)
      var card = customRandom(cards);
      // END
      var cardName = pairs.car(card);
      var damage = pairs.cdr(card)(health2);
      var newHealth = health2 - damage;

      var message = 'Игрок \'' + name1 + '\' применил \'' + cardName + '\'\n      против \'' + name2 + '\' и нанес урон \'' + damage + '\'';
      var stats = undefined;
      if (order === 1) {
        stats = pairs.cons(pairs.cons(health1, newHealth), message);
      } else if (order === 2) {
        stats = pairs.cons(pairs.cons(newHealth, health1), message);
      }
      var newLog = (0, _hexletPairsData.cons)(stats, log);
      _x = newHealth;
      _x2 = name2;
      _x3 = health1;
      _x4 = name1;
      _x5 = order === 1 ? 2 : 1;
      _x6 = newLog;
      _again = true;
      card = cardName = damage = newHealth = message = stats = newLog = undefined;
      continue _function;
    }
  };

  var startHealth = 10;
  var logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return (0, _hexletPairsData.reverse)(iter(startHealth, player1, startHealth, player2, 1, (0, _hexletPairsData.l)(logItem)));
};

// BEGIN (write your solution here)

exports['default'] = function (cards, customRandom) {
  return function (name1, name2) {
    return run(name1, name2, cards, customRandom);
  };
};

// END
module.exports = exports['default'];

//# sourceMappingURL=ddp_invert-compiled.js.map