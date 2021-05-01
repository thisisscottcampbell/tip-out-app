exports.up = function (knex) {
  let createQuery = `CREATE TABLE position (
        id SERIAL PRIMARY KEY NOT NULL,
        name TEXT NOT NULL
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE position`;
  return knex.raw(dropQuery);
};
