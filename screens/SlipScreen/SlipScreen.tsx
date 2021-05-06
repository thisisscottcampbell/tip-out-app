import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import DropDown from "../../components/DropDown";

export default function SlipScreen() {
  return (
    <View style={styles.container}>
      <Text>Slip</Text>
      <DropDown />
    </View>
  );
}
