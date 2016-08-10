/**
 * Created by daf on 04.07.2016.
 */

/**
 * Задание
 */


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
import { getMethod } from './generic';
import { contents } from './type';

export const getName = (self) =>
  getMethod(self, 'getName')(contents(self));

// BEGIN (write your solution here)
export const damage = (self, health) => {
  getMethod(self, 'damage')(contents(self), health);
};
// END

// generic.js
import * as pairs from 'hexlet-pairs';
import { l, cons, isEmpty, head, tail } from 'hexlet-pairs-data';
import { attach, typeTag, contents } from './type';

let methods = l();

export const getMethod = (obj, methodName) => {
  // BEGIN (write your solution here)
  const findMetod = (type, methodName, tailMethods) => {
    if (isEmpty(tailMethods)) {
      return l();
    }
    const typeMethods = typeTag(head(tailMethods));
    const nameMethods = pairs.car(contents(head(tailMethods)));
    const bodyMethods = pairs.cdr(contents(head(tailMethods)));
    // console.log(`type=${type} typeMethods=${typeMethods}`);
    // console.log(`methodName=${methodName} nameMethods=${nameMethods}`);
    // console.log(type === typeMethods && methodName === nameMethods);
    // console.log(`bodyMethods=${bodyMethods}`);
    if (type === typeMethods && methodName === nameMethods) {
      console.log(`Совпадение!`);
      console.log(`bodyMethods=${bodyMethods}`);
      return {bodyMethods};
    } else {
      console.log(`Углубляемся!`);
      return findMetod(type, methodName, tail(tailMethods));
    }
  };
  return findMetod(typeTag(obj), methodName, methods);
  // END
};

export const definer = (type) =>
  (methodName, f) => {
    methods = cons(attach(type, pairs.cons(methodName, f)), methods);
  };

// simpleCard.js
import { cons, car, cdr } from 'hexlet-pairs';
import { definer } from './generic';
import { attach } from './type';

// BEGIN (write your solution here)
const defmethod = definer('SimpleCard');

export const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

defmethod('getName', (self) => car(self));

defmethod('damage', (self) => cdr(self));
// END

// ревизия 2 generic.js
const findMetod = (type, methodName, tailMethods) => {
  if (isEmpty(tailMethods)) {
    return l();
  }
  const typeMethods = typeTag(head(tailMethods));
  const nameMethods = pairs.car(contents(head(tailMethods)));
  const bodyMethods = pairs.cdr(contents(head(tailMethods)));
  if (type === typeMethods && methodName === nameMethods) {
    return bodyMethods;
  }
  return findMetod(type, methodName, tail(tailMethods));
};
return findMetod(typeTag(obj), methodName, methods);