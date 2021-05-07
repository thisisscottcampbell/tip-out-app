import * as React from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";

export default function AddButton(props) {
  return (
    <TouchableOpacity
      style={{ ...styles.button, ...props.style }}
      onPress={props.onPress}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
