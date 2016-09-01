import 'babel-polyfill';

// BEGIN (write your solution here)
export const multi = (a, b) => {
  const iter = (acc, count) => count === 0 ? acc : iter(acc+a, count-1);
  return iter(0, b);
};
// END
