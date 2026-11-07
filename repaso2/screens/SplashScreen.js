import { View, Text, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>📚</Text>

      <Text style={styles.title}>
        Registro de Libros
      </Text>

      <Text style={styles.subtitle}>
        Tu colección de lecturas favoritas
      </Text>

      <Text style={styles.loading}>
        Cargando...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#26364A',
  },
  subtitle: {
    fontSize: 14,
    color: '#777777',
    marginTop: 10,
  },
  loading: {
    fontSize: 13,
    color: '#888888',
    marginTop: 35,
  },
});