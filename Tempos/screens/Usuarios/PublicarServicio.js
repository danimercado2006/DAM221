import React from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function PublicarServicioScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>🕒 Tempos</Text>

      <Text style={styles.title}>
        Publicar servicio
      </Text>

      <Text style={styles.subtitle}>
        Comparte un servicio que puedas ofrecer.
      </Text>

      <Text style={styles.label}>
        Título del servicio
      </Text>

      <TextInput
        style={styles.input}
        value="Clases de inglés"
      />

      <Text style={styles.label}>
        Categoría
      </Text>

      <TextInput
        style={styles.input}
        value="Idiomas"
      />

      <Text style={styles.label}>
        Descripción
      </Text>

      <TextInput
        style={styles.textArea}
        multiline
        value="Clases personalizadas de inglés enfocadas en conversación, gramática y preparación para exámenes."
      />

      <Text style={styles.label}>
        Créditos por hora
      </Text>

      <TextInput
        style={styles.input}
        value="2"
      />

      <Text style={styles.label}>
        Modalidad
      </Text>

      <TextInput
        style={styles.input}
        value="En línea"
      />

      <Text style={styles.label}>
        Disponibilidad
      </Text>

      <TextInput
        style={styles.input}
        value="Lunes, Miércoles y Viernes"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "Servicio",
            "Servicio publicado"
          )
        }
      >
        <Text style={styles.buttonText}>
          Publicar servicio
        </Text>
      </TouchableOpacity>

      <View style={styles.menu}>
        <Text>🏠 Inicio</Text>
        <Text>🔍 Buscar</Text>
        <Text>💰 Créditos</Text>
        <Text>👤 Perfil</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  logo: {
    marginTop: 50,
    textAlign: "center",
    fontWeight: "bold",
  },

  title: {
    marginTop: 25,
    fontSize: 34,
    fontWeight: "bold",
    color: "#0e3656",
  },

  subtitle: {
    color: "#8da0b5",
    marginBottom: 25,
  },

  label: {
    marginBottom: 8,
    marginTop: 10,
    fontWeight: "600",
    color: "#485467",
  },

  input: {
    height: 55,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#dde6ee",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },

  textArea: {
    height: 100,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#dde6ee",
    padding: 15,
    textAlignVertical: "top",
  },

  button: {
    backgroundColor: "#0d8ddf",
    padding: 17,
    borderRadius: 14,
    marginTop: 25,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 40,
    paddingVertical: 20,
  },
});