import React from "react";
import { Text, View, TextInput, Image } from "react-native";

import { LoginProps } from "../../types";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { RootState } from "../../state/store"
import {useSelector, useDispatch} from 'react-redux'
import {setEmail, setPassword} from '../../state/actions/actions'

import styles from "./styles";
import StyledPrimaryButton from "../../components/PrimaryButton";

const schema = yup.object().shape ({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, ({ min }) => `Password must be at least ${min} characters`)
    .required('Password is required'),
})

export default function LoginScreen({ navigation }: LoginProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      'email': '',
      'password': ''
    },
    reValidateMode: "onSubmit"
  });

  // console.log(errors)
  // const nameWatch = watch('password')
  // console.log(nameWatch)

  // const {email, password} = useSelector((state: RootState) => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../assets/images/tipout.png')}
      />
      {/* <Text>Please enter your Info</Text> */}

      <Controller
        control={control}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              placeholder="email"
              placeholderTextColor="#f0b3ff"
            />
        )}
      />
      <Text style={styles.error}>{errors.email?.message}</Text>

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              placeholder="password"
              placeholderTextColor="#f0b3ff"
            />
        )}
      />
      <Text style={styles.error}>{errors.password?.message}</Text>

      {/* aka <TouchableOpacity> */}
      <StyledPrimaryButton
        errors={errors}
        text={"Login"}
        onPress={handleSubmit((data) => {
          //store data in redux store / call login API
          //then navigate to the next screen
          dispatch(setEmail(data.email))
          dispatch(setPassword(data.password))
          console.log("SUBMITTED", data)
          reset();
        })}
      />
    </View>
  );
}
