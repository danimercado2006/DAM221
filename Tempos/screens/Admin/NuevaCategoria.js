import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';

export default function NuevaCategoriaScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.logoText}>⏱ Tempos</Text>
        <View style={styles.avatarPlaceholder} />
      </View>

      <Text style={styles.title}>Nueva Categoría</Text>

      {/* Vista previa en tiempo real */}
      <View style={styles.previewBox}>
        <View style={styles.previewHeaderRow}>
          <Text style={styles.previewLabel}>VISTA PREVIA EN TIEMPO REAL</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>• Activa</Text>
          </View>
        </View>
        <View style={styles.previewCardContent}>
          <View style={styles.miniIconBox}>
            <Text>🌐</Text>
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.previewTitle}>Idiomas y Lenguaje</Text>
            <Text style={styles.previewSubtitle} numberOfLines={1}>Intercambio de conversación y...</Text>
          </View>
          <Text style={styles.arrowIcon}>›</Text>
        </View>
      </View>

      {/* Formulario */}
      <View style={styles.formSection}>
        <Text style={styles.label}>Nombre de la categoría</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>🔲</Text>
          <TextInput 
            style={styles.input} 
            defaultValue="Idiomas y Lenguaje" 
          />
        </View>

        <Text style={styles.label}>Icono representativo</Text>
        <View style={styles.iconsRow}>
          <View style={[styles.iconOption, styles.iconSelected]}><Text>🌐</Text></View>
          <View style={styles.iconOption}><Text>&lt;&gt;</Text></View>
          <View style={styles.iconOption}><Text>🎨</Text></View>
          <View style={styles.iconOption}><Text>📊</Text></View>
          <View style={styles.iconOption}><Text>📷</Text></View>
          <View style={styles.iconOption}><Text>🎵</Text></View>
        </View>

        <Text style={styles.label}>Color distintivo</Text>
        <View style={styles.colorsRow}>
          <View style={[styles.colorCircle, { backgroundColor: '#0055A5' }]}><Text style={{color: '#fff', fontSize: 10}}>✓</Text></View>
          <View style={[styles.colorCircle, { backgroundColor: '#64748B' }]} />
          <View style={[styles.colorCircle, { backgroundColor: '#007AFF' }]} />
          <View style={[styles.colorCircle, { backgroundColor: '#8B4513' }]} />
          <View style={[styles.colorCircle, { backgroundColor: '#CC0000' }]} />
          <View style={[styles.colorCircle, { backgroundColor: '#FF6600' }]} />
        </View>

        <Text style={styles.label}>Descripción</Text>
        <TextInput 
          style={styles.textArea} 
          multiline 
          defaultValue="Intercambio de conversación y gramática" 
        />

        <View style={styles.switchRow}>
          <View>
            <Text style={styles.switchLabel}>Activa para intercambios</Text>
            <Text style={styles.switchSublabel}>Visible de inmediato en el catálogo</Text>
          </View>
          <Switch value={true} trackColor={{ true: '#007AFF' }} />
        </View>

        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>💾 Guardar categoría</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  contentContainer: { padding: 20, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  backArrow: { fontSize: 20, color: '#1E293B', fontWeight: 'bold' },
  logoText: { fontSize: 16, fontWeight: 'bold', color: '#1E293B' },
  avatarPlaceholder: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#0055A5' },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A', marginBottom: 15 },
  previewBox: { backgroundColor: '#EDF4F9', borderRadius: 14, padding: 14, marginBottom: 20, borderWidth: 1, borderColor: '#D9E2EC' },
  previewHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  previewLabel: { fontSize: 10, fontWeight: 'bold', color: '#475569' },
  activeBadge: { backgroundColor: '#E0F2FE', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  activeBadgeText: { fontSize: 10, color: '#0369A1', fontWeight: 'bold' },
  previewCardContent: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 10, borderRadius: 10 },
  miniIconBox: { width: 32, height: 32, borderRadius: 8, backgroundColor: '#E0F2FE', justifyContent: 'center', alignItems: 'center' },
  previewTitle: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  previewSubtitle: { fontSize: 11, color: '#64748B' },
  arrowIcon: { fontSize: 18, color: '#94A3B8' },
  formSection: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 6, elevation: 2 },
  label: { fontSize: 12, fontWeight: '600', color: '#475569', marginBottom: 6, marginTop: 12 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingHorizontal: 12, backgroundColor: '#F8FAFC' },
  inputIcon: { marginRight: 8, fontSize: 14 },
  input: { flex: 1, paddingVertical: 12, color: '#1E293B', fontSize: 14 },
  iconsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  iconOption: { width: 40, height: 40, borderRadius: 10, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0' },
  iconSelected: { backgroundColor: '#0055A5', borderColor: '#0055A5' },
  colorsRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4, paddingHorizontal: 10 },
  colorCircle: { width: 28, height: 28, borderRadius: 14, justifyContent: 'center', alignItems: 'center' },
  textArea: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, padding: 12, backgroundColor: '#F8FAFC', height: 70, textAlignVertical: 'top', fontSize: 14, color: '#1E293B' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingVertical: 8, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  switchLabel: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  switchSublabel: { fontSize: 11, color: '#64748B' },
  primaryButton: { backgroundColor: '#007AFF', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  primaryButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 }
});