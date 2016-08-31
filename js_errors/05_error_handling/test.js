import assert from 'assert';

import HexletFs from './HexletFs';

describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
    files.mkdirSync('/etc');
    files.mkdirSync('/opt');
    files.touchSync('/opt/file.txt');
    files.mkdirpSync('/etc/nginx/conf.d');
    files.touchSync('/etc/nginx/nginx.conf');
  });

  it('#mkdirpSync', () => {
    assert.ok(!files.mkdirpSync('/etc/nginx/nginx.conf/wrong'));
  });

  it('#mkdirSync', () => {
    assert.ok(!files.mkdirSync('/etc/nginx/nginx.conf/wrong'));
    assert.ok(!files.mkdirSync('/opt/folder/inner'));

    assert.ok(files.statSync('/opt').isDirectory());
  });

  it('#readdirSync', () => {
    assert.deepEqual(files.readdirSync('/etc/nginx'), ['conf.d', 'nginx.conf']);
    assert.ok(!files.readdirSync('/etc/nginx/undefined'));
    assert.ok(!files.readdirSync('/etc/nginx/nginx.conf'));
  });

  it('#rmdirSync', () => {
    files.rmdirSync('/etc/nginx/conf.d');
    assert.deepEqual(files.readdirSync('/etc/nginx'), ['nginx.conf']);

    assert.ok(!files.rmdirSync('/etc/unknown'));
    assert.ok(!files.rmdirSync('/etc/nginx'));

    assert.ok(!files.rmdirSync('/etc/nginx/nginx.conf'));
  });

  it('#statSync', () => {
    assert.ok(files.statSync('/etc/nginx').isDirectory());
    assert.ok(!files.statSync('/etc/nginx').isFile());

    assert.ok(!files.statSync('/etc/nginx/nginx.conf').isDirectory());
    assert.ok(files.statSync('/etc/nginx/nginx.conf').isFile());

    assert.ok(!files.statSync('/etc/unknown'));
  });

  it('#touchSync', () => {
    assert.ok(!files.touchSync('/etc/nginx/nginx.conf/wrong'));
    assert.ok(!files.touchSync('/opt/folder/inner'));

    assert.ok(files.statSync('/opt/file.txt').isFile());
  });
});
