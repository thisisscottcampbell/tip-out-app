import * as React from 'react';
//import styles from './styles'
import { Text, TouchableOpacity, View } from 'react-native';

type ButtonProps = {
    lightColor?: string;
    darkColor?: string;
  };

export default function StyledButton(props: any) {
    return (
        <View>
        <TouchableOpacity onPress= {()=> {}}>
            <Text>{props.text}</Text>
        </TouchableOpacity>
        </View>
    );
  }





