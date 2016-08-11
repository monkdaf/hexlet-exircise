import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

// BEGIN (write your solution here)
const singleTagsList = new Set(['hr', 'br', 'img']);

export default (name, ...args) => {
  const Cons = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new Cons(name, ...args);
};
// END
