exports.up = function (knex) {
  let createQuery = `CREATE TABLE sales_category (
        id SERIAL PRIMARY KEY NOT NULL,
        name TEXT NOT NULL
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE sales_category`;
  return knex.raw(dropQuery);
};
