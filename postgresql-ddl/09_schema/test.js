/* global require describe it */

const fs = require('fs');
const assert = require('assert');
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

    const sql = "SELECT 1 AS result FROM information_schema.sequences WHERE sequence_schema = 'custom' AND sequence_name = 'serial'";
    chain.then(() => db.query(sql))
    .then((data) => {
      assert(data.length === 1, 'Expected `custom.serial` sequence exists');
    }).then(done, done);
  });
});
