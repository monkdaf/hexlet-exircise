// BEGIN (write your solution here)
import Node from './Node';

export default function SingleTag(name, attribues = {}) {
  Node.apply(this, [name, attribues]);

  return this;
}

SingleTag.prototype = Object.create(Node.prototype);
// END

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
