import * as React from "react";
import styles from "./styles";
import { Text, TouchableOpacity } from "react-native";
import { isEmpty } from "lodash";

export default function StyledPrimaryButton(props: any) {
  return (
    <TouchableOpacity 
    style={styles.button} 
    // style={{...styles.button, backgroundColor: 
    //   isEmpty(props.error) ? '#b800e6': '#999999'}} 
    onPress={props.onPress}
    disabled={isEmpty(props.errors) ? false: true}
    >
      <Text style={styles.text}>{props.text}</Text>
    </TouchableOpacity>
  );
}