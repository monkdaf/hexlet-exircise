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
import * as pairs from 'hexlet-pairs';
import { cons, l, random, head, reverse } from 'hexlet-pairs-data';

const run = (player1, player2, cards) => {
  const iter = (health1, name1, health2, name2, order, log) => {
    // BEGIN (write your solution here)
    if ((order === 1 && health1 <= 0) ||
      (order === 2 && health2 <= 0)) {
      return cons(cons(cons(health1, health2), 'Игра закончена'), log);
    }
    const card = random(cards);
    const cardName = head(card);
    const damage = pairs.cdr(card)();
    const damage1 = order === 1 ? health1 : health1 - damage;
    const damage2 = order === 2 ? health2 : health2 - damage;
    const message = `Игрок '${order === 1 ? name1 : name2}'
        применил '${cardName}' против '${order === 1 ? name2 : name1}'
        и нанес урон '${damage}'`;
    const newOrder = order === 1 ? 2 : 1;
    const newLog = cons(cons(cons(damage1, damage2), message), log);

    return iter(damage1, name1, damage2, name2, newOrder, newLog);
    // END
  };

  const startHealth = 10;
  const logItem = pairs.cons(pairs.cons(startHealth, startHealth), 'Начинаем бой!');
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards) =>
  (name1, name2) =>
    run(name1, name2, cards);
