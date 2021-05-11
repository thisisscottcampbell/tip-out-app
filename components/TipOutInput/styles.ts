import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fae6ff",
    borderWidth: 1,
    borderColor: "red",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    textAlign: "center",
  },
  input: {
    margin: 10,
    width: 85,
    height: 50,
    fontSize: 25,
    color: "#b800e6",
    backgroundColor: "white",
    textAlign: "center",
  },
  addButton: {
    margin: 10,
  },
});

export default styles;
