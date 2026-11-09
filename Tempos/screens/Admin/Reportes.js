import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';

export default function ReportesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>⏱ Tempos</Text>
        </View>
        <View style={styles.avatarPlaceholder} />
      </View>

      <Text style={styles.title}>Reportes y gráficas</Text>
      <Text style={styles.subtitle}>Genera reportes y visualiza estadísticas</Text>

      {/* Selector de pestañas superior */}
      <View style={styles.tabContainer}>
        <TouchableOpacity style={[styles.tabButton, styles.tabActive]}>
          <Text style={styles.tabTextActive}>Generar reportes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabButton}>
          <Text style={styles.tabText}>Estadísticas</Text>
        </TouchableOpacity>
      </View>

      {/* Tarjeta: Generar reporte */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Generar reporte</Text>
        
        <Text style={styles.label}>Tipo de reporte</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectPlaceholder}>Selecciona una opción</Text>
          <Text style={styles.arrow}>▼</Text>
        </View>

        <Text style={styles.label}>Periodo</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>Octubre 2026</Text>
          <Text style={styles.arrow}>▼</Text>
        </View>

        <Text style={styles.label}>Formato</Text>
        <View style={styles.selectBox}>
          <Text style={styles.selectText}>PDF</Text>
          <Text style={styles.arrow}>▼</Text>
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Generar reporte</Text>
        </TouchableOpacity>
      </View>

      {/* Sección: Estadísticas del sistema */}
      <View style={styles.sectionHeaderRow}>
        <Text style={styles.sectionTitle}>Estadísticas del sistema</Text>
        <View style={styles.periodBadge}>
          <Text style={styles.periodBadgeText}>Periodo: Octubre 2026 ▼</Text>
        </View>
      </View>

      {/* Grid de estadísticas (2x2) */}
      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Usuarios registrados</Text>
          <Text style={styles.statValue}>120</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Servicios publicados</Text>
          <Text style={styles.statValue}>85</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Intercambios realizados</Text>
          <Text style={styles.statValue}>240</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statLabel}>Créditos generados</Text>
          <Text style={[styles.statValue, { color: '#00B67A' }]}>480</Text>
        </View>
      </View>

      {/* Gráfica simulada */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Intercambios por mes</Text>
        <View style={styles.chartContainer}>
          <View style={styles.chartAxis}>
            <Text style={styles.axisText}>30</Text>
            <Text style={styles.axisText}>20</Text>
            <Text style={styles.axisText}>10</Text>
            <Text style={styles.axisText}>0</Text>
          </View>
          <View style={styles.chartMonths}>
            <Text style={styles.monthText}>Ene</Text>
            <Text style={styles.monthText}>Feb</Text>
            <Text style={styles.monthText}>Mar</Text>
            <Text style={styles.monthText}>Abr</Text>
            <Text style={styles.monthText}>May</Text>
            <Text style={styles.monthText}>Jun</Text>
          </View>
        </View>
      </View>

      {/* Bottom Navigation Simulado */}
      <View style={styles.bottomNav}>
        <Text style={styles.navItem}>Dashboard</Text>
        <Text style={styles.navItem}>Usuarios</Text>
        <Text style={styles.navItem}>Cat. y servicios</Text>
        <Text style={styles.navItem}>Intercambios</Text>
        <Text style={[styles.navItem, styles.navActive]}>Reportes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  contentContainer: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logoText: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  avatarPlaceholder: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#0055A5' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 13, color: '#64748B', marginBottom: 15 },
  tabContainer: { flexDirection: 'row', backgroundColor: '#E2E8F0', borderRadius: 25, padding: 4, marginBottom: 20 },
  tabButton: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 20 },
  tabActive: { backgroundColor: '#FFFFFF', shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 2, elevation: 2 },
  tabText: { fontSize: 13, color: '#64748B', fontWeight: '550' },
  tabTextActive: { fontSize: 13, color: '#007AFF', fontWeight: 'bold' },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 20, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 6, elevation: 2 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B', marginBottom: 12 },
  label: { fontSize: 12, color: '#64748B', marginBottom: 6, marginTop: 10 },
  selectBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, backgroundColor: '#F8FAFC' },
  selectPlaceholder: { color: '#94A3B8', fontSize: 14 },
  selectText: { color: '#1E293B', fontSize: 14 },
  arrow: { fontSize: 10, color: '#64748B' },
  primaryButton: { backgroundColor: '#007AFF', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  primaryButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  periodBadge: { backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  periodBadgeText: { fontSize: 11, color: '#475569' },
  statsGrid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 10 },
  statCard: { width: '48%', backgroundColor: '#FFFFFF', borderRadius: 14, padding: 14, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.02, shadowRadius: 4, elevation: 1 },
  statLabel: { fontSize: 11, color: '#64748B', marginBottom: 8 },
  statValue: { fontSize: 22, fontWeight: 'bold', color: '#1E293B' },
  chartContainer: { height: 120, borderBottomWidth: 1, borderLeftWidth: 1, borderColor: '#E2E8F0', justifyContent: 'flex-end', paddingBottom: 5 },
  chartAxis: { position: 'absolute', left: -22, top: 0, bottom: 0, justifyContent: 'space-between' },
  axisText: { fontSize: 9, color: '#94A3B8' },
  chartMonths: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 8 },
  monthText: { fontSize: 10, color: '#94A3B8' },
  bottomNav: { flexDirection: 'row', justifyContent: 'space-around', borderTopWidth: 1, borderTopColor: '#E2E8F0', paddingTop: 12, marginTop: 10 },
  navItem: { fontSize: 10, color: '#94A3B8' },
  navActive: { color: '#007AFF', fontWeight: 'bold' }
});