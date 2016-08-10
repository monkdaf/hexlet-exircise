/**
 * Created by daf on 25.06.2016.
 */

/**
 * Задание
 * Реализуйте функцию filter для библиотеки html-tags, используя итеративный процесс:

 import { node, append, make, filter } from 'hexlet-html-tags';

 const html1 = append(make(), node('h1', 'header1'));
 const html2 = append(html1, node('h1', 'header2'));
 const html3 = append(html2, node('p', 'content'));

 const processedHtml = filter((element) =>
 !is('h1', element), html3);

 //<p>content</p>
 toString(processedHtml);
 Реализуйте функцию quotes, которая извлекает из html тексты цитат и возвращает список цитат.

 import { toString } from 'hexlet-pairs-data';
 import { make, append, node } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));
 const dom4 = append(dom3, node('blockquote', 'live is live'));
 const dom5 = append(dom4, node('blockquote', 'i am sexy, and i know it'));

 toString(quotes(dom5)); // ('i am sexy, and i know it', 'live is live');
 */

/**
 * Решение учителя
 * // BEGIN
 export const filter = (func, elements) => {
  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    const item = head(items);
    const newAcc = func(item) ? cons(item, acc) : acc;
    return iter(tail(items), newAcc);
  };

  return iter(elements, l());
};

 export const quotes = (elements) => {
  const filtered = filter(element => name(element) === 'blockquote', elements);
  return map(element => value(element), filtered);
};
 // END
 */

/**
 * Моё решение
 *
 */
import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { name, value, is, toString, map } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const filter = (func, dom) => {

  const iter = (domCurr, domNew) => {
    if (isEmpty(domCurr)) return reverse(domNew);
    return func(head(domCurr)) ? iter(tail(domCurr), cons(head(domCurr), domNew)) : iter(tail(domCurr), domNew);
  };

  return iter(dom, l());
};

export const quotes = (dom) => {

  return map(
    element => value(element) ,
    filter(element => is('blockquote', element) , dom)
  );
};
// END

export const removeHeaders = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  const element = head(elements);
  const tailElements = tail(elements);
  if (is('h1', element)) {
    return removeHeaders(tailElements);
  }
  return cons(element, removeHeaders(tailElements));
};
