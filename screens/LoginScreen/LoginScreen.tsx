import * as React from "react";
import styles from "./styles";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LoginProps } from "../../types";

import StyledPrimaryButton from "../../components/PrimaryButton";

export default function LoginScreen({ navigation }: LoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <View style={styles.container}>
      <Text>Please enter your Info</Text>

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="email"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="email"
        rules={{ required: true }}
      />
      {errors.email && <Text>Email is required!</Text>}

      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="password"
              placeholderTextColor="#f0b3ff"
            />
          );
        }}
        name="password"
        rules={{ required: true }}
      />
      {errors.password && <Text>Password is required!</Text>}

      <StyledPrimaryButton
        text={"Login"}
        onPress={handleSubmit((data) => {
          console.log(data); //send data to state manager
          navigation.navigate("BottomTab");
        })}
      />
    </View>
  );
}
