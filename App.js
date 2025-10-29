import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  Pressable,
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

// Constante a interpolar
const INSTITUCION = 'Instituto Tecnológico Quito (ITQ)';

export default function App() {
  const [nombre1, setNombre1] = useState('');
  const [nombre2, setNombre2] = useState('');
  const [apellido1, setApellido1] = useState('');
  const [apellido2, setApellido2] = useState('');
  const [cedula, setCedula] = useState('');
  const [direccion, setDireccion] = useState('');

  const onEnviar = () => {
    // Validaciones simples
    if (!nombre1 || !apellido1 || !cedula) {
      Alert.alert('Campos obligatorios', 'Nombre1, Apellido1 y Cédula son obligatorios.');
      return;
    }
    if (!/^\d{10}$/.test(cedula)) {
      Alert.alert('Cédula inválida', 'La cédula debe tener 10 dígitos numéricos.');
      return;
    }

    Alert.alert(
      'Formulario enviado',
      `Estudiante: ${nombre1} ${nombre2} ${apellido1} ${apellido2}\nCédula: ${cedula}\nDirección: ${direccion}`
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({ ios: 'padding', android: undefined })}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        
        <Text style={styles.titulo}>
          Bienvenido/a al formulario del {INSTITUCION}
        </Text>

       
        <Image
          source={require('./assets/ITQ.jpeg')}
         
          style={styles.logo}
          resizeMode="contain"
        />

       
        <View style={styles.form}>
          <Text style={styles.label}>Primer Nombre *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Jonathan"
            value={nombre1}
            onChangeText={setNombre1}
          />

          <Text style={styles.label}>Segundo Nombre</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Ignacio"
            value={nombre2}
            onChangeText={setNombre2}
          />

          <Text style={styles.label}>Primer Apellido *</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Cordero"
            value={apellido1}
            onChangeText={setApellido1}
          />

          <Text style={styles.label}>Segundo Apellido</Text>
          <TextInput
            style={styles.input}
            placeholder="Ej: Bravo"
            value={apellido2}
            onChangeText={setApellido2}
          />

          <Text style={styles.label}>Cédula *</Text>
          <TextInput
            style={styles.input}
            placeholder="10 dígitos"
            value={cedula}
            onChangeText={(t) => setCedula(t.replace(/[^\d]/g, ''))}
            maxLength={10}
            keyboardType="number-pad"
          />

          <Text style={styles.label}>Dirección</Text>
          <TextInput
            style={[styles.input, { height: 80 }]}
            placeholder="Calle, número, sector…"
            value={direccion}
            onChangeText={setDireccion}
            multiline
          />

          <Pressable style={styles.boton} onPress={onEnviar}>
            <Text style={styles.botonTxt}>Enviar</Text>
          </Pressable>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 12,
  },
  logo: {
    width: '100%',
    height: 120,
    marginBottom: 16,
  },
  form: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 6,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 44,
    fontSize: 16,
    backgroundColor: '#fafafa',
  },
  boton: {
    marginTop: 16,
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  botonTxt: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
