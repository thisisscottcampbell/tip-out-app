import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fae6ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginTop: 16,
    marginBottom: 16,
    marginLeft: 36,
    marginRight: 36
  },
  input: {
    // margin: 10,
    width: 230,
    height: 50,
    fontSize: 25,
    color: "#b800e6",
    backgroundColor: "white",
    textAlign: "center",
  },
  image: {
    width: 360,
    height: 120,
    marginBottom: 50,
    borderColor: '#fae6ff',
    borderWidth: 2,
    borderRadius: 100,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});

export default styles;
