/**
 * Created by daf on 08.06.2016.
 *
 * Реализуйте тройку True, False, If используя только функции, внутри которых только функции ;) То есть нельзя пользоваться встроенными в язык if, а так же true/false.
 *
 * Пример:
 *  If(True)('one')('two'); // one
 *  If(False)('one')('two'); // two
 *  Из вызовов выше можно сразу увидеть что If это функция, внутри которой матрешка из двух функций.
 *
 *  РЕШЕНИЕ АВТОРА НИЖЕ
 *
 *  // BEGIN
 * export const True = (x) => () => x;
 * export const False = () => (y) => y;
 *
 * export const If = (p) => (t) => (e) => p(t)(e);
 * // END
 */

//это моё решение
const True = () => 1===1;
const False = () => 1===2;
const myIf = (myBool, msg1, msg2) => {
  return myBool === True ? msg1 : msg2;
};

const If1 = (myBool) => (msg1) => myBool === True ? msg1 : '2';
const If = (myBool) => (msg1) => (msg2) => myBool === True ? msg1 : msg2;

console.log(myIf(True, 's1', 's2'));
console.log(myIf(False, 's1', 's2'));
console.log(If1(True)('s1'));
console.log(If1(False)('s1'));
console.log(If(True)('s1')('s2'));
console.log(If(False)('s1')('s2'));

// Это решение автора
const truTrue = (x) => () => x;
const truFalse = () => (y) => y;
const truIf = (p) => (t) => (e) => p(t)(e);

console.log(True());
console.log(truTrue());
console.log(truFalse());
console.log(truIf(truTrue)('s1')('s2'));
console.log(truIf(truFalse)('s1')('s2'));
