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
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexletPairsData = require('hexlet-pairs-data');

var _hexletHtmlTags = require('hexlet-html-tags');

// BEGIN (write your solution here)
var select = function select(query, lists) {
  if ((0, _hexletPairsData.isEmpty)(query) || (0, _hexletPairsData.isEmpty)(lists)) {
    return null;
  }

  var iterNode = function iterNode(_x, _x2, _x3) {
    var _again = true;

    _function: while (_again) {
      var query = _x,
          lists = _x2,
          acc = _x3;
      _again = false;

      if ((0, _hexletPairsData.isEmpty)(query)) {
        return acc;
      }
      var newAcc = (0, _hexletHtmlTags.filter)(function (node) {
        return (0, _hexletHtmlTags.is)((0, _hexletPairsData.head)(query), node);
      }, lists);
      var filteredLists = (0, _hexletHtmlTags.filter)(function (node) {
        return (0, _hexletHtmlTags.hasChildren)(node);
      }, newAcc);
      //console.log(toString(filteredLists));

      var newLists = (0, _hexletPairsData.l)();
      if (!(0, _hexletPairsData.isEmpty)(filteredLists)) {
        newLists = (0, _hexletHtmlTags.reduce)(function (item, result) {
          return (0, _hexletPairsData.append)(result, (0, _hexletHtmlTags.children)(item));
        }, (0, _hexletPairsData.l)(), filteredLists);
      }
      _x = (0, _hexletPairsData.tail)(query);
      _x2 = newLists;
      _x3 = newAcc;
      _again = true;
      newAcc = filteredLists = newLists = undefined;
      continue _function;
    }
  };

  return iterNode(query, lists, (0, _hexletPairsData.l)());
};
exports.select = select;
// END

var countLeaves = function countLeaves(tree) {
  if (!(0, _hexletPairsData.isList)(tree)) {
    return 1;
  }
  if ((0, _hexletPairsData.isEmpty)(tree)) {
    return 0;
  }

  return countLeaves((0, _hexletPairsData.head)(tree)) + countLeaves((0, _hexletPairsData.tail)(tree));
};

exports.countLeaves = countLeaves;
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

//# sourceMappingURL=sequences_hierarchy-compiled.js.map