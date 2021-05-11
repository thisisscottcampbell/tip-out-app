import React, { useRef } from "react";
import styles from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Text, View, TextInput, Alert } from "react-native";
import StyledPrimaryButton from "../../components/PrimaryButton";
import { TipOutProps } from "../../types";
import { useDispatch } from "react-redux";
import { setShiftData } from "../../state/actions"

export default function ShiftInfoScreen({ navigation }: TipOutProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const tipsReceivedRef = useRef(null);
  const foodSalesRef = useRef(null);
  const liquorSalesRef = useRef(null);

  const dispatch = useDispatch()

  return (
    <View style={styles.container}>
      <Text>Shift Info</Text>
      {/* Total Sales */}
      <Controller
        control={control}
        name="totalSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Total Sales"
              placeholderTextColor="#f0b3ff"
              autoFocus={true}
              returnKeyType={"next"}
              blurOnSubmit={false}
              onSubmitEditing={() => tipsReceivedRef.current.focus()}
            />
          );
        }}
      />
      {errors.totalSales && <Text>Total Sales is Required!</Text>}

      {/* Tips */}
      <Controller
        control={control}
        name="tipsReceived"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Tips Received"
              placeholderTextColor="#f0b3ff"
              ref={tipsReceivedRef}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => foodSalesRef.current.focus()}
            />
          );
        }}
      />
      {errors.tipsReceived && <Text>Tips Received is Required!</Text>}

      {/* Food */}
      <Controller
        control={control}
        name="foodSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Food Sales"
              placeholderTextColor="#f0b3ff"
              ref={foodSalesRef}
              blurOnSubmit={false}
              returnKeyType={"next"}
              onSubmitEditing={() => liquorSalesRef.current.focus()}
            />
          );
        }}
      />
      {errors.foodSales && <Text>Food Sales are Required!</Text>}

      {/* Liquor */}
      <Controller
        control={control}
        name="liquorSales"
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="Liquor Sales"
              placeholderTextColor="#f0b3ff"
              ref={liquorSalesRef}
            />
          );
        }}
      />
      {errors.liquorSales && <Text>Liquor Sales are Required!</Text>}

      <StyledPrimaryButton
        text={"Submit"}
        onPress={handleSubmit((data) => {
          console.log(data); //send data to state manager
          // Alert.alert("Data Submitted", `${JSON.stringify(data)}`)
          dispatch(setShiftData(data))
          navigation.navigate("SlipScreen");
        })}
      />
    </View>
  );
}
