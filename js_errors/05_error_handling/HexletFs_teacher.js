// BEGIN
  mkdirpSync(path) {
    return getPathParts(path).reduce((subtree, part) => {
      if (!subtree) {
        return false;
      }
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (!current.getMeta().getStats().isDirectory()) {
        return false;
      }

      return current;
    }, this.tree);
  }

  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent) {
      return false;
    }
    if (!parent.getMeta().isDirectory()) {
      return false;
    }
    return parent.addChild(name, new File(name, ''));
  }

  readdirSync(path) {
    const dir = this.tree.getDeepChild(getPathParts(path));
    if (!dir || !dir.getMeta().getStats().isDirectory()) {
      return false;
    }
    return dir.getChildren()
      .map(child => child.getMeta().getName());
  }

  rmdirSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const current = this.tree.getDeepChild(parts);
    if (!current) {
      return false;
    }
    if (!current.getMeta().getStats().isDirectory() || current.hasChildren()) {
      return false;
    }
    return current.parent.removeChild(name);
  }
  // END