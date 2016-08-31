import Tree from 'hexlet-trees';
import { Dir, File } from 'hexlet-fs';

import errors from 'errno';

const getPathParts = (path) =>
  path.split('/').filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    if (!current) {
      return [null, errors.code.ENOENT];
    }
    return [current.getMeta().getStats(), null];
  }

  // BEGIN (write your solution here)
  
  // END

  mkdirpSync(path) {
    const iter = (parts, subtree) => {
      if (parts.length === 0) {
        return [subtree, null];
      }
      const [part, ...rest] = parts;
      const current = subtree.getChild(part);
      if (!current) {
        return iter(rest, subtree.addChild(part, new Dir(part)));
      }
      if (!current.getMeta().isDirectory()) {
        return [null, errors.code.ENOTDIR];
      }

      return iter(rest, current);
    };
    const parts = getPathParts(path);
    return iter(parts, this.tree);
  }

  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent) {
      return [null, errors.code.ENOENT];
    }
    if (!parent.getMeta().isDirectory()) {
      return [null, errors.code.ENOTDIR];
    }
    return [parent.addChild(name, new File(name, '')), null];
  }

  readdirSync(path) {
    const dir = this.tree.getDeepChild(getPathParts(path));
    if (!dir) {
      return [null, errors.code.ENOENT];
    } else if (!dir.getMeta().isDirectory()) {
      return [null, errors.code.ENOTDIR];
    }
    return [dir.getChildren().map(child => child.getKey()), null];
  }

}
