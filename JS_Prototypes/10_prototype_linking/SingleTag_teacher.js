// BEGIN
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);

  return this;
}

// BEGIN
SingleTag.prototype = Object.create(Node.prototype);
// END