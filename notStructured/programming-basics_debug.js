/**
 * Created by daf on 29.06.2016.
 */

/**
 * Задание
 */

/**
 * Решение учителя
 *
 const gcd = (a, b) => {
  if (!b) {
    return a;
  }

  return gcd(b, a % b);
};

 export default gcd;
 */

/**
 * моё решение
 */

// BEGIN (write your solution here)

export default (a,b) => {

// Реализуем алгоритм рекурсия и остатки
  const gcdRecursionRemains = (m,n) => {
    if (n === 0) { return m < 0 ? m * -1 : m }
    return gcdRecursionRemains(n, m % n);
  };

// Реализуем бинарный алгоритм
  const gcdBin = (m,n) => {
    console.log(`m=${m} n=${n}`);
    if (m === 0) {
      console.log(1);
      return n;
    }
    if (n === 0) {
      console.log(2);
      return m;
    }
    if (m === n) {
      console.log(3);
      return m;
    }
    if (isEven(m) && isEven(n)) {
      console.log(4);
      return 2 * gcdBin(m/2, n/2);
    }
    if (isEven(m) && !isEven(n)) {
      console.log(5);
      return gcdBin(m/2, n);
    }
    if (!isEven(m) && isEven(n)) {
      console.log(5.1);
      return gcdBin(m, n/2);
    }
    if (!isEven(m) && !isEven(n) && n > m) {
      console.log(6);
      return gcdBin(m, (n-m)/2);
    }
    if (!isEven(m) && !isEven(n) && n < m) {
      console.log(7);
      return gcdBin((m-n)/2, n);
    }
  };
  const isEven = n => n % 2 === 0;

  //return gcdBin(a,b);
  return gcdRecursionRemains(a,b);
};
// END
