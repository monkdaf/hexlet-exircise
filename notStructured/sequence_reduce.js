/**
 * Created by daf on 01.07.2016.
 */

/**
 * Задание
 Реализуйте и экспортируйте функцию reduce для библиотеки html-tags:

 import { node, append, make, reduce } from 'hexlet-html-tags';

 const html1 = append(make(), node('h1', 'header1'));
 const html2 = append(html1, node('h1', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 reduce((element, acc) => {
  return is('h1', element) ? acc + 1 : acc;
}, 0, html3); // 2
 Реализуйте и экспортируйте функцию emptyTagsCount, которая считает количество пустых тегов. Тип тега задается первым параметром функции.

 import { toString } from 'hexlet-pairs-data';
 import { make, append, node } from 'hexlet-html-tags';

 const html1 = make();
 const html2 = append(html1, node('h1', 'scheme'));
 const html3 = append(html2, node('p', 'is a lisp'));
 const html4 = append(html3, node('blockquote', ''));
 const html5 = append(html4, node('blockquote', ''));
 const html6 = append(html5, node('blockquote', 'quote'));

 headersCount('blockquote', html6); //2
 */


/**
 * Решение учителя
 *
 // BEGIN
 export const reduce = (func, acc, elements) => {
  const iter = (items, result) => {
    if (isEmpty(items)) {
      return result;
    }

    return iter(tail(items), func(head(items), result));
  };
  return iter(elements, acc);
};

 export const emptyTagsCount = (tagName, elements) => {
  const predicate = element => is(tagName, element) && value(element) === '';
  const filtered = filter(predicate, elements);
  return reduce((element, acc) => acc + 1, 0, filtered);
};
 // END
 */


/**
 * Моё решение
 */

import { l, isEmpty, head, tail, cons } from 'hexlet-pairs-data';
import { name, value, is, toString, filter } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const reduce = (func, startVal, elements) => {
  const iter = (currElements, val) => {
    if (isEmpty(currElements)) return val;
    return iter(
      tail(currElements),
      func(head(currElements), val)
    );
  };
  return iter(elements, startVal);
};

export const emptyTagsCount = (tag, dom) =>
  reduce(
    (element, acc) => {
      let lAcc = acc;
      if ((name(element) === tag) && (value(element) === '')) {
        lAcc += 1;
      }
      return lAcc;
    },
    0, dom);
// END

export const headersCount = (tagName, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return acc;
    }

    const item = head(items);
    const newAcc = is(tagName, item) ? acc + 1 : acc;
    return iter(tail(items), newAcc);
  };
  return iter(elements, 0);
};


