/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

 import { StackNavigationProp } from '@react-navigation/stack';

 export type LoginScreenNavigationProp = StackNavigationProp<
   RootStackParamList,
   'Login'
 >;
 
 export type LoginProps = {
   navigation: LoginScreenNavigationProp;
 };

 export type WelcomeScreenNavigationProp = StackNavigationProp<
 RootStackParamList,
 'Welcome'
>;

export type WelcomeProps = {
 navigation: LoginScreenNavigationProp;
};

export type RootStackParamList = {
  Root: undefined;
  Login: undefined;
  NotFound: undefined;
  BottomTab: undefined;
  Welcome: undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  TabTwo: undefined;
  HomeScreen: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type HomeScreenParamList = {
  HomeScreen: undefined;
};