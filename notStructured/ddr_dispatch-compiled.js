/**
 * Created by daf on 04.07.2016.
 */

/**
 * Задание
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

/**
 * Решение учителя
 *

 card.js
 // BEGIN
 export const damage = (self, health) =>
 getMethod(self, 'damage')(contents(self), health);
 // END

 generic.js
 // BEGIN
 const currentType = typeTag(obj);
 const iter = (elements) => {
    if (isEmpty(elements)) {
      return null;
    }
    const element = head(elements);
    if (currentType === typeTag(element)) {
      const method = contents(element);
      if (methodName === pairs.car(method)) {
        return pairs.cdr(method);
      }
    }

    return iter(tail(elements));
  };

 return iter(methods);
 // END

 simpleCard.js
 // BEGIN
 const defmethod = definer('SimpleCard');

 export const make = (name, damagePoints) =>
 attach('SimpleCard', cons(name, damagePoints));

 defmethod('getName', (self) => car(self));

 defmethod('damage', (self) => cdr(self));
 // END
 */

/**
 * Моё первое решение
 */
//  card.js

var _generic = require('./generic');

var _type = require('./type');

11;var getName = function getName(self) {
  return (0, _generic.getMethod)(self, 'getName')((0, _type.contents)(self));
};

exports.getName = getName;
// BEGIN (write your solution here)
var damage = function damage(self, health) {
  (0, _generic.getMethod)(self, 'damage')((0, _type.contents)(self), health);
};
exports.damage = damage;
// END

// generic.js

//# sourceMappingURL=ddr_dispatch-compiled.js.map