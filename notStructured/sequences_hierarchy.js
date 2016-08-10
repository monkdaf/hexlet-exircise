/**
 * Created by daf on 11.07.2016.
 */

/**
 * Решение учителя

// BEGIN
export const select = (list, tree) => {
  if (isEmpty(tree)) {
    return l();
  }

  const iter = (rest, elements, acc) => {
    if (isEmpty(rest)) {
      return acc;
    }

    const tagName = head(rest);
    const newAcc = filter(item => is(tagName, item), elements);
    const elementsWithChildren = filter(item => hasChildren(item), newAcc);
    let newElements = l();
    if (!isEmpty(elementsWithChildren)) {
      newElements = reduce((item, result) =>
        append(result, children(item)), l(), elementsWithChildren);
    }
    return iter(tail(rest), newElements, newAcc);
  };

  return iter(list, tree, l());
};
// END
 */
/**
 * моё окончательное решение
 */
import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, lists) => {
  if (isEmpty(query) || isEmpty(lists)) {
    return null;
  }

  const iterNode = (query, lists, acc) => {
    if (isEmpty(query)) { return acc }
    const newAcc = filter(
      node => is(head(query), node),
      lists);
    const filteredLists = filter(
      node => hasChildren(node),
      newAcc);
    //console.log(toString(filteredLists));

    let newLists = l();
    if (!isEmpty(filteredLists)) {
      newLists = reduce(
        (item, result) => append(result, children(item)),
        l(),
        filteredLists);
    }
    return iterNode(tail(query), newLists, newAcc);
  };

  return iterNode(query, lists, l());
};
// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }

  return countLeaves(head(tree))
    + countLeaves(tail(tree));
};

/**
 * Решение которое никак не мог решить. Это копия перед полным переписываением

import { l, isList, isEmpty, head, tail, append } from 'hexlet-pairs-data';
import { is, toString, hasChildren, children, filter, reduce } from 'hexlet-html-tags';

// BEGIN (write your solution here)
export const select = (query, tree) => {
  let cnt = 0;
  let cnt0 = 0;
// --------------------------------------------------------------------
  const testQuery = (tailQuery, tailTree, acc) => {
    //console.log(`tailQuery=${toString(tailQuery)}, tailTree=${toString(tailTree)}, acc=${toString(acc)}`);

    const headQuery = head(tailQuery);
    const headTree = head(tailTree);
    console.log(`headQuery=${headQuery}`);
    console.log(`headTree=${head(headTree)}`);
    if (isEmpty(tailQuery)) { return acc }

    if ( headQuery === head(headTree) ) {
      acc = append(headTree, acc);
      cnt += 1;
      console.log(`cnt=${cnt}`);
      console.log(`acc+=${head(headTree)}`);
      console.log(`acc=${(acc)}`);
      console.log(`children(headTree)=${toString(children(headTree))}`);
      console.log(`tail(headTree)=${toString(tail(tailTree))}`);
      return testQuery(tail(tailQuery), tail(tailTree), acc);
      // return testQuery(tail(tailQuery), children(headTree), acc);
    } else {
      return l();
    }
  };
// --------------------------------------------------------------------
  const iter = (tailTree, acc) => {
    cnt0 += 1;
    if (!hasChildren(tailTree)) { return acc }
    let listEqQuery = testQuery(query, children(tailTree), l());
    if ( !isEmpty(listEqQuery) ) { acc = append(listEqQuery, acc) }
    console.log(`cnt0=${cnt0}`);
    return iter(tail(tailTree), acc);
  };
// --------------------------------------------------------------------
  if (isEmpty(query) || isEmpty(tree)) { return l() }
//console.log(`query=${head(query)}`);
//console.log(`query2=${head(tail(query))}`);
//console.log(`tree=${head(head(tree))}`);
//console.log(`tree2=${head(tail(tree))}`);

  return iter(tree, l());
};
// END

export const countLeaves = (tree) => {
  if (!isList(tree)) {
    return 1;
  }
  if (isEmpty(tree)) {
    return 0;
  }

  return countLeaves(head(tree))
    + countLeaves(tail(tree));
};
*/