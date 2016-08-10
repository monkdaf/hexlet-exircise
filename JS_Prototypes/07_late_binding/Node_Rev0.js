// BEGIN (write your solution here) (write your solution here)
function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
}

function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributesAsLine = getAttributesAsLine;
}

export default Node;
// END