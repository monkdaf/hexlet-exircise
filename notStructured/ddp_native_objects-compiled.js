/**
 * Created by daf on 08.07.2016.
 */

/**
 * Задание
 *
 simpleCard.js
 Реализуйте интерфейс simpleCard основываясь на реализации percentCard.

 solution.js
 Реализуйте функцию run используя тип данных object для хранения элементов внутри списка log.
 */

/**
 * Решение учителя
 simpleCard.js
 // BEGIN
 export const make = (name, damagePoints) => {
  return {
    name: name,
    damage: () => damagePoints,
  };
};
 // END

 solution.js
 // BEGIN
 const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 < 0) {
      const prevLog = head(log);
      const newLog = {
        message: `${name1} был убит`,
        health1: prevLog.health1,
        health2: prevLog.health2,
      };
      return cons(newLog, log);
    }
    const card = customRandom(cards);
    const cardName = card.name;
    const points = card.damage(health2);
    const newHealth = health2 - points;

    const message = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${points}'`;
    const stats = { message };
    if (order === 1) {
      stats.health1 = health1;
      stats.health2 = newHealth;
    } else if (order === 2) {
      stats.health1 = newHealth;
      stats.health2 = health1;
    }
    const newLog = cons(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };
 // END
 */

/**
 * Моё решение
 */
//  simpleCard.js
// BEGIN (write your solution here)
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

// END

//  solution.js

var _hexletPairsData = require('hexlet-pairs-data');

var make = function make(name, _damage) {
  return {
    name: name,
    damage: function damage() {
      return _damage;
    }
  };
};exports.make = make;

var run = function run(player1, player2, cards, customRandom) {
  // BEGIN (write your solution here)
  var iter = function iter(_x2, _x3, _x4, _x5, _x6, _x7) {
    var _again = true;

    _function: while (_again) {
      var health1 = _x2,
          name1 = _x3,
          health2 = _x4,
          name2 = _x5,
          order = _x6,
          log = _x7;
      _again = false;

      if (health1 < 0) {
        return (0, _hexletPairsData.cons)({
          health1: health2,
          health2: health1,
          message: name1 + ' был убит'
        }, log);
      }
      var card = customRandom(cards);
      var newHealth = health2 - card.damage(health2);

      var message = 'Игрок \'' + name1 + '\' применил \'' + card.name + '\'\n      против \'' + name2 + '\' и нанес урон \'' + card.damage(health2) + '\'';
      var stats = undefined;
      if (order === 1) {
        stats = {
          health1: health1,
          health2: newHealth,
          message: message
        };
      } else if (order === 2) {
        stats = {
          health1: newHealth,
          health2: health1,
          message: message
        };
      }
      var newLog = (0, _hexletPairsData.cons)(stats, log);
      _x2 = newHealth;
      _x3 = name2;
      _x4 = health1;
      _x5 = name1;
      _x6 = order === 1 ? 2 : 1;
      _x7 = newLog;
      _again = true;
      card = newHealth = message = stats = newLog = undefined;
      continue _function;
    }
  };
  // END

  var startHealth = 10;
  var logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!'
  };
  return (0, _hexletPairsData.reverse)(iter(startHealth, player1, startHealth, player2, 1, (0, _hexletPairsData.l)(logItem)));
};

exports['default'] = function (cards) {
  var customRandom = arguments.length <= 1 || arguments[1] === undefined ? _hexletPairsData.random : arguments[1];
  return function (name1, name2) {
    return run(name1, name2, cards, customRandom);
  };
};

//# sourceMappingURL=ddp_native_objects-compiled.js.map