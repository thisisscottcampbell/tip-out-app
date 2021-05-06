import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { ReviewProps } from "../../types";

export default function ReviewScreen({navigation}: ReviewProps) {
  return (
    <View style={styles.container}>
      <Text>Review</Text>
      <StyledPrimaryButton text={"Edit"} onPress={() => navigation.goBack()} />
      <StyledPrimaryButton text={"Submit"} onPress={() => navigation.navigate("ConfirmScreen")} />
    </View>
  );
}
