/**
 * Created by daf on 09.06.2016.
 *
 * Вдохновение брать тут:
 * https://habrahabr.ru/post/215991/
 * https://habrahabr.ru/post/248331/
 * https://habrahabr.ru/post/254587/
 *
 */
var ZeroSrc = function (f) {
  return function (x) {
    return x;
  };
};

var SuccSrc = function (n) {
  return function (f) {
    return function (x) {
      return f(n(f)(x));
    };
  };
};

const Zero = (f) => (x) => x;

const Succ = (n) => (f) => (x) => f( n(f)(x) );

console.log(
  Succ(Succ(Zero))((x) => x + 1)(0)
);