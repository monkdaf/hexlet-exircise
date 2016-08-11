// BEGIN (write your solution here)
import Node from './Node';
function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  const objPairedTag = new Node(name, attributes);
  objPairedTag.body = body;
  objPairedTag.children = children;
  objPairedTag.toString = toString;
  return objPairedTag;
}
// END