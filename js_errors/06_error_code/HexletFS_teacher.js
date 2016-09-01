// BEGIN
  unlinkSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const current = this.tree.getDeepChild(parts);
    if (!current) {
      return [null, errors.code.ENOENT];
    } else if (current.getMeta().isDirectory()) {
      return [null, errors.code.EPERM];
    }
    return [current.parent.removeChild(name), null];
  }

  writeFileSync(path, body) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    const current = parent.getChild(name);
    if (current && current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [parent.addChild(name, new File(name, body)), null];
  }

  readFileSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    if (current.getMeta().isDirectory()) {
      return [null, errors.code.EISDIR];
    }
    return [current.getMeta().getBody(), null];
  }

  // END