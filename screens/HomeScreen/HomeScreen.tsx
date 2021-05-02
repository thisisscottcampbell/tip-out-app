import * as React from "react";
import styles from "./styles";
import { Text, View } from "react-native";

import StyledPrimaryButton from "../../components/PrimaryButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>

      <StyledPrimaryButton text={"Login"} />

      <StyledPrimaryButton text={"Register"} />
    </View>
  );
}
