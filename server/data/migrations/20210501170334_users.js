exports.up = (knex) => {
  let createQuery = `CREATE TABLE users (
    id SERIAL PRIMARY KEY NOT NULL,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    position uuid NOT NULL,
    admin BOOLEAN NOT NULL,
    company TEXT NOT NULL
    )`;

  return knex.raw(createQuery);
};

exports.down = (knex) => {
  let dropQuery = `DROP TABLE users`;
  return knex.raw(dropQuery);
};
