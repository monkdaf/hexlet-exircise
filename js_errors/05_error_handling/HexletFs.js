import Tree from 'hexlet-trees';
import { Dir, File } from 'hexlet-fs';


const getPathParts = (path) =>
  path.split('/').filter(part => part !== '');

export default class {
  constructor() {
    this.tree = new Tree('/', new Dir('/'));
  }

  statSync(path) {
    const current = this.tree.getDeepChild(getPathParts(path));
    if (!current) {
      return false;
    }
    return current.getMeta().getStats();
  }

  mkdirSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent || !parent.getMeta().getStats().isDirectory()) {
      return false;
    }
    return parent.addChild(name, new Dir(name));
  }

  // BEGIN (write your solution here)
  mkdirpSync(path) {
    const parts = getPathParts(path);
    const arrFullPath = [];
    let err = false;
    
    parts.reduce((accPath, part) => {
      if (err) {
        return '';
      }
      const newAcc = `${accPath}/${part}`;
      const child = this.tree.getDeepChild(getPathParts(newAcc));
      
      if (!child) {
        arrFullPath.push(newAcc);
      } else if (child.getMeta().getStats().isFile()) {
        err = true;
      }
      return newAcc;
    });

    if (err) {
      return false;
    }

    return arrFullPath.reduce((acc, fullPath) => this.mkdirSync(fullPath), this);
  }

  touchSync(path) {
    const parts = getPathParts(path);
    const name = parts[parts.length - 1];
    const parent = this.tree.getDeepChild(parts.slice(0, -1));
    if (!parent || !parent.getMeta().getStats().isDirectory()) {
      return false;
    }
    return parent.addChild(name, new File(name));
  }
  
  readdirSync(path) {
    const child = this.tree.getDeepChild(getPathParts(path));
    if (!child || child.getMeta().getStats().isFile()) {
      return false;
    }
    return child.getChildren().map((elem) => elem.getMeta().getName());
  }
  
  rmdirSync(path) {
    const parts = getPathParts(path);
    const child = this.tree.getDeepChild(parts);
    if (!child || child.getMeta().getStats().isFile() || child.hasChildren()) {
      return false;
    }
    
    return child.parent.removeChild(child.key);
  }
  // END
}
