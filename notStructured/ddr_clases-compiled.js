/**
 * Created by daf on 10.07.2016.
 */

/**
 * Задание
 *
 SimpleCard.js
 Реализуйте класс SimpleCard по аналогии с PercentCard.

 solution.js
 Допишите функцию run с учетом того что карта это объект.
 */

/**
 * решение учителя
 // SimpleCard.js
 // BEGIN
 export default class SimpleCard {
  constructor(name, damagePoints) {
    this.name = name;
    this.damagePoints = damagePoints;
  }

  damage() {
    return this.damagePoints;
  }
}
 // END

 // solution.js
 // BEGIN
 const cardName = card.name;
 const points = card.damage(health2);
 // END
 */

/**
 * моё решение
 */
// SimpleCard.js
// BEGIN (write your solution here)
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

// END

// solution.js

var _hexletPairsData = require('hexlet-pairs-data');

var SimpleCard = (function () {
  function SimpleCard(name, dmg) {
    _classCallCheck(this, SimpleCard);

    this.name = name;
    this.dmg = dmg;
  }

  _createClass(SimpleCard, [{
    key: 'damage',
    value: function damage() {
      return this.dmg;
    }
  }]);

  return SimpleCard;
})();

exports['default'] = SimpleCard;

var run = function run(player1, player2, cards, customRandom) {
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
        var prevLog = (0, _hexletPairsData.head)(log);
        var _newLog = {
          message: name1 + ' был убит',
          health1: prevLog.health1,
          health2: prevLog.health2
        };
        return (0, _hexletPairsData.cons)(_newLog, log);
      }
      var card = customRandom(cards);
      // BEGIN (write your solution here)
      var points = card.damage(health2);
      var cardName = card.name;
      // END
      var newHealth = health2 - points;

      var message = 'Игрок \'' + name1 + '\' применил \'' + cardName + '\'\n      против \'' + name2 + '\' и нанес урон \'' + points + '\'';
      var stats = { message: message };
      if (order === 1) {
        stats.health1 = health1;
        stats.health2 = newHealth;
      } else if (order === 2) {
        stats.health1 = newHealth;
        stats.health2 = health1;
      }
      var newLog = (0, _hexletPairsData.cons)(stats, log);
      _x2 = newHealth;
      _x3 = name2;
      _x4 = health1;
      _x5 = name1;
      _x6 = order === 1 ? 2 : 1;
      _x7 = newLog;
      _again = true;
      prevLog = _newLog = card = points = cardName = newHealth = message = stats = newLog = undefined;
      continue _function;
    }
  };

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

module.exports = exports['default'];

//# sourceMappingURL=ddr_clases-compiled.js.map