// BEGIN (write your solution here)
export default class {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  getName() {
    return this.name;
  }
  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// END
