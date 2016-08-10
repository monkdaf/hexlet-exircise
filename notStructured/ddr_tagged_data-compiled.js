/**
 * Created by daf on 03.07.2016.
 */

/**
 * Задание
 *
 simpleCard.js
 Реализуйте интерфейс работы карты с типом SimpleCard по аналогии с типом PercentCard. Второй параметр у конструктора - урон.

 simpleCard.make('Жесткий ломатель мироздания', 6)
 solution.js
 Реализуйте логику работы функции run.

 Подсказки
 Для определения типа карты воспользуйтесь функциями isSimpleCard и/или isPercentCard.
 */

/**
 * Решение учителя
 simpleCard.js
 // BEGIN
 export const make = (name, damagePoints) =>
 attach('SimpleCard', cons(name, damagePoints));

 export const getName = (self) => car(contents(self));

 export const damage = (self) => cdr(contents(self));
 // END
 solution.js
 // BEGIN
 if (health1 < 0) {
      return cons(pairs.cons(pairs.car(head(log)), `${name1} был убит`), log);
    }
 const card = customRandom(cards);
 let cardName;
 let damage;
 if (isSimpleCard(card)) {
      cardName = simpleCard.getName(card);
      damage = simpleCard.damage(card);
    } else if (isPercentCard(card)) {
      cardName = percentCard.getName(card);
      damage = percentCard.damage(card, health2);
    }

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
 // END
 */

/**
 * Моё решение
 */

//  simpleCard.js
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexletPairs = require('hexlet-pairs');

var _type = require('./type');

// BEGIN (write your solution here)
var make = function make(name, damage) {
  return (0, _type.attach)('SimpleCard', (0, _hexletPairs.cons)(name, damage));
};

exports.make = make;
var getName = function getName(self) {
  return (0, _hexletPairs.car)((0, _type.contents)(self));
};

exports.getName = getName;
var damage = function damage(self) {
  return (0, _hexletPairs.cdr)((0, _type.contents)(self));
};
exports.damage = damage;
// END

// solution.js

//# sourceMappingURL=ddr_tagged_data-compiled.js.map