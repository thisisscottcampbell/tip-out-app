exports.up = function (knex) {
  let createQuery = `CREATE TABLE messages (
        id SERIAL PRIMARY KEY NOT NULL,
        name TEXT NOT NULL,
	    location TEXT NOT NULL,
	    company_id TEXT NOT NULL UNIQUE
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE company`;
  return knex.raw(dropQuery);
};
