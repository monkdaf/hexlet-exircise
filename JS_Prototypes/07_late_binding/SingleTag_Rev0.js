// BEGIN (write your solution here) (write your solution here)
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

export default SingleTag;
// END