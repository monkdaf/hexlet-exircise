/**
 * Created by daf on 09.06.2016.
 *
 * Пары неотрицательных чисел можно представить используя только числа и арифметические операции.
 * Для этого можно считать что пара это 2^a * 3^b;
 *
 * Функции car и cdr, при этом, будут просто вычислять кратность двойки и тройки соответственно
 * в разложении своего аргумента на простые сомножители.
 *
 * Пример:
 *  const pair = cons(5, 8);
 *  car(pair); // 5
 *  cdr(pair); // 8
 *
 */

/* Решение автора

const factor = (base, value) => {
  if (value % base !== 0) {
    return 0;
  }
  return 1 + factor(base, value / base);
}
export const cons = (a, b) => Math.pow(2, a) * Math.pow(3, b);
export const car = (pair) => factor(2, pair);
export const cdr = (pair) => factor(3, pair);
*/

"use strict";

var cons = function cons(a, b) {
  return Math.pow(2, a) * Math.pow(3, b);
};

var decomp = function decomp(n) {
  var count2 = 0;
  for (var i = 0; i <= n; i *= 2) {
    var endOf3 = n / i;
    if (i === 0) {
      endOf3 = n;
      count2 = -1;
      i = 1;
    }
    count2++;
    var count3 = 0;
    if (i === n) return [count2, count3];
    var j = 3;
    for (; j <= endOf3; j *= 3) count3++;
    if (j / 3 === endOf3) return [count2, count3];
  }
};

var car = function car(n) {
  return decomp(n)[0];
};
var cdr = function cdr(n) {
  return decomp(n)[1];
};

var a0 = 0;
var b0 = 0;
var pair = cons(a0, b0);
var a = car(pair);
var b = cdr(pair);
console.log("a=" + a0 + " b=" + b0 + " - исходное");
console.log("a=" + a + " b=" + b + " - вычисленное");
console.log("pair=" + pair);

//# sourceMappingURL=PairWithoutFunction-compiled.js.map