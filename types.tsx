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

export type TipOutScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "TipOutScreen"
>;

export type TipOutProps = {
  navigation: TipOutScreenNavigationProp;
};

export type SlipScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "SlipScreen"
>;

export type SlipProps = {
  navigation: SlipScreenNavigationProp;
};

export type ReviewScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ReviewScreen"
>;

export type ReviewProps = {
  navigation: ReviewScreenNavigationProp;
};

export type ConfirmScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "ConfirmScreen"
>;

export type ConfirmProps = {
  navigation: ReviewScreenNavigationProp;
};

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  NotFound: undefined;
  BottomTab: undefined;
  Welcome: undefined;
  SlipScreen: undefined;
  TipOutScreen: undefined;
  ReviewScreen: undefined;
  ConfirmScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  TBD: undefined;
  TipOut: undefined;
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
export type TipOutParamList = {
  ShiftInfoScreen: undefined;
  SlipScreen: undefined;
  ReviewScreen: undefined;
  ConfirmScreen: undefined;
};
export type HistoryParamList = {
  HistoryScreen: undefined;
};
export type AccountParamList = {
  AccountScreen: undefined;
};
