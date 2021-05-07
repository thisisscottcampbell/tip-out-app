import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { ConfirmProps } from "../../types";

export default function ConfirmScreen({navigation}: ConfirmProps) {
  return (
    <View style={styles.container}>
      <Text>Confirm</Text>
      <StyledPrimaryButton text={"Return Home"} onPress={() => console.log("Returned Home")} />
    </View>
  );
}
