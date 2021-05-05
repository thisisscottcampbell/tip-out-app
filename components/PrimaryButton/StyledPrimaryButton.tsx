import * as React from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";

export default function StyledPrimaryButton(props: any) {
  return (
    <TouchableOpacity style={styles.button} onPress={props.onPress}>
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}
