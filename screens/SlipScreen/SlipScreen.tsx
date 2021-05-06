import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import TipOutRow from "../../components/TipOutRow";
import DropDown from "../../components/DropDown";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { SlipProps } from "../../types";

export default function SlipScreen({ navigation }: SlipProps) {
  return (
    <View style={styles.container}>
      <Text>Slip</Text>
      <TipOutRow />
      <StyledPrimaryButton
        text={"Submit"}
        onPress={() => navigation.navigate("ReviewScreen")}
      />
    </View>
  );
}
