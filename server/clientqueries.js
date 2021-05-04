mutation signUpUser(
    $first_name: String
        $last_name: String
        $email: String
        $password: String
        $position: String
        $admin: Boolean
        $company: String
  ) {
    signUpUser(first_name: $first_name, last_name: $last_name, email: $email, password: $password, position: $position, admin: $admin, company: $company) {
      first_name
      last_name
      email
    }
  }

  {"first_name": "cara", "last_name": "dibdin", "email": "dibdin@gmail.com", "password": "1234", "position": "123", "admin": true, "company": "Logans restaurant"}

  query ($email: String, $password: String){
    getUser(email: $email, password: $password){
     first_name
     last_name
   }
   }
 