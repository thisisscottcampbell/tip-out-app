import {gql} from "@apollo/client";

export default gql`
  query GetUser($email: String, $password: String) {
    getUser(email: $email, password: $password) {
      first_name
      last_name
    }
  }
`;
