import * as React from "react";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Alert } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";

export default function PayslipScreen() {
  return (
    <View style={styles.container}>
      <Text>PaySlip</Text>
    </View>
  );
}
