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
        "66330321-a3d4-4ac2-8067-827b216cb7aa", //user.position
        user.admin,
        user.company,
      ]
    )
    .then((data) => data.rows[0]);
};

const findUser = (userEmail) => {
  return db
    .raw("SELECT * FROM users WHERE email = ?", [userEmail])
    .then((data) => {
      return data.rows[0];
    });
};

const signInUser = (userRequest) => {
  //userRequest is an object with both the email and password
  let user;
  return findUser(userRequest.email)
    .then((foundUser) => {
      user = foundUser;
      return checkPassword(userRequest.password, foundUser);
    })
    .then(
      () => {
        return user;
      },
      (err) => {
        return "User not found, please verify the fields";
      }
    )
    .catch((err) => {
      console.log(err);
      return "Cannot sign in, please contact admin";
    });
};

const checkPassword = (reqPassword, foundUser) => {
  return new Promise((resolve, reject) =>
    bcrypt.compare(reqPassword, foundUser.password, (err, response) => {
      if (err) {
        reject(err);
      } else if (response) {
        resolve(response);
      } else {
        reject(new Error("Verify your password"));
      }
    })
  );
};

module.exports = {
  signUp,
  signInUser,
  findUser,
};
