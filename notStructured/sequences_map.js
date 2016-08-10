/**
 * Created by daf on 24.06.2016.
 * задание
 * Реализуйте функцию map для библиотеки html-tags используя итеративный процесс:

 import { make, append, node, value, is } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));

 const processedDom = map((element) => {
  if (is('h1', element)) {
    return node('h2', value(element));
  }
  return element;
}, dom3);
 Реализуйте функцию mirror, которая переворачивает содержимое тегов, так чтобы читать его нужно было справа налево, а не слева направо.

 import { make, append, node, value, is } from 'hexlet-html-tags';

 const dom1 = make();
 const dom2 = append(dom1, node('h1', 'scheme'));
 const dom3 = append(dom2, node('p', 'is a lisp'));

 // <h1>emehcs</h1>
 // <p>psil a si</p>
 toString(mirror(dom3));
 */


/**
 * Решение учителя
 // BEGIN
 export const map = (func, elements) => {
  // if (isEmpty(elements)) {
  //   return l();
  // }

  // return cons(func(head(elements)), map(func, tail(elements)));

  const iter = (items, acc) => {
    if (isEmpty(items)) {
      return reverse(acc);
    }
    return iter(tail(items), cons(func(head(items)), acc));
  };

  return iter(elements, l());
};

 export const mirror = (elements) =>
 map(element => node(name(element), reverseStr(value(element))), elements);
 // END
*/

/**
 * Решение не совсем верное (см https://ru.hexlet.io/code_reviews/371?submission_id=188#file-0 )
 *import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
 import { name, value, node, is } from 'hexlet-html-tags';
 import { reverse as reverseStr } from './strings';

 // BEGIN (write your solution here)
 export const map = (func, dom) => {
    let domNew = l();
    const iter = (domIter) => {
        if (!isEmpty(domIter)) {
            domNew = cons(func(head(domIter)), domNew);
            iter(tail(domIter));
        }
    };

    iter(dom);
    return reverseDomList(domNew);
};

 const reverseDomList = (dom) => {
    let domNew = l();
    const iter = (domIter) => {
        if (!isEmpty(domIter)) {
            domNew = cons(head(domIter), domNew);
            iter(tail(domIter));
        }
    };

    iter(dom);
    return domNew;
};

 export const mirror = (dom) => {
    let domNew = l();
    const iter = (domIter) => {
        if (!isEmpty(domIter)) {
            const headEl = head(domIter);
            const nameEl = name(headEl);
            const valueEl = reverseStr(value(headEl));
            domNew = cons(node(nameEl,valueEl), domNew);
            iter(tail(domIter));
        }
    };

    iter(dom);
    return reverseDomList(domNew);
};
 // END

 export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};

 *
 */

/**
 * Вариант переработанный
*/
import { l, isEmpty, head, tail, cons, reverse } from 'hexlet-pairs-data';
import { name, value, node, is } from 'hexlet-html-tags';
import { reverse as reverseStr } from './strings';

// BEGIN (write your solution here)
export const map = (func, dom) => {
  let domNew = l();
  const iter = (domOld, domNew) => {
    if (isEmpty(domOld)) return reverse(domNew);
    return iter(tail(domOld), cons(func(head(domOld)), domNew));
  };

  return iter(dom, l());
};

export const mirror = (dom) => map(element => node(name(element),reverseStr(value(element))), dom);


// END

export const b2p = (elements) => {
  if (isEmpty(elements)) {
    return l();
  }

  let newElement;
  const element = head(elements);
  if (is('blockquote', element)) {
    newElement = node('p', value(element));
  } else {
    newElement = element;
  }

  return cons(newElement, b2p(tail(elements)));
};
