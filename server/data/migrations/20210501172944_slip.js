exports.up = function (knex) {
  let createQuery = `CREATE TABLE slip (
        id SERIAL PRIMARY KEY NOT NULL,
        date DATE NOT NULL,
        transaction uuid NOT NULL,
        amount numeric NOT NULL
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE slip`;
  return knex.raw(dropQuery);
};
