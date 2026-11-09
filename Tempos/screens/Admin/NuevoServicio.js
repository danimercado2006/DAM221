import React from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Switch } from 'react-native';

export default function NuevoServicioScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.backArrow}>←</Text>
        <Text style={styles.logoText}>⏱ Tempos</Text>
        <View style={styles.avatarPlaceholder} />
      </View>

      <Text style={styles.title}>Nuevo servicio</Text>
      <Text style={styles.subtitle}>Da de alta un servicio oficial o institucional en el catálogo de intercambio de tiempo.</Text>

      {/* Formulario */}
      <View style={styles.card}>
        <View style={styles.labelRow}>
          <Text style={styles.label}>Nombre del servicio</Text>
          <Text style={styles.labelRight}>Obligatorio</Text>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputIcon}>💼</Text>
          <TextInput 
            style={styles.input} 
            placeholder="ej. Taller de conversación en Inglés" 
            placeholderTextColor="#94A3B8"
          />
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>Categoría temática</Text>
          <Text style={styles.labelRight}>Catálogo</Text>
        </View>
        <View style={styles.selectBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 8}}>📊</Text>
            <Text style={styles.selectText}>Idiomas &amp; Traducción</Text>
          </View>
          <Text style={styles.arrow}>▼</Text>
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>Prestador asignado</Text>
          <Text style={styles.labelRight}>Mentor / Usuario</Text>
        </View>
        <View style={styles.selectBox}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 8}}>👤</Text>
            <Text style={styles.selectText}>Equipo Tempos Oficial (Institucional)</Text>
          </View>
          <Text style={styles.arrow}>▼</Text>
        </View>

        <View style={styles.labelRow}>
          <Text style={styles.label}>Descripción detallada</Text>
          <Text style={styles.labelRight}>Max 300 letras</Text>
        </View>
        <TextInput 
          style={styles.textArea} 
          multiline 
          placeholder="Describe el contenido, objetivos pedagógicos y prerrequisitos requeridos para los participantes..." 
          placeholderTextColor="#94A3B8"
        />

        {/* Costo y Cupos (Dos columnas) */}
        <View style={styles.rowTwoCols}>
          <View style={{flex: 1, marginRight: 8}}>
            <Text style={styles.label}>Costo (horas)</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>⏱</Text>
              <TextInput style={styles.input} defaultValue="1" />
              <Text style={styles.unitText}>cred./h</Text>
            </View>
          </View>
          <View style={{flex: 1, marginLeft: 8}}>
            <Text style={styles.label}>Cupos máx.</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.inputIcon}>👥</Text>
              <TextInput style={styles.input} defaultValue="5" />
              <Text style={styles.unitText}>plazas</Text>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Modalidad de impartición</Text>
        <View style={styles.modalitiesRow}>
          <View style={[styles.modalityOption, styles.modalitySelected]}>
            <Text>💻</Text>
            <Text style={styles.modalityTextSelected}>En línea</Text>
          </View>
          <View style={styles.modalityOption}>
            <Text>📍</Text>
            <Text style={styles.modalityText}>Presencial</Text>
          </View>
          <View style={styles.modalityOption}>
            <Text>⇄</Text>
            <Text style={styles.modalityText}>Híbrida</Text>
          </View>
        </View>

        <View style={styles.switchRow}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={{marginRight: 8}}>👁</Text>
            <View>
              <Text style={styles.switchLabel}>Publicar de inmediato</Text>
              <Text style={styles.switchSublabel}>Visible al instante en el feed</Text>
            </View>
          </View>
          <Switch value={true} trackColor={{ true: '#007AFF' }} />
        </View>
      </View>

      {/* Nota institucional */}
      <View style={styles.noticeBox}>
        <Text style={styles.noticeText}>
          🛡️ Los servicios institucionales reciben la insignia de verificación azul y garantizan respaldo de créditos bajo la red solidaria Tempos.
        </Text>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.primaryButtonText}>＋ Publicar servicio</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancelar y descartar</Text>
      </TouchableOpacity>
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
  title: { fontSize: 22, fontWeight: 'bold', color: '#0F172A' },
  subtitle: { fontSize: 13, color: '#64748B', marginBottom: 20 },
  card: { backgroundColor: '#FFFFFF', borderRadius: 16, padding: 16, marginBottom: 15, shadowColor: '#000', shadowOpacity: 0.03, shadowRadius: 6, elevation: 2 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, marginBottom: 4 },
  label: { fontSize: 12, fontWeight: '600', color: '#475569' },
  labelRight: { fontSize: 10, color: '#94A3B8' },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingHorizontal: 12, backgroundColor: '#F8FAFC' },
  inputIcon: { marginRight: 8, fontSize: 14 },
  input: { flex: 1, paddingVertical: 12, color: '#1E293B', fontSize: 14 },
  unitText: { fontSize: 11, color: '#94A3B8', marginLeft: 4 },
  selectBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingHorizontal: 12, paddingVertical: 12, backgroundColor: '#F8FAFC' },
  selectText: { color: '#1E293B', fontSize: 13, fontWeight: '500' },
  arrow: { fontSize: 10, color: '#64748B' },
  textArea: { borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, padding: 12, backgroundColor: '#F8FAFC', height: 80, textAlignVertical: 'top', fontSize: 14, color: '#1E293B' },
  rowTwoCols: { flexDirection: 'row', justifyContent: 'space-between' },
  modalitiesRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  modalityOption: { flex: 1, backgroundColor: '#F1F5F9', borderWidth: 1, borderColor: '#E2E8F0', borderRadius: 10, paddingVertical: 10, alignItems: 'center', marginHorizontal: 4 },
  modalitySelected: { backgroundColor: '#0055A5', borderColor: '#0055A5' },
  modalityText: { fontSize: 12, color: '#475569', marginTop: 4 },
  modalityTextSelected: { fontSize: 12, color: '#FFFFFF', fontWeight: 'bold', marginTop: 4 },
  switchRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 16, paddingTop: 12, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  switchLabel: { fontSize: 13, fontWeight: 'bold', color: '#1E293B' },
  switchSublabel: { fontSize: 11, color: '#64748B' },
  noticeBox: { backgroundColor: '#E0F2FE', borderRadius: 12, padding: 14, marginBottom: 20, borderWidth: 1, borderColor: '#BAE6FD' },
  noticeText: { fontSize: 12, color: '#0369A1', lineHeight: 18 },
  primaryButton: { backgroundColor: '#0055A5', borderRadius: 12, paddingVertical: 14, alignItems: 'center', marginBottom: 10 },
  primaryButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 15 },
  cancelButton: { alignItems: 'center', paddingVertical: 8 },
  cancelButtonText: { color: '#0055A5', fontWeight: 'bold', fontSize: 14 }
});