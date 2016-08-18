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

    const sql = "SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = 'products'";
    chain.then(() => db.query(sql))
    .then((result) => {
      // console.log(result);
      const columns = result.reduce((acc, row) => {
        acc[row.column_name] = {
          type: row.data_type,
          nullable: row.is_nullable === 'YES',
        };
        return acc;
      }, {});

      assert(columns.amount, "Column `amount` doesn't exist");
      assert.equal(columns.amount.type, 'integer');
      assert.equal(columns.name.type, 'character varying');
      assert(!columns.name.nullable, 'Column `name` is nullable');
    }).then(done, done);
  });
});
