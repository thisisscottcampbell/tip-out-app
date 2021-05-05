import * as React from "react";
import styles from "./styles";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { LoginProps } from "../../types";

import {useSelector, useDispatch} from 'react-redux'
import {login} from '../../state/actions/actions'

import StyledPrimaryButton from "../../components/PrimaryButton";

export default function LoginScreen({ navigation }: LoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {loginData} = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  const fetchLogin = () => dispatch(login());
  React.useEffect(()=>{
    fetchLogin();
   }, [])

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
      {errors.firstName && <Text>Email is required!</Text>}

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
      {errors.lastName && <Text>Password is required!</Text>}

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
