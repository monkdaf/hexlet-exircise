// BEGIN (write your solution here)
export default class PairedTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString(name = this.name, attributes = this.attributes) {
    const attr = Object.keys(attributes).reduce(
      (acc, key) => `${acc} ${key}="${attributes[key]}"`,
      '');
    return `<${name}${attr}>`;
  }
}
// END
