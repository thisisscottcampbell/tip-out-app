import * as React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { WelcomeProps } from "../../types";

export default function WelcomeScreen( {navigation}: WelcomeProps) {
  return (
    <View style={styles.container}>
      <Text>This is the Home Screen</Text>

      <StyledPrimaryButton text={"Login"} onPress={() => navigation.navigate('Login')} />

      <StyledPrimaryButton text={"Register"} />
    </View>
  );
}
