/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { StackNavigationProp } from "@react-navigation/stack";

export type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Login"
>;

export type LoginProps = {
  navigation: LoginScreenNavigationProp;
};

export type WelcomeScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Welcome"
>;

export type WelcomeProps = {
  navigation: LoginScreenNavigationProp;
};

export type PayslipScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "PayslipScreen"
>;

export type PayslipProps = {
  navigation: PayslipScreenNavigationProp;
};


export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  NotFound: undefined;
  BottomTab: undefined;
  Welcome: undefined;
  PayslipScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TBD: undefined;
  Payslip: undefined;
  History: undefined;
  Account: undefined;
  ShiftInfo: undefined;
};


export type HomeParamList = {
  HomeScreen: undefined;
};
export type TBDParamList = {
  TBDScreen: undefined;
};
export type PayslipParamList = {
  ShiftInfoScreen: undefined;
  PayslipScreen: undefined;
};
export type HistoryParamList = {
  HistoryScreen: undefined;
};
export type AccountParamList = {
  AccountScreen: undefined;
};

