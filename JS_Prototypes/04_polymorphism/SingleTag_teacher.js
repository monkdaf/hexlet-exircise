// BEGIN
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END