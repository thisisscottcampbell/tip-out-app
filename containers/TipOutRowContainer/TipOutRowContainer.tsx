import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../../components/DropDown";
import AddButton from "../../components/AddButton";
import TipOutRow from "../../components/TipOutRow";

import { View, TextInput, Text, ScrollView } from "react-native";

import slips from "../../Data/Slips";

export default function TipOutRowContainer() {
  return (
    <ScrollView style={{ height: 100 }}>
      <View style={{ alignItems: "center" }}>
        {slips.map((slip) => {
          return <TipOutRow key={slip.id} slip={slip} />;
        })}
      </View>
    </ScrollView>
  );
}
