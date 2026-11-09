import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Switch,
  Alert,
} from "react-native";

export default function AdminCategoriasScreen() {
  const [ingles, setIngles] = useState(true);
  const [programacion, setProgramacion] = useState(true);
  const [canva, setCanva] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.logo}>🕒 Tempos</Text>

      <Text style={styles.title}>
        Categorías y servicios
      </Text>

      <Text style={styles.subtitle}>
        Gestiona categorías y servicios del sistema
      </Text>

      {/* TABS */}

      <View style={styles.tabs}>
        <View style={styles.activeTab}>
          <Text style={styles.activeText}>
            Categorías
          </Text>
        </View>

        <View style={styles.tab}>
          <Text>Servicios</Text>
        </View>
      </View>

      {/* CATEGORIAS */}

      <View style={styles.rowTitle}>
        <Text style={styles.sectionTitle}>
          Gestión de categorías
        </Text>

        <TouchableOpacity
          style={styles.blueButton}
          onPress={() =>
            Alert.alert(
              "Categoría",
              "Nueva categoría agregada"
            )
          }
        >
          <Text style={styles.blueButtonText}>
            + Nueva categoría
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Buscar categoría..."
      />

      <View style={styles.card}>
        <Categoria nombre="Idiomas" servicios="12 servicios" />
        <Categoria nombre="Programación" servicios="18 servicios" />
        <Categoria nombre="Diseño" servicios="10 servicios" />
        <Categoria nombre="Matemáticas" servicios="8 servicios" />
        <Categoria nombre="Fotografía" servicios="6 servicios" />
        <Categoria nombre="Música" servicios="5 servicios" />
      </View>

      {/* SERVICIOS */}

      <View style={styles.rowTitle}>
        <Text style={styles.sectionTitle}>
          Servicios
        </Text>

        <TouchableOpacity
          style={styles.blueButton}
          onPress={() =>
            Alert.alert(
              "Servicio",
              "Nuevo servicio agregado"
            )
          }
        >
          <Text style={styles.blueButtonText}>
            + Nuevo servicio
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.search}
        placeholder="Buscar servicio..."
      />

      <Servicio
        titulo="Conversación en inglés"
        categoria="Idiomas"
        activo={ingles}
        setActivo={setIngles}
      />

      <Servicio
        titulo="Apoyo en programación"
        categoria="Programación"
        activo={programacion}
        setActivo={setProgramacion}
      />

      <Servicio
        titulo="Diseño en Canva"
        categoria="Diseño"
        activo={canva}
        setActivo={setCanva}
      />

      {/* MENU */}

      <View style={styles.menu}>
        <Text>🏠 Dashboard</Text>
        <Text>👤 Usuarios</Text>
        <Text style={{ color: "#0d8ddf" }}>
          📂 Categorías
        </Text>
        <Text>🔄 Intercambios</Text>
        <Text>📊 Reportes</Text>
      </View>
    </ScrollView>
  );
}

function Categoria({ nombre, servicios }) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.itemTitle}>
          {nombre}
        </Text>

        <Text style={styles.itemSub}>
          {servicios}
        </Text>
      </View>

      <View style={styles.icons}>
        <Text>✏️</Text>
        <Text>🗑️</Text>
      </View>
    </View>
  );
}

function Servicio({
  titulo,
  categoria,
  activo,
  setActivo,
}) {
  return (
    <View style={styles.service}>
      <View>
        <Text style={styles.itemTitle}>
          {titulo}
        </Text>

        <Text style={styles.itemSub}>
          {categoria}
        </Text>

        <Text style={styles.creditos}>
          2 créditos/hora
        </Text>
      </View>

      <View style={styles.serviceActions}>
        <Switch
          value={activo}
          onValueChange={setActivo}
        />

        <Text>✏️</Text>

        <Text>🗑️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: "#F6F8FB",
  },

  logo: {
    textAlign: "center",
    marginTop: 50,
    fontWeight: "bold",
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#0d4770",
  },

  subtitle: {
    color: "#8596a8",
    marginBottom: 20,
  },

  tabs: {
    flexDirection: "row",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 5,
  },

  activeTab: {
    flex: 1,
    backgroundColor: "#0d8ddf",
    padding: 12,
    borderRadius: 12,
  },

  activeText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },

  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  rowTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },

  blueButton: {
    backgroundColor: "#0d8ddf",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
  },

  blueButtonText: {
    color: "white",
    fontSize: 12,
  },

  search: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  card: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  itemTitle: {
    fontWeight: "bold",
  },

  itemSub: {
    color: "#888",
    fontSize: 12,
  },

  icons: {
    flexDirection: "row",
    gap: 10,
  },

  service: {
    backgroundColor: "white",
    borderRadius: 18,
    padding: 15,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  serviceActions: {
    alignItems: "center",
    gap: 5,
  },

  creditos: {
    color: "#0d8ddf",
    fontWeight: "bold",
    fontSize: 12,
  },

  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    backgroundColor: "white",
    padding: 15,
    borderRadius: 20,
    marginBottom: 25,
  },
});