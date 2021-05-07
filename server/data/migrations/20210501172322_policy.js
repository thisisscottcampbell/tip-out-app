exports.up = function (knex) {
  let createQuery = `CREATE TABLE policy (
        id SERIAL PRIMARY KEY NOT NULL,
	    company uuid NOT NULL,
	    sales_category uuid NOT NULL,
	    percent numeric NOT NULL,
	    position uuid NOT NULL
        )`;

  return knex.raw(createQuery);
};

exports.down = function (knex) {
  let dropQuery = `DROP TABLE policy`;
  return knex.raw(dropQuery);
};
