import React from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styles from '../styles';

export default function Bienvenido({ navigation }) {
  const image = require("../assets/bgrndHome.png"); //IMAGEN DE FONDO
  return (
    <ImageBackground source={image} style={styles.background}> 
      <View style={styles.container}>
        <Text style={styles.title}>Bienvenido</Text>
      </View>
    </ImageBackground>
  );
}
