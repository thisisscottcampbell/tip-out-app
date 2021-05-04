import * as React from "react";
import styles from "./styles";
import { Text, View } from "react-native";
import { LoginProps } from "../../types";
import StyledPrimaryButton from "../../components/PrimaryButton";

export default function LoginScreen({navigation} : LoginProps) {
  return (
    <View style={styles.container}>
      <Text>Please enter your Info</Text>

    

      <StyledPrimaryButton text={"Submit"} onPress={() => navigation.navigate('BottomTab')}  />
    </View>
  );
}
