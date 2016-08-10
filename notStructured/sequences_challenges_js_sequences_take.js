/**
 * Created by daf on 11.07.2016.
 */

/**
 * Задание
 *
 Реализуйте и экспортируйте функцию take, которая возвращает первые n элементов списка.

 take(3, l()); // ()
 take(3, l(1, 2)); // (1, 2)
 take(1, l(7, 2)); // (7)
 */

/**
 * Решение учителя
 *
 // BEGIN
 export const take = (count, list) => {
  if (isEmpty(list) || count === 0) {
    return l();
  }

  return cons(head(list), take(count - 1, tail(list)));
};
 // END
 */

/**
 * Моё решение
 */
import { l, isEmpty, head, tail, cons } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const take = (n, list) => {
  const reverse = list => {
    const reverseIter = (subList, acc) => {
      if (isEmpty(subList)) return acc;
      return reverseIter(tail(subList), cons(head(subList), acc));
    };
    return reverseIter(list, l());
  };

  const iter = (count, tailList, acc) => {
    if (count >= n || isEmpty(tailList)) { return acc }
    count++;
    const newAcc = cons(head(tailList), acc);
    return iter(count, tail(tailList), newAcc);
  };
  return reverse(iter(0, list, l()));
};
// END
