mutation createUser(
  $first_name: String
  $last_name: String
  $email: String
  $password: String
  $admin: Boolean
  $company: String
) {
  createUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password, admin: $admin, company: $company) {
    first_name
    last_name
    email
  }
}

{"first_name": "cara", "last_name": "dibdin", "email": "dibdin@gmail.com", "password": "1234", "admin": true, "company": "Logans restaurant"}


query($email: String, $password: String) {
  getUser(email: $email, password: $password) {
    first_name
    last_name
  } 
}
 