import { beforeEach, describe, it } from 'mocha';
// import chai from 'chai';
import assert from 'assert';

import HexletFs from './HexletFs';

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
    files.mkdirpSync('/etc/nginx');
    files.mkdirpSync('/opt');
    files.touchSync('/opt/file.txt');
    files.mkdirpSync('/etc/nginx/conf.d');
    files.touchSync('/etc/nginx/nginx.conf');
  });

  it('#copySync', () => {
    assert.throws(() => files.copySync('undefined', '/etc'),
      err => err.code === 'ENOENT');

    assert.throws(() => files.copySync('/opt', '/etc'),
      err => err.code === 'EISDIR');

    assert.throws(() => files.copySync('/op/file.txt', '/etc/file.txt/inner'),
      err => err.code === 'ENOENT');

    assert.throws(() => files.copySync('/opt/file.txt', '/etc/undefined/inner'),
      err => err.code === 'ENOENT');

    files.copySync('/opt/file.txt', '/etc');
    assert.ok(files.statSync('/etc/file.txt').isFile());
    files.copySync('/opt/file.txt', '/etc/nginx/nginx.conf');
    assert.equal(files.readFileSync('/etc/nginx/nginx.conf'), '');
  });

});
