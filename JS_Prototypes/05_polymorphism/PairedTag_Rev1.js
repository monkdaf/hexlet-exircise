// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString(name = this.name,
          attributes = this.attributes,
          body = this.body,
          children = this.children) {
    const attr = Object.keys(attributes).reduce(
      (acc, key) => `${acc} ${key}="${attributes[key]}"`,
      '');
    const mapChildren = ({ name, attributes, body, children, toString }) =>
      toString(name, attributes, body, children);
    const childrenToLine = children.map(mapChildren).join('');
    return `<${name}${attr}>${body}${childrenToLine}</${name}>`;
  }
}
// END
