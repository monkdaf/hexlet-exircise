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
export default class SimpleCard {
  constructor(name, dmg) {
    this.name = name;
    this.dmg = dmg;
  }

  damage() {
    return this.dmg;
  }
}

// END

// solution.js
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards, customRandom) => {
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
    // BEGIN (write your solution here)
    const points = card.damage(health2);
    const cardName = card.name;
    // END
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
