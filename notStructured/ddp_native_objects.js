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
export const make = (name, damage) => {
  return {
    name: name,
    damage: () => damage
  };
};
// END

//  solution.js
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
  // BEGIN (write your solution here)
  const iter = (health1, name1, health2, name2, order, log) => {
    if (health1 < 0) {
      return cons(
        {
          health1: health2,
          health2: health1,
          message: `${name1} был убит`,
        },
        log);
    }
    const card = customRandom(cards);
    const newHealth = health2 - card.damage(health2);

    const message = `Игрок '${name1}' применил '${card.name}'
      против '${name2}' и нанес урон '${card.damage(health2)}'`;
    let stats;
    if (order === 1) {
      stats = {
        health1,
        health2: newHealth,
        message,
      };
    } else if (order === 2) {
      stats = {
        health1: newHealth,
        health2: health1,
        message,
      };
    }
    const newLog = cons(stats, log);
    return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
  };
  // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);
