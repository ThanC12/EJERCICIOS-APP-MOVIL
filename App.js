import React, { useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function App() {
  const [message, setMessage] = useState("Seleccionar Imagen");

  const onPressButton = () => {
    setMessage("¡Botón presionado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo!!</Text>

      <Image
        source={{ uri: "https://picsum.photos/200/200" }}
        style={styles.image}
      />

      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <Text style={{ color: "#fff", fontWeight: "bold" }}>{message}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#292929",
  },
  title: { fontSize: 30, color: "#fff" },
  image: { height: 200, width: 200, borderRadius: 100, marginVertical: 16 },
  button: {
    backgroundColor: "blue",
    padding: 7,
    borderRadius: 8,
  },
});
