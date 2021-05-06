import React, { useState } from "react";
import styles from "./styles";
import DropDown from "../DropDown";
import AddButton from "../AddButton";
import { View, TextInput, Text } from "react-native";
import { useForm, Controller } from "react-hook-form";

export default function TipOutRow() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View>
      <Controller
        control={control}
        name="tipOutAmount"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <View style={styles.container}>
              <DropDown />
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
              <AddButton text={"+"} />
            </View>
          );
        }}
      />
      {errors.totalSales && <Text>Total Sales is Required!</Text>}
    </View>
  );
}
