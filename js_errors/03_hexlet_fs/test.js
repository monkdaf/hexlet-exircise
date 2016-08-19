import assert from 'assert';

import HexletFs from './HexletFs';


describe('FS', () => {
  let files;

  beforeEach(() => {
    files = new HexletFs();
  });

  it('#mkdirSync', () => {
    assert.ok(!files.isDirectory('/etc'));

    files.mkdirSync('/etc');
    assert.ok(files.isDirectory('/etc'));

    files.mkdirSync('/etc/nginx');
    assert.ok(files.isDirectory('/etc/nginx'));
  });

  it('#mkdirSync2', () => {
    assert.ok(!files.isDirectory('/var//'));

    files.mkdirSync('/var/');
    assert.ok(files.isDirectory('/var////'));
    assert.ok(files.isDirectory('/var'));

    files.mkdirSync('/var//log//////');
    assert.ok(files.isDirectory('/var/log'));
    assert.ok(files.isDirectory('/var///log'));
  });

  it('#touchSync', () => {
    assert.ok(!files.isFile('/file.txt'));

    files.touchSync('/file.txt');
    assert.ok(files.isFile('/file.txt'));

    files.mkdirSync('/etc');
    files.touchSync('/etc/bashrc');
    assert.ok(files.isFile('/etc/bashrc'));
  });
});
