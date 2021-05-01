const db = require("../data/db.js");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const signUp = (user) => {
  return hashPassword(user.password)
    .then((hashedPassword) => {
      user.password = hashedPassword;
    })
    .then(() => createUser(user))
    .then((user) => {
      delete user.password;
      return user;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

const hashPassword = (password) => {
  return new Promise((resolve, reject) =>
    bcrypt.hash(password, 10, (err, hash) => {
      err ? reject(err) : resolve(hash);
    })
  );
};

const createUser = (user) => {
  return db
    .raw(
      "INSERT INTO users (first_name, last_name, email, password, position, admin, company) VALUES (?, ?, ?, ?, ?, ?, ?) RETURNING *",
      [
        user.first_name,
        user.last_name,
        user.email,
        user.password,
        user.position,
        user.admin,
        user.company,
      ]
    )
    .then((data) => data.rows[0]);
};

module.exports = {
  signUp,
};
