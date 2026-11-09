import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from "react-native";

export default function CrearCuentaScreen() {
  const [seleccionadas, setSeleccionadas] = useState([]);

  const categorias = [
    "Idiomas",
    "Programación",
    "Matemáticas",
    "Diseño",
    "Cocina",
    "Música",
    "Deportes",
    "Arte",
    "Salud",
  ];

  const toggleCategoria = (cat) => {
    if (seleccionadas.includes(cat)) {
      setSeleccionadas(seleccionadas.filter((c) => c !== cat));
    } else {
      setSeleccionadas([...seleccionadas, cat]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>🕒 Tempos</Text>

      <Text style={styles.title}>Crear cuenta</Text>

      <Text style={styles.subtitle}>
        Únete a la comunidad y comienza a intercambiar tu tiempo
      </Text>

      <TextInput
        placeholder="Nombre completo"
        style={styles.input}
      />

      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
      />

      <TextInput
        placeholder="Contraseña"
        secureTextEntry
        style={styles.input}
      />

      <TextInput
        placeholder="Confirmar contraseña"
        secureTextEntry
        style={styles.input}
      />

      <Text style={styles.label}>
        Selecciona al menos 3 categorías
      </Text>

      <View style={styles.tagsContainer}>
        {categorias.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.tag,
              seleccionadas.includes(cat) && styles.tagActive,
            ]}
            onPress={() => toggleCategoria(cat)}
          >
            <Text
              style={{
                color: seleccionadas.includes(cat)
                  ? "#fff"
                  : "#0088d1",
              }}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert("Correcto", "Cuenta creada")
        }
      >
        <Text style={styles.buttonText}>
          Crear cuenta
        </Text>
      </TouchableOpacity>

      <Text style={styles.login}>
        ¿Ya tienes cuenta?{" "}
        <Text style={{ color: "#0088d1" }}>
          Inicia sesión
        </Text>
      </Text>
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
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    fontSize: 18,
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 35,
  },

  subtitle: {
    textAlign: "center",
    color: "#7f8ea3",
    marginVertical: 15,
    lineHeight: 22,
  },

  input: {
    height: 55,
    borderWidth: 1,
    borderColor: "#dce4eb",
    borderRadius: 15,
    paddingHorizontal: 15,
    marginBottom: 12,
    backgroundColor: "#fafcff",
  },

  label: {
    marginTop: 15,
    marginBottom: 10,
    fontWeight: "600",
  },

  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  tag: {
    borderWidth: 1,
    borderColor: "#bde2ff",
    borderRadius: 12,
    paddingVertical: 10,
    width: "31%",
    alignItems: "center",
    marginBottom: 10,
  },

  tagActive: {
    backgroundColor: "#0d8ddf",
  },

  button: {
    marginTop: 20,
    padding: 18,
    borderRadius: 30,
    backgroundColor: "#0d8ddf",
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  login: {
    textAlign: "center",
    marginTop: 20,
    marginBottom: 30,
  },
});