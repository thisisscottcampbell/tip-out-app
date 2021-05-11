import { ApolloProvider } from "@apollo/client/react"
import React from "react";
import { client } from "./graphql/client"
import { Provider } from "react-redux";
import store from "./state/store"

import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <ApolloProvider client={client}>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        </ApolloProvider>
      </Provider>
    );
  }
}
