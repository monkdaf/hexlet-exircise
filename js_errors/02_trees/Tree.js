class Tree {
  constructor(key, meta, parent) {
    this.parent = parent;
    this.key = key;
    this.meta = meta;
    this.children = new Map();
  }

  getKey() {
    return this.key;
  }

  getMeta() {
    return this.meta;
  }

  addChild(key, meta) {
    const child = new Tree(key, meta, this);
    this.children.set(key, child);

    return child;
  }

  getChild(key) {
    return this.children.get(key);
  }

  // BEGIN (write your solution here)
  hasChild(key) {
    return this.getChild(key) !== undefined;
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    return this.children.delete(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  getDeepChild(keys) {
    return keys.reduce((node, key) => node && node.getChild(key), this);
  }

  getChildren() {
    const arr = [];
    this.children.forEach(elem => arr.push(elem));
    return arr;
  }
  // END
}

export default Tree;
