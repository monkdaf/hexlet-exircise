// BEGIN (write your solution here)
import Node from './Node';
function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleTag(name, attributes = {}) {
  const objSingleTag = new Node(name, attributes);
  objSingleTag.toString = toString;
  return objSingleTag;
}
// END