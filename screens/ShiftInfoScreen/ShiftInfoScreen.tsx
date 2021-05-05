import * as React from "react";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Alert } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { TipOutProps } from "../../types";

export default function ShiftInfoScreen({ navigation }: TipOutProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      <Text>Shift Info</Text>
      {/* Total Sales */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Total Sales"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="totalSales"
        rules={{ required: true }}
      />
      {errors.totalSales && <Text>Total Sales is Required!</Text>}

      {/* Tips */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Tips Received"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="tipsReceived"
        rules={{ required: true }}
      />
      {errors.tipsReceived && <Text>Tips Received is Required!</Text>}

      {/* Food */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Food Sales"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="foodSales"
        rules={{ required: true }}
      />
      {errors.foodSales && <Text>Food Sales are Required!</Text>}

      {/* Liquor */}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Liquor Sales"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="liquorSales"
        rules={{ required: true }}
      />
      {errors.liquorSales && <Text>Liquor Sales are Required!</Text>}

      <StyledPrimaryButton
        text={"Submit"}
        onPress={handleSubmit((data) => {
          console.log(data); //send data to state manager
          // Alert.alert("Data Submitted", `${JSON.stringify(data)}`)
          navigation.navigate("SlipScreen");
        })}
      />
    </View>
  );
}
