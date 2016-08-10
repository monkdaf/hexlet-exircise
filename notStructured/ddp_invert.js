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
import * as pairs from 'hexlet-pairs';
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 < 0) {
      return cons(pairs.cons(pairs.car(head(log)), `${name1} был убит`), log);
    }
    // BEGIN (write your solution here)
    const card = customRandom(cards);
    // END
    const cardName = pairs.car(card);
    const damage = pairs.cdr(card)(health2);
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
  };

  const startHealth = 10;
  const logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

// BEGIN (write your solution here)
export default (cards, customRandom) => {
  return (name1, name2) => run(name1, name2, cards, customRandom);
};
// END
