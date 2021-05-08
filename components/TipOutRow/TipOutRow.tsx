import React from "react";
import styles from "./styles";
import { View, TextInput, Text } from "react-native";


export default function TipOutRow({ slip }: any) {

  const employeeTo = slip.employeeTo

  return (
    <View style={{ flexDirection: "row" }}>
      <Text style={styles.text}>{employeeTo}</Text>
      <Text style={styles.text}>{`$${slip.amount}`}</Text>
    </View>
  );
}
