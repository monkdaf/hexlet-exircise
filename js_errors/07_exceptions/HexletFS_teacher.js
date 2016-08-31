  // BEGIN
  copySync(src, dest) {
    const srcParts = getPathParts(src);
    const node = this.tree.getDeepChild(srcParts);
    if (!node) {
      throw new HexletFsError(errors.code.ENOENT, src);
    }
    if (node.getMeta().getStats().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, src);
    }
    const destParts = getPathParts(dest);
    const destParent = this.tree.getDeepChild(destParts.slice(0, -1));
    if (!destParent || destParent.getMeta().getStats().isFile()) {
      throw new HexletFsError(errors.code.ENOENT, dest);
    }

    const destNode = this.tree.getDeepChild(destParts);
    if (destNode.getMeta().isDirectory()) {
      const name = node.getMeta().getName();
      return destNode.addChild(name, new File(name, ''));
    }
    const name = destNode.getMeta().getName();
    return destParent.addChild(name, new File(name, ''));
  }
  // END