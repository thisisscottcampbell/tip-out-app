const db = require("../data/db.js");
const { findUser } = require("./userscontrollers");

//add slip - slip is added and the transaction between two users is given an ID that is referenced in each slip
const addSlip = (userEmail, recipName, slip) => {
  return findUser(userEmail)
    .then((foundUser) => {
      //whatever we need from user
    })
    .then(()=>findUser(recipName) //this searches by email not name!
    .then((foundUser) => {
      //whatever we need about recipient
    })
    .then(() => {
      return db
        .raw(
          "INSERT INTO slip (date, transaction, amount) VALUES (?, ?, ?) RETURNING *",
          [slip.date, slip.transaction, slip.amount]
        )
        .then((data) => data.rows[0]);
    });
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

const signInUser = (userRequest) => {
  //userRequest is an object with both the email and password
  let user;
  return db
    .raw("SELECT * FROM users WHERE email = ?", [userRequest.email])
    .then((data) => {
      return data.rows[0];
    })
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

module.exports = {
  addSlip,
};
