import * as React from "react";
import styles from "./styles";
// import { useForm, Controller } from "react-hook-form";
import { Text, View } from "react-native";
import TipOutInput from "../../components/TipOutInput";
import TipOutRow from "../../components/TipOutRow";
import DropDown from "../../components/DropDown";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { SlipProps } from "../../types";

import slips from "../../Data/Slips";

export default function SlipScreen({ navigation }: SlipProps) {
  //containerize slips
  return (
    <View style={styles.container}>
      <Text>Slip</Text>
      <TipOutInput />
      {/* {slips.map((slip) => (
        <TipOutRow slip={slip} />
      ))} */}
      <TipOutRow slip={slips[0]} />
      <StyledPrimaryButton
        text={"Submit"}
        onPress={() => navigation.navigate("ReviewScreen")}
      />
    </View>
  );
}
