import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const AdminDashboardScreen = ({ onTabPress, currentTab = 'Dashboard' }) => {
  const monthlyData = [
    { month: 'Ene', value: 14, heightPct: '44%' },
    { month: 'Feb', value: 18, heightPct: '56%' },
    { month: 'Mar', value: 26, heightPct: '81%' },
    { month: 'Abr', value: 22, heightPct: '68%' },
    { month: 'May', value: 25, heightPct: '78%' },
    { month: 'Jun', value: 32, heightPct: '100%' },
  ];

  const categoriesData = [
    { name: 'Idiomas', percent: '25%', color: '#06B6D4' },
    { name: 'Programación', percent: '20%', color: '#3B82F6' },
    { name: 'Diseño', percent: '15%', color: '#EC4899' },
    { name: 'Matemáticas', percent: '15%', color: '#F97316' },
    { name: 'Otros', percent: '25%', color: '#EAB308' },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. CABECERA: Logo oficial centrado y avatar admin */}
        <View style={styles.header}>
          <View style={styles.headerSpacer} />

          <Image
            source={require('../../assets/tempos_header_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />

          <TouchableOpacity style={styles.adminAvatarButton} activeOpacity={0.8}>
            <Text style={styles.adminAvatarIcon}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* 2. TÍTULOS */}
        <View style={styles.titleSection}>
          <Text style={styles.mainTitle}>Dashboard</Text>
          <Text style={styles.subtitle}>Resumen general del sistema</Text>
        </View>

        {/* 3. MÉTRICAS (KPIs en 2x2) */}
        <View style={styles.statsGrid}>
          <View style={styles.statCard}>
            <View style={styles.statCardTop}>
              <Text style={styles.statCardTitle}>Usuarios{'\n'}registrados</Text>
              <View style={[styles.statIconBadge, { backgroundColor: '#E0F2FE' }]}>
                <Text style={styles.statIconText}>👥</Text>
              </View>
            </View>
            <View style={styles.statCardBottom}>
              <Text style={styles.statValue}>120</Text>
              <View style={styles.trendBadge}>
                <Text style={styles.trendText}>↑ 12%</Text>
              </View>
            </View>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statCardTop}>
              <Text style={styles.statCardTitle}>Servicios{'\n'}publicados</Text>
              <View style={[styles.statIconBadge, { backgroundColor: '#FFEDD5' }]}>
                <Text style={styles.statIconText}>💼</Text>
              </View>
            </View>
            <View style={styles.statCardBottom}>
              <Text style={styles.statValue}>85</Text>
              <View style={styles.trendBadge}>
                <Text style={styles.trendText}>↑ 8%</Text>
              </View>
            </View>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statCardTop}>
              <Text style={styles.statCardTitle}>Intercambios{'\n'}realizados</Text>
              <View style={[styles.statIconBadge, { backgroundColor: '#E0F7FA' }]}>
                <Text style={styles.statIconText}>⇄</Text>
              </View>
            </View>
            <View style={styles.statCardBottom}>
              <Text style={styles.statValue}>240</Text>
              <View style={styles.trendBadge}>
                <Text style={styles.trendText}>↑ 15%</Text>
              </View>
            </View>
          </View>

          <View style={styles.statCard}>
            <View style={styles.statCardTop}>
              <Text style={styles.statCardTitle}>Reportes{'\n'}generados</Text>
              <View style={[styles.statIconBadge, { backgroundColor: '#F3E8FF' }]}>
                <Text style={styles.statIconText}>📊</Text>
              </View>
            </View>
            <View style={styles.statCardBottom}>
              <Text style={styles.statValue}>18</Text>
              <View style={styles.trendBadge}>
                <Text style={styles.trendText}>↑ 10%</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 4. GRÁFICO DE BARRAS NATIVO */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Intercambios por mes</Text>

          <View style={styles.barChartContainer}>
            <View style={styles.yAxisLabels}>
              <Text style={styles.axisText}>30</Text>
              <Text style={styles.axisText}>20</Text>
              <Text style={styles.axisText}>10</Text>
              <Text style={styles.axisText}>0</Text>
            </View>

            <View style={styles.barsArea}>
              <View style={[styles.gridLine, { top: '0%' }]} />
              <View style={[styles.gridLine, { top: '33%' }]} />
              <View style={[styles.gridLine, { top: '66%' }]} />
              <View style={[styles.gridLine, { bottom: 0 }]} />

              <View style={styles.barsColumnsRow}>
                {monthlyData.map((item, index) => (
                  <View key={index} style={styles.barColumn}>
                    <View style={styles.barTrack}>
                      <View style={[styles.barFill, { height: item.heightPct }]} />
                    </View>
                    <Text style={styles.monthLabel}>{item.month}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>

        {/* 5. GRÁFICO DE DONA */}
        <View style={styles.chartCard}>
          <Text style={styles.chartTitle}>Servicios por categoría</Text>

          <View style={styles.donutRow}>
            <View style={styles.donutGraphicContainer}>
              <View style={styles.donutOuterRing}>
                <View style={[styles.donutSector, { borderColor: '#06B6D4' }]} />
                <View style={[styles.donutSector, { borderColor: '#3B82F6', transform: [{ rotate: '70deg' }] }]} />
                <View style={[styles.donutSector, { borderColor: '#EC4899', transform: [{ rotate: '140deg' }] }]} />
                <View style={[styles.donutSector, { borderColor: '#F97316', transform: [{ rotate: '210deg' }] }]} />
                <View style={[styles.donutSector, { borderColor: '#EAB308', transform: [{ rotate: '280deg' }] }]} />
                <View style={styles.donutHole} />
              </View>
            </View>

            <View style={styles.legendContainer}>
              {categoriesData.map((cat, idx) => (
                <View key={idx} style={styles.legendRow}>
                  <View style={[styles.legendColorBox, { backgroundColor: cat.color }]} />
                  <Text style={styles.legendLabel}>{cat.name}</Text>
                  <Text style={styles.legendPercent}>{cat.percent}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* 6. BARRA ADMIN INFERIOR */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Dashboard')}>
          <Text style={[styles.tabIcon, styles.tabIconActive]}>🏠</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Usuarios')}>
          <Text style={styles.tabIcon}>👥</Text>
          <Text style={styles.tabLabel}>Usuarios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Servicios')}>
          <Text style={styles.tabIcon}>⊞</Text>
          <Text style={styles.tabLabel}>Cat. y servicios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Intercambios')}>
          <Text style={styles.tabIcon}>⇄</Text>
          <Text style={styles.tabLabel}>Intercambios</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Reportes')}>
          <Text style={styles.tabIcon}>📊</Text>
          <Text style={styles.tabLabel}>Reportes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AdminDashboardScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginBottom: 16,
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
    marginBottom: 18,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  statCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 10,
  },
  statCardTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#475569',
    lineHeight: 16,
  },
  statIconBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statIconText: {
    fontSize: 15,
  },
  statCardBottom: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  statValue: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
  },
  trendBadge: {
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  trendText: {
    fontSize: 10,
    fontWeight: '700',
    color: '#059669',
  },
  chartCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  chartTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 16,
  },
  barChartContainer: {
    flexDirection: 'row',
    height: 140,
    alignItems: 'flex-end',
  },
  yAxisLabels: {
    height: '100%',
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingBottom: 20,
  },
  axisText: {
    fontSize: 10,
    color: '#94A3B8',
    textAlign: 'right',
  },
  barsArea: {
    flex: 1,
    height: '100%',
    position: 'relative',
    borderLeftWidth: 1,
    borderLeftColor: '#E2E8F0',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#F1F5F9',
  },
  barsColumnsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: '100%',
    paddingBottom: 20,
  },
  barColumn: {
    alignItems: 'center',
    width: 24,
    height: '100%',
    justifyContent: 'flex-end',
  },
  barTrack: {
    width: 14,
    height: '82%',
    justifyContent: 'flex-end',
  },
  barFill: {
    width: '100%',
    backgroundColor: '#0284C7',
    borderRadius: 4,
  },
  monthLabel: {
    position: 'absolute',
    bottom: -18,
    fontSize: 10,
    color: '#64748B',
    fontWeight: '500',
  },
  donutRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
  },
  donutGraphicContainer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  donutOuterRing: {
    width: 110,
    height: 110,
    borderRadius: 55,
    backgroundColor: '#F8FAFC',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  donutSector: {
    position: 'absolute',
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 14,
  },
  donutHole: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#FFFFFF',
    zIndex: 10,
  },
  legendContainer: {
    flex: 1,
    paddingLeft: 20,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  legendColorBox: {
    width: 10,
    height: 10,
    borderRadius: 3,
    marginRight: 8,
  },
  legendLabel: {
    flex: 1,
    fontSize: 12,
    color: '#475569',
  },
  legendPercent: {
    fontSize: 12,
    fontWeight: '700',
    color: '#64748B',
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