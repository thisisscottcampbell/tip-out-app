import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../DropDown";
import AddButton from "../AddButton";
import { View, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

import TipOutRowContainer from "../../containers/TipOutRowContainer";

export default function TipOutInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={{ borderColor: "red", borderWidth: 2 }}>
      <Controller
        control={control}
        name="tipOutAmount"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View
              style={{
                borderColor: "green",
                borderWidth: 2,
              }}
            >
              <DropDown />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  borderColor: "blue",
                  borderWidth: 2,
                }}
              >
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                  placeholder="$$$"
                  placeholderTextColor="#f0b3ff"
                  // autoFocus={true}
                  // returnKeyType={"next"}
                  // blurOnSubmit={false}
                  // onSubmitEditing={() => tipsReceivedRef.current.focus()}
                />
                <AddButton style={styles.addButton} text={"+"} />
              </View>
            </View>
          );
        }}
      />
      {errors.totalSales && <Text>Total Sales is Required!</Text>}

      <TipOutRowContainer />
    </View>
  );
}
