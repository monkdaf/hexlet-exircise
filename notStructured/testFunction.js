/**
 * Created by daf on 08.06.2016.
 */
const someFunction = (f1, f2) => (num) => f1(f2(num, 3));

const myF = someFunction(Math.abs, Math.pow);

console.log(myF(-3));
console.log(myF(-4));
