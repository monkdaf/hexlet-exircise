/* global require describe it */

const fs = require('fs');
const assert = require('chai').assert;
const pgp = require('pg-promise')(/*options*/);

const cn = {
  host: '/var/run/postgresql',
  user: 'nobody',
};

describe('table', () => {
  it('should be created', (done) => {
    const db = pgp(cn);
    const solution = fs.readFileSync('./solution.sql', 'utf8');
    const chain = db.query(solution);

    chain.then(() => {
      const sql = 'SELECT * FROM cars';
      return db.many(sql);
    }).then((result) => {
      const rows = result.reduce((acc, row) => {
        acc[row.name] = row;
        return acc;
      }, {});

      assert.property(rows, 'nissan');
      assert.equal(rows.nissan.id, 1);
      assert.equal(rows.nissan.price, '2.24');

      assert.property(rows, 'bmw');
      assert.equal(rows.bmw.id, 10);
      assert.equal(rows.bmw.price, null);
    }).then(done, done);
  });
});
