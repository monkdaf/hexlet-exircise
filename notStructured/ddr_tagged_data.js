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
import { cons, car, cdr } from 'hexlet-pairs';
import { attach, contents } from './type';

// BEGIN (write your solution here)
export const make = (name, damage) =>
  attach('SimpleCard', cons(name, damage));

export const getName = (self) => car(contents(self));

export const damage = (self) =>cdr(contents(self));
// END

// solution.js
import * as pairs from 'hexlet-pairs';
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';
import * as simpleCard from './simpleCard.js';
import * as percentCard from './percentCard.js';
import { typeTag } from './type.js';

const isSimpleCard = (card) => typeTag(card) === 'SimpleCard';
const isPercentCard = (card) => typeTag(card) === 'PercentCard';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if (health1 <= 0) {
      return pairs.cons(pairs.cons(pairs.car(head(log)), `${name1} был убит`), log);
    }
    const card = customRandom(cards);
    let cardName;
    let cardDamage;
    let newHealth;
    if (isSimpleCard(card)) {
      cardName = simpleCard.getName(card);
      cardDamage = simpleCard.damage(card);
    } else {
      cardName = percentCard.getName(card);
      cardDamage = percentCard.damage(card, health2);
    }
    newHealth = health2 - cardDamage;
    const msg = `Игрок '${name1}' применил '${cardName}'
      против '${name2}' и нанес урон '${cardDamage}'`;
    let newLog;
    if (order === 1) {
      newLog = pairs.cons(pairs.cons(health1, newHealth), msg);
    } else if (order === 2) {
      newLog = pairs.cons(pairs.cons(newHealth, health1), msg);
    }
    const nextOrder = order => order === 1 ? 2 : 1;
    return iter(newHealth, name2, health1, name1, nextOrder(order), pairs.cons(newLog,log));
    // END
  };

  const startHealth = 10;
  const logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
