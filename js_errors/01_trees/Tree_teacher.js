 // BEGIN
  hasChild(key) {
    return this.children.has(key);
  }

  getParent() {
    return this.parent;
  }

  removeChild(key) {
    this.children.delete(key);
  }

  hasChildren() {
    return this.children.size > 0;
  }

  getDeepChild(keys) {
    return keys.reduce((node, key) => node && node.getChild(key), this);
  }

  getChildren() {
    return [...this.children.values()];
  }
  // END