import {
  Text,
  View,
  ImageBackground,
  TextInput,
  Button,
  Alert,
} from "react-native";

import React, { useState } from "react";
import styles from "../styles";

export default function Form() {
  const image = require("../assets/bkgrndForm.png");

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const dividir = () => {
    if (num2 == 0) {
      Alert.alert("Error", "No existe divisón para 0");
    } else {
      const resultado = num1 / num2;
      Alert.alert("Resultado", `El resultado es: ${resultado}`);
    }
  };

  const limpiarCampos = () => {
    setNum1("");
    setNum2("");
  };

  return (
    <ImageBackground source={image} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Formulario</Text>
        <TextInput
          style={styles.input}
          onChangeText={setNum1}
          value={num1}
          placeholder="Ingrese el primer número"
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          onChangeText={setNum2}
          value={num2}
          placeholder="Ingrese el segundo número"
          keyboardType="numeric"
        />
        <View style={styles.buttonContainer}>
          <Button title="Dividir" onPress={dividir} />
          <Button title="Limpiar campos" onPress={limpiarCampos} />
        </View>
      </View>
    </ImageBackground>
  );
}
