/**
 * Created by daf on 09.06.2016.
 *
 * Вдохновение брать тут:
 * https://habrahabr.ru/post/215991/
 * https://habrahabr.ru/post/248331/
 * https://habrahabr.ru/post/254587/
 *
 */
"use strict";

var ZeroSrc = function ZeroSrc(f) {
  return function (x) {
    return x;
  };
};

var SuccSrc = function SuccSrc(n) {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};

var Zero = function Zero(f) {
  return function (x) {
    return x;
  };
};

var Succ = function Succ(n) {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};

console.log(Succ(Succ(Zero))(function (x) {
  return x + 1;
})(0));

//# sourceMappingURL=NumberOfChurch-compiled.js.map