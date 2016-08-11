// BEGIN (write your solution here) (write your solution here)
import Node from './Node';

function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}

export default PairedTag;
// END