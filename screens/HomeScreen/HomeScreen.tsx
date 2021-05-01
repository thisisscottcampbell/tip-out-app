import * as React from 'react';
//import styles from './styles'
import { Text, TouchableOpacity, View, Button } from 'react-native';


export default function HomeScreen() {
    return (
       <View >
        <Text>This is the Home Screen</Text>
        {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
        <Button
            onPress = {() => {}}
            title="Sign In"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
  
  