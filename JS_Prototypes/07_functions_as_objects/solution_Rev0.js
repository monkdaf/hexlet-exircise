// BEGIN (write your solution here)
const magic = (...args) => {
  const summator = (arr) => arr.reduce((acc, val) => acc + val, 0);
  let sum = summator(args);

  const recurseMagic = (...nextArgs) => {
    sum = sum + summator(nextArgs);
    return recurseMagic;
  };

  recurseMagic.valueOf = () => sum;

  return recurseMagic;
};

export default magic;
// END