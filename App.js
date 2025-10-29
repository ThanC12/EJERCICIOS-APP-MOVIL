import React from 'react';
import { ScrollView, Text, Image, TextInput, StyleSheet, SafeAreaView } from 'react-native';
import yo from './assets/yo.jpg';

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Esta es mi imagen</Text>
        <Image source={yo} style={styles.image} />
        <TextInput style={styles.input} defaultValue="Jonathan Cordero" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 24,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  input: {
    width: 260,
    height: 44,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 12,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});
