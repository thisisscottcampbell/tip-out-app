exports.up = function (knex) {
  let createQuery = `CREATE TABLE transaction (
        id SERIAL PRIMARY KEY NOT NULL,
        tipout uuid NOT NULL,
        tipin uuid NOT NULL
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE transaction`;
  return knex.raw(dropQuery);
};
