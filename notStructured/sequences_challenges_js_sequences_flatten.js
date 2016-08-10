/**
 * Created by daf on 11.07.2016.
 */

/**
 * Задание
 *
 Реализуйте и экспортируйте функцию flatten, которая делает плоским вложенный список.

 const list = l(1, 2, l(3, 5), l(l(4, 3), 2));

 // (1, 2, 3, 5, 4, 3, 2)
 flatten(list);
 */

/**
 * Решение учителя
 solution.js
 // BEGIN
 export const flatten = (list) => {
  if (!isList(list)) {
    return list;
  }
  const newList = reduce((element, result) => {
    if (isList(element)) {
      const flattenedList = flatten(element);
      return reduce((item, acc) => cons(item, acc), result, flattenedList);
    }
    return cons(element, result);
  }, l(), list);

  return reverse(newList);
};
 // END
 */

/**
 * Моё решение
 */
import { l, isEmpty, reverse, toString, isList, head, tail, cons, reduce } from 'hexlet-pairs-data';

// BEGIN (write your solution here)
export const flatten = lists => {
  const iter = (list, acc) =>
    reduce(
      (item, accItem) => (isList(item) ? iter(item, accItem) : cons(item, accItem)),
      acc, list);
  return reverse(iter(lists, l()));
};
// END
