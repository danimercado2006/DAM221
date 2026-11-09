import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Switch,
  Alert,
} from "react-native";

export default function PerfilScreen() {
  const [servicio1, setServicio1] = useState(true);
  const [servicio2, setServicio2] = useState(true);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>🕒 Tempos</Text>

      <Text style={styles.title}>Mi perfil</Text>

      <Text style={styles.subtitle}>
        Administra tu información y servicios
      </Text>

      {/* INFORMACIÓN */}

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>👤 Mi información</Text>

          <TouchableOpacity
            style={styles.btnEdit}
            onPress={() =>
              Alert.alert("Editar", "Datos actualizados")
            }
          >
            <Text style={styles.btnEditText}>
              Editar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.profileRow}>
          <View style={styles.avatar}>
            <Text style={{ fontSize: 30 }}>👤</Text>
          </View>

          <View>
            <Text style={styles.name}>
              Daniela Ramírez Mercado
            </Text>

            <Text>📧 daniela@email.com</Text>

            <Text>📱 442 123 4567</Text>

            <Text>📍 Querétaro, Qro.</Text>
          </View>
        </View>

        <Text style={styles.sectionLabel}>
          BIOGRAFÍA
        </Text>

        <View style={styles.bio}>
          <Text>
            Estudiante de TI. Me gusta aprender y
            compartir conocimientos.
          </Text>
        </View>
      </View>

      {/* HABILIDADES */}

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>
            🎓 Mis habilidades
          </Text>

          <TouchableOpacity
            style={styles.btnBlue}
          >
            <Text style={styles.btnBlueText}>
              + Agregar
            </Text>
          </TouchableOpacity>
        </View>

        <Skill
          nombre="Inglés"
          porcentaje="80%"
          width="80%"
        />

        <Skill
          nombre="Programación"
          porcentaje="70%"
          width="70%"
        />

        <Skill
          nombre="Diseño"
          porcentaje="60%"
          width="60%"
        />
      </View>

      {/* SERVICIOS */}

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>
            💼 Mis servicios
          </Text>

          <TouchableOpacity
            style={styles.btnBlue}
          >
            <Text style={styles.btnBlueText}>
              + Publicar
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.service}>
          <View>
            <Text style={styles.serviceTitle}>
              Apoyo en programación
            </Text>

            <Text>Programación</Text>

            <Text>2 créditos/hora</Text>
          </View>

          <Switch
            value={servicio1}
            onValueChange={setServicio1}
          />
        </View>

        <View style={styles.service}>
          <View>
            <Text style={styles.serviceTitle}>
              Diseño en Canva
            </Text>

            <Text>Diseño</Text>

            <Text>2 créditos/hora</Text>
          </View>

          <Switch
            value={servicio2}
            onValueChange={setServicio2}
          />
        </View>
      </View>

      {/* FAVORITOS */}

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>
            ❤️ Favoritos
          </Text>

          <Text style={styles.verTodos}>
            Ver todos
          </Text>
        </View>

        <View style={styles.miniCard}>
          <Text style={styles.serviceTitle}>
            Conversación Inglés
          </Text>

          <Text>2 créditos/hora</Text>

          <Text>⭐ 4.8</Text>
        </View>

        <View style={styles.miniCard}>
          <Text style={styles.serviceTitle}>
            Diseño en Canva
          </Text>

          <Text>2 créditos/hora</Text>

          <Text>⭐ 4.6</Text>
        </View>
      </View>

      {/* RECIENTES */}

      <View style={styles.card}>
        <View style={styles.rowBetween}>
          <Text style={styles.cardTitle}>
            🔄 Recientes
          </Text>

          <Text style={styles.verTodos}>
            Ver todos
          </Text>
        </View>

        <View style={styles.miniCard}>
          <Text style={styles.serviceTitle}>
            Clases de mate
          </Text>

          <Text>⭐ 4.6</Text>
        </View>

        <View style={styles.miniCard}>
          <Text style={styles.serviceTitle}>
            Edición de foto
          </Text>

          <Text>⭐ 4.7</Text>
        </View>
      </View>

      {/* MENU */}

      <View style={styles.nav}>
        <Text>🏠 Inicio</Text>
        <Text>🔍 Buscar</Text>
        <Text>💰 Créditos</Text>
        <Text style={{ color: "#0d8ddf" }}>
          👤 Perfil
        </Text>
      </View>
    </ScrollView>
  );
}

function Skill({ nombre, porcentaje, width }) {
  return (
    <View style={styles.skillRow}>
      <Text>{nombre}</Text>

      <View style={styles.bar}>
        <View
          style={[
            styles.fill,
            { width: width },
          ]}
        />
      </View>

      <Text>{porcentaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    padding: 15,
  },

  logo: {
    textAlign: "center",
    marginTop: 40,
    fontWeight: "bold",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#163B63",
    marginTop: 20,
  },

  subtitle: {
    color: "#90A0B3",
    marginBottom: 15,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 15,
    marginBottom: 15,
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btnEdit: {
    borderWidth: 1,
    borderColor: "#0d8ddf",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },

  btnEditText: {
    color: "#0d8ddf",
  },

  profileRow: {
    flexDirection: "row",
    marginTop: 15,
    gap: 15,
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#dfe9f4",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontWeight: "bold",
  },

  sectionLabel: {
    marginTop: 15,
    fontSize: 12,
    color: "#8da0b5",
  },

  bio: {
    backgroundColor: "#f4f6f8",
    padding: 12,
    borderRadius: 12,
    marginTop: 5,
  },

  btnBlue: {
    backgroundColor: "#0d8ddf",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },

  btnBlueText: {
    color: "white",
    fontSize: 12,
  },

  skillRow: {
    marginTop: 15,
  },

  bar: {
    height: 8,
    backgroundColor: "#e6eaf0",
    borderRadius: 20,
    marginVertical: 5,
  },

  fill: {
    height: 8,
    backgroundColor: "#22b8e6",
    borderRadius: 20,
  },

  service: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },

  serviceTitle: {
    fontWeight: "bold",
  },

  miniCard: {
    backgroundColor: "#f8fafc",
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },

  verTodos: {
    color: "#0d8ddf",
  },

  nav: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
});