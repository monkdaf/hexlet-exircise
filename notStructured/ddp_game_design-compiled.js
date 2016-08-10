/**
 * Created by daf on 30.06.2016.
 */

/**
 * Задание
 *
 Допишите логику функции run, которая содержит ядро игрового движка.

 Алгоритм
 Если здоровье игрока (которого атаковали на предыдущем шаге) меньше или равно 0, то обновляем лог и возвращаем наружу. Игра закончена.

 В ином случае, берем рандомную карту, вычисляем урон, записываем новое здоровье, а так же добавляем строчку в лог используя формат.

 const message = `Игрок '${name1}' применил '${cardName}'
 против '${name2}' и нанес урон '${damage}'`;
 Повторяем
 Подсказки
 Параметр order в функции iter нужен для определения того, какой игрок сейчас атакует.
 Формат лога cons((health1, health2), message).
 Используйте функцию random для выбора карты из колоды.
 */

/**
 * Решение учителя
 *
 if (health1 <= 0) {
      return cons(pairs.cons(pairs.car(head(log)), `${name1} был убит`), log);
    }
 const card = random(cards);
 const cardName = pairs.car(card);
 const damage = pairs.cdr(card)();
 const newHealth = health2 - damage;

 const message = `Игрок '${name1}' применил '${cardName}'
 против '${name2}' и нанес урон '${damage}'`;
 let stats;
 if (order === 1) {
      stats = pairs.cons(pairs.cons(health1, newHealth), message);
    } else if (order === 2) {
      stats = pairs.cons(pairs.cons(newHealth, health1), message);
    }
 const newLog = cons(stats, log);
 return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
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

var run = function run(player1, player2, cards) {
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

      // BEGIN (write your solution here)
      if (order === 1 && health1 <= 0 || order === 2 && health2 <= 0) {
        return (0, _hexletPairsData.cons)((0, _hexletPairsData.cons)((0, _hexletPairsData.cons)(health1, health2), 'Игра закончена'), log);
      }
      var card = (0, _hexletPairsData.random)(cards);
      var cardName = (0, _hexletPairsData.head)(card);
      var damage = pairs.cdr(card)();
      var damage1 = order === 1 ? health1 : health1 - damage;
      var damage2 = order === 2 ? health2 : health2 - damage;
      var message = 'Игрок \'' + (order === 1 ? name1 : name2) + '\'\n        применил \'' + cardName + '\' против \'' + (order === 1 ? name2 : name1) + '\'\n        и нанес урон \'' + damage + '\'';
      var newOrder = order === 1 ? 2 : 1;
      var newLog = (0, _hexletPairsData.cons)((0, _hexletPairsData.cons)((0, _hexletPairsData.cons)(damage1, damage2), message), log);

      _x = damage1;
      _x2 = name1;
      _x3 = damage2;
      _x4 = name2;
      _x5 = newOrder;
      _x6 = newLog;
      _again = true;
      card = cardName = damage = damage1 = damage2 = message = newOrder = newLog = undefined;
      continue _function;

      // END
    }
  };

  var startHealth = 10;
  var logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return (0, _hexletPairsData.reverse)(iter(startHealth, player1, startHealth, player2, 1, (0, _hexletPairsData.l)(logItem)));
};

exports['default'] = function (cards) {
  return function (name1, name2) {
    return run(name1, name2, cards);
  };
};

module.exports = exports['default'];

//# sourceMappingURL=ddp_game_design-compiled.js.map