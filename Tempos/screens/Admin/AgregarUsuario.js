import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
  Alert,
} from "react-native";

export default function AgregarUsuarioScreen() {
  const [creditos, setCreditos] = useState(5);
  const [activo, setActivo] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>🕒 Tempos</Text>

      <Text style={styles.title}>
        Agregar Usuario
      </Text>

      <View style={styles.avatarContainer}>
        <View style={styles.avatar}>
          <Text style={styles.avatarIcon}>👤</Text>
        </View>

        <TouchableOpacity
          style={styles.cameraButton}
          onPress={() =>
            Alert.alert(
              "Foto",
              "Seleccionar fotografía"
            )
          }
        >
          <Text>📷</Text>
        </TouchableOpacity>

        <Text style={styles.subir}>
          Subir fotografía
        </Text>

        <Text style={styles.formato}>
          JPG o PNG de máx. 5MB
        </Text>
      </View>

      <Text style={styles.label}>
        Nombre completo
      </Text>

      <TextInput
        placeholder="Ej. Camila Morales"
        style={styles.input}
      />

      <Text style={styles.label}>
        Correo electrónico
      </Text>

      <TextInput
        placeholder="nombre@correo.com"
        style={styles.input}
      />

      <Text style={styles.label}>
        Teléfono / Celular
      </Text>

      <TextInput
        placeholder="+56 9 8765 4321"
        style={styles.input}
      />

      <Text style={styles.label}>
        Rol en el sistema
      </Text>

      <TouchableOpacity style={styles.input}>
        <Text>
          Miembro de comunidad (Prestador)
        </Text>
      </TouchableOpacity>

      <View style={styles.creditHeader}>
        <Text style={styles.label}>
          Créditos de bienvenida
        </Text>

        <Text style={styles.helpText}>
          1 crédito = 1 hora
        </Text>
      </View>

      <View style={styles.creditCard}>
        <Text>Horas iniciales</Text>

        <View style={styles.creditControls}>
          <TouchableOpacity
            style={styles.operator}
            onPress={() =>
              setCreditos(
                creditos > 0
                  ? creditos - 1
                  : 0
              )
            }
          >
            <Text style={styles.operatorText}>
              -
            </Text>
          </TouchableOpacity>

          <Text style={styles.creditNumber}>
            {creditos}
          </Text>

          <TouchableOpacity
            style={styles.operator}
            onPress={() =>
              setCreditos(creditos + 1)
            }
          >
            <Text style={styles.operatorText}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.statusCard}>
        <View>
          <Text style={styles.statusTitle}>
            Estado de cuenta
          </Text>

          <Text style={styles.statusText}>
            Habilitar intercambio de tiempo
            inmediato
          </Text>
        </View>

        <Switch
          value={activo}
          onValueChange={setActivo}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          Alert.alert(
            "Usuario creado",
            "El usuario se agregó correctamente"
          )
        }
      >
        <Text style={styles.buttonText}>
          Crear usuario
        </Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.cancel}>
          Cancelar
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    padding: 20,
  },

  logo: {
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 20,
    color: "#203551",
  },

  avatarContainer: {
    alignItems: "center",
    marginBottom: 25,
  },

  avatar: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: "#DDE7FA",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarIcon: {
    fontSize: 42,
  },

  cameraButton: {
    position: "absolute",
    top: 75,
    right: 125,
    backgroundColor: "#0D8DDF",
    width: 35,
    height: 35,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
  },

  subir: {
    color: "#0D8DDF",
    marginTop: 10,
    fontWeight: "bold",
  },

  formato: {
    color: "#7D8DA1",
    fontSize: 12,
  },

  label: {
    fontWeight: "600",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    backgroundColor: "#EEF3FB",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },

  creditHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  helpText: {
    color: "#F57C00",
    fontSize: 12,
  },

  creditCard: {
    backgroundColor: "#EEF3FB",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  creditControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },

  operator: {
    width: 35,
    height: 35,
    borderRadius: 8,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  operatorText: {
    fontSize: 22,
    fontWeight: "bold",
  },

  creditNumber: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#0D6EAF",
  },

  statusCard: {
    marginTop: 20,
    backgroundColor: "#EEF3FB",
    borderRadius: 15,
    padding: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  statusTitle: {
    fontWeight: "bold",
  },

  statusText: {
    fontSize: 12,
    color: "#666",
    width: 180,
  },

  button: {
    marginTop: 30,
    backgroundColor: "#0D8DDF",
    padding: 18,
    borderRadius: 30,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  cancel: {
    textAlign: "center",
    marginVertical: 20,
    color: "#0D8DDF",
    fontWeight: "600",
  },
});