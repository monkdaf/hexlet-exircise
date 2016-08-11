// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    const attr = Object.keys(this.attributes).reduce(
      (acc, key) => `${acc} ${key}="${this.attributes[key]}"`,
      '');
    return `<${this.name}${attr}>`;
  }
}
// END
