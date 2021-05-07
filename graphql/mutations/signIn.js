import gql from "graphql-tag";

export default gql`
  query($email: String, $password: String) {
    getUser(email: $email, password: $password) {
      first_name
      last_name
    }
  }
`;
