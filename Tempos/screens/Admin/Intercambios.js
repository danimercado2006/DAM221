import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
  Platform,
  StatusBar,
} from 'react-native';

const AdminIntercambiosScreen = ({ onTabPress, onNavigateProfile }) => {
  // Estado para la pestaña superior (Movimientos vs Reportes de servicios)
  const [activeSegment, setActiveSegment] = useState('movimientos');
  
  // Estado para el buscador
  const [searchQuery, setSearchQuery] = useState('');

  // Estado para la página activa del paginador
  const [currentPage, setCurrentPage] = useState(1);

  // Datos reales de la tabla de movimientos (Figma Tempos)
  const exchangeRecords = [
    { id: '1', user: 'Ana Torres', service: 'Inglés', date: '14/10/2026', credits: '2' },
    { id: '2', user: 'Carlos Ruiz', service: 'Matemáticas', date: '14/10/2026', credits: '1' },
    { id: '3', user: 'María López', service: 'Diseño', date: '13/10/2026', credits: '2' },
    { id: '4', user: 'Luis García', service: 'Programación', date: '13/10/2026', credits: '3' },
    { id: '5', user: 'Sofía Martínez', service: 'Canva', date: '12/10/2026', credits: '2' },
    { id: '6', user: 'Daniel Pérez', service: 'Fotografía', date: '12/10/2026', credits: '1' },
    { id: '7', user: 'Valeria Ramos', service: 'Inglés', date: '11/10/2026', credits: '2' },
    { id: '8', user: 'José Torres', service: 'Matemáticas', date: '11/10/2026', credits: '1' },
    { id: '9', user: 'Ana Torres', service: 'Programación', date: '10/10/2026', credits: '2' },
    { id: '10', user: 'Carlos Ruiz', service: 'Diseño', date: '10/10/2026', credits: '2' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Configuración de barra de estado para Android y iOS */}
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. CABECERA: Logotipo centrado y perfil de administrador */}
        <View style={styles.header}>
          <View style={styles.headerSpacer} />

          <Image
            source={require('../../assets/tempos_header_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />

          <TouchableOpacity
            style={styles.adminAvatarButton}
            onPress={onNavigateProfile}
            activeOpacity={0.8}
          >
            <Text style={styles.adminAvatarIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* 2. TÍTULO PRINCIPAL */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Intercambios</Text>
        </View>

        {/* 3. SELECTOR DE PESTAÑAS (Segmented Control) */}
        <View style={styles.segmentedContainer}>
          <TouchableOpacity
            style={[
              styles.segmentTab,
              activeSegment === 'movimientos' && styles.segmentTabActive,
            ]}
            onPress={() => setActiveSegment('movimientos')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.segmentText,
                activeSegment === 'movimientos' && styles.segmentTextActive,
              ]}
            >
              Movimientos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.segmentTab,
              activeSegment === 'reportes' && styles.segmentTabActive,
            ]}
            onPress={() => setActiveSegment('reportes')}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.segmentText,
                activeSegment === 'reportes' && styles.segmentTextActive,
              ]}
            >
              Reportes de servicios
            </Text>
          </TouchableOpacity>
        </View>

        {/* 4. BARRA DE BÚSQUEDA Y BOTÓN DE FILTRO */}
        <View style={styles.searchRow}>
          <View style={styles.searchInputContainer}>
            <Text style={styles.searchIcon}>🔍</Text>
            <TextInput
              style={styles.searchInput}
              placeholder="Buscar movimiento..."
              placeholderTextColor="#94A3B8"
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>

          <TouchableOpacity style={styles.filterButton} activeOpacity={0.8}>
            <Text style={styles.filterIcon}>▼</Text>
          </TouchableOpacity>
        </View>

        {/* 5. TARJETA PRINCIPAL: TABLA DE DATOS */}
        <View style={styles.tableCard}>
          {/* Encabezados de la tabla con Flexbox */}
          <View style={styles.tableHeaderRow}>
            <Text style={[styles.columnHeader, styles.colId]}>ID</Text>
            <Text style={[styles.columnHeader, styles.colUser]}>Usuario</Text>
            <Text style={[styles.columnHeader, styles.colService]}>Servicio</Text>
            <Text style={[styles.columnHeader, styles.colDate]}>Fecha</Text>
            <Text style={[styles.columnHeader, styles.colCredits]}>Créditos</Text>
          </View>

          {/* Filas de la tabla */}
          {exchangeRecords.map((item, index) => (
            <View
              key={item.id}
              style={[
                styles.tableRow,
                index === exchangeRecords.length - 1 && styles.tableRowLast,
              ]}
            >
              <Text style={[styles.cellText, styles.colId, styles.cellId]}>
                {item.id}
              </Text>
              <Text
                style={[styles.cellText, styles.colUser, styles.cellUser]}
                numberOfLines={1}
              >
                {item.user}
              </Text>
              <Text
                style={[styles.cellText, styles.colService, styles.cellService]}
                numberOfLines={1}
              >
                {item.service}
              </Text>
              <Text style={[styles.cellText, styles.colDate, styles.cellDate]}>
                {item.date}
              </Text>
              <Text style={[styles.cellText, styles.colCredits, styles.cellCredits]}>
                {item.credits}
              </Text>
            </View>
          ))}
        </View>

        {/* 6. PAGINADOR */}
        <View style={styles.paginationRow}>
          {/* Botón flecha anterior */}
          <TouchableOpacity
            style={styles.pageArrowButton}
            onPress={() => setCurrentPage((p) => Math.max(1, p - 1))}
            activeOpacity={0.7}
          >
            <Text style={styles.pageArrowText}>‹</Text>
          </TouchableOpacity>

          {/* Páginas numeradas */}
          {[1, 2, 3, 4, 5].map((page) => {
            const isSelected = page === currentPage;
            return (
              <TouchableOpacity
                key={page}
                style={[
                  styles.pageNumberButton,
                  isSelected && styles.pageNumberButtonActive,
                ]}
                onPress={() => setCurrentPage(page)}
                activeOpacity={0.7}
              >
                <Text
                  style={[
                    styles.pageNumberText,
                    isSelected && styles.pageNumberTextActive,
                  ]}
                >
                  {page}
                </Text>
              </TouchableOpacity>
            );
          })}

          {/* Botón flecha siguiente */}
          <TouchableOpacity
            style={styles.pageArrowButton}
            onPress={() => setCurrentPage((p) => Math.min(5, p + 1))}
            activeOpacity={0.7}
          >
            <Text style={styles.pageArrowText}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 7. BARRA DE NAVEGACIÓN INFERIOR (5 Pestañas Administrador) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => onTabPress && onTabPress('Dashboard')}
        >
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => onTabPress && onTabPress('Usuarios')}
        >
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Usuarios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => onTabPress && onTabPress('Servicios')}
        >
          <Text style={styles.tabIcon}>⊞</Text>
          <Text style={styles.tabLabel}>Cat. y servicios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => onTabPress && onTabPress('Intercambios')}
        >
          <Text style={[styles.tabIcon, styles.tabIconActive]}>⇄</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Intercambios</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => onTabPress && onTabPress('Reportes')}
        >
          <Text style={styles.tabIcon}>📊</Text>
          <Text style={styles.tabLabel}>Reportes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminIntercambiosScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
    // PROTECCIÓN ANDROID: Sumamos StatusBar.currentHeight para evitar colisión con reloj y batería
    paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 28) + 14 : 12,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 48,
    marginTop: 4,
    marginBottom: 20,
  },
  headerSpacer: {
    width: 36,
  },
  headerLogo: {
    width: 120,
    height: 26,
  },
  adminAvatarButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#0284C7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adminAvatarIcon: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  titleSection: {
    marginBottom: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    letterSpacing: -0.3,
  },
  segmentedContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  segmentTabActive: {
    backgroundColor: '#0284C7',
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#64748B',
  },
  segmentTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 46,
  },
  searchIcon: {
    fontSize: 14,
    marginRight: 8,
    color: '#94A3B8',
  },
  searchInput: {
    flex: 1,
    fontSize: 13,
    color: '#0F172A',
    paddingVertical: 0,
  },
  filterButton: {
    width: 46,
    height: 46,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 14,
    color: '#0284C7',
  },
  tableCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
    borderColor: '#F1F5F9',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 16,
  },
  tableHeaderRow: {
    flexDirection: 'row',
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
    alignItems: 'center',
  },
  columnHeader: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#0284C7',
  },
  colId: {
    width: '9%',
  },
  colUser: {
    width: '29%',
  },
  colService: {
    width: '27%',
  },
  colDate: {
    width: '24%',
    textAlign: 'center',
  },
  colCredits: {
    width: '11%',
    textAlign: 'right',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F8FAFC',
  },
  tableRowLast: {
    borderBottomWidth: 0,
  },
  cellText: {
    fontSize: 12,
  },
  cellId: {
    color: '#94A3B8',
    fontWeight: '500',
  },
  cellUser: {
    color: '#0F172A',
    fontWeight: '600',
  },
  cellService: {
    color: '#475569',
  },
  cellDate: {
    color: '#64748B',
    fontSize: 11,
  },
  cellCredits: {
    color: '#0F172A',
    fontWeight: '700',
  },
  paginationRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginVertical: 8,
  },
  pageArrowButton: {
    width: 28,
    height: 28,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageArrowText: {
    fontSize: 16,
    color: '#0284C7',
    fontWeight: 'bold',
    marginTop: -2,
  },
  pageNumberButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageNumberButtonActive: {
    backgroundColor: '#0284C7',
  },
  pageNumberText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',
  },
  pageNumberTextActive: {
    color: '#FFFFFF',
    fontWeight: '700',
  },
  bottomNav: {
    flexDirection: 'row',
    height: 62,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F1F5F9',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingBottom: 4,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabIcon: {
    fontSize: 17,
    color: '#94A3B8',
    marginBottom: 3,
  },
  tabIconActive: {
    color: '#0284C7',
  },
  tabLabel: {
    fontSize: 10,
    color: '#94A3B8',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#0284C7',
    fontWeight: '700',
  },
});