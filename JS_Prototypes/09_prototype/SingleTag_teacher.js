// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);

  return this;
}

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};
// END