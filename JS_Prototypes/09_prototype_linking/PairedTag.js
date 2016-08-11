import Node from './Node';

export default function PairedTag(name, attribues = {}, body = '', children = []) {
  Node.apply(this, [name, attribues]);
  this.body = body;
  this.children = children;

  return this;
}

// BEGIN (write your solution here)
PairedTag.prototype = Object.create(Node.prototype);
// END

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};
