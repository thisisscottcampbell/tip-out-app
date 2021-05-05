/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        screens: {
          WelcomeScreen: {
            screens: {},
          },
        },
      },
      Login: {
        screens: {
          LoginScreen: "Login",
        },
      },
      BottomTab: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "Home",
            },
          },
          TBD: {
            screens: {
              TBDScreen: "TBD",
            },
          },
          Payslip: {
            screens: {
              ShiftInfoScreen: "ShiftInfo",
              PayslipScreen: "PayslipScreen",
            },
          },
          History: {
            screens: {
              HistoryScreen: "History",
            },
          },
          Account: {
            screens: {
              AccountScreen: "Account",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
