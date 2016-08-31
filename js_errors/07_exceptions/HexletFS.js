import errors from 'errno';
import Tree from 'hexlet-trees';

import { Dir, File } from 'hexlet-fs';

import HexletFsError from './HexletFsError';

const getPathParts = (path) =>
  path.split('/').filter(part => part !== '');

export { Dir, File };

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, path);
    }
    return current.getMeta().getStats();
  }

  // BEGIN (write your solution here)
  copySync(src, dest) {
    const partsSrc = getPathParts(src);
    let nameSrc = partsSrc[partsSrc.length - 1];
    const currentSrc = this.tree.getDeepChild(partsSrc);
    const parentSrc = this.tree.getDeepChild(partsSrc.slice(0, -1));
    if (!currentSrc) {
      throw new HexletFsError(errors.code.ENOENT, src);
    }
    if (currentSrc.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, src);
    }
    if (!parentSrc.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.ENOTDIR, src);
    }
    
    const partsDest = getPathParts(dest);
    const currentDest = this.tree.getDeepChild(partsDest);
    if (!currentDest) {
      throw new HexletFsError(errors.code.ENOENT, dest);
    }
    if (currentDest.getMeta().isFile()) {
      nameSrc = partsDest[partsDest.length - 1];
    }
    
    return currentDest.addChild(nameSrc, new File(nameSrc, this.readFileSync(src)));
  }
  // END

  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent) {
      throw new HexletFsError(errors.code.ENOENT, path);
    }
    if (!parent.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.ENOTDIR, path);
    }
    return parent.addChild(name, new File(name, ''));
  }

  mkdirpSync(path) {
    getPathParts(path).reduce((subtree, part) => {
      const current = subtree.getChild(part);
      if (!current) {
        return subtree.addChild(part, new Dir(part));
      }
      if (!current.getMeta().isDirectory()) {
        throw new HexletFsError(errors.code.ENOTDIR, path);
      }

      return current;
    }, this.tree);
  }

  readFileSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    if (!current) {
      throw new HexletFsError(errors.code.ENOENT, path);
    }
    if (current.getMeta().isDirectory()) {
      throw new HexletFsError(errors.code.EISDIR, path);
    }
    return current.getMeta().getBody();
  }
}
