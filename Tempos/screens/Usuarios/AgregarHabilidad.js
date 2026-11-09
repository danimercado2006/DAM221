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
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const AddSkillScreen = ({ onNavigateBack, onTabPress }) => {
  const [skillName, setSkillName] = useState('Inglés');
  const [category, setCategory] = useState('Idiomas');
  const [level, setLevel] = useState('Intermedio');
  const [description, setDescription] = useState(
    'Puedo ayudarte a mejorar tu conversación en inglés, gramática y vocabulario.'
  );
  const [tags, setTags] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. CABECERA CON NAVEGACIÓN Y LOGO OFICIAL */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.iconButton}
            onPress={onNavigateBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backChevron}>‹</Text>
          </TouchableOpacity>

          <Image
            source={require('../../assets/tempos_header_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />

          <View style={styles.avatarThumbnailContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&auto=format&fit=crop&q=80',
              }}
              style={styles.avatarThumbnail}
            />
          </View>
        </View>

        {/* 2. TÍTULOS */}
        <View style={styles.titleSection}>
          <Text style={styles.screenTitle}>Agregar habilidad</Text>
          <Text style={styles.screenSubtitle}>
            Añade una habilidad que puedas compartir.
          </Text>
        </View>

        {/* 3. CAMPOS DEL FORMULARIO */}
        <View style={styles.formArea}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Nombre de la habilidad</Text>
            <View style={styles.inputBox}>
              <Text style={styles.fieldIcon}>📖</Text>
              <TextInput
                style={styles.textInput}
                value={skillName}
                onChangeText={setSkillName}
                placeholder="Ej. Diseño UI, Guitarra, Inglés"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Categoría</Text>
            <TouchableOpacity style={styles.selectorBox} activeOpacity={0.8}>
              <View style={styles.selectorLeft}>
                <Text style={styles.fieldIcon}>🌐</Text>
                <Text style={styles.selectorValue}>{category}</Text>
              </View>
              <Text style={styles.chevronDown}>⌄</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Nivel</Text>
            <TouchableOpacity style={styles.selectorBox} activeOpacity={0.8}>
              <View style={styles.selectorLeft}>
                <Text style={styles.fieldIcon}>📊</Text>
                <Text style={styles.selectorValue}>{level}</Text>
              </View>
              <Text style={styles.chevronDown}>⌄</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Descripción</Text>
            <View style={styles.textAreaBox}>
              <TextInput
                style={styles.textAreaInput}
                value={description}
                onChangeText={setDescription}
                placeholder="Escribe una breve descripción..."
                placeholderTextColor="#94A3B8"
                multiline={true}
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Etiquetas (opcional)</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                value={tags}
                onChangeText={setTags}
                placeholder="Ej. conversación, gramática, vocabulario"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          {/* Botón con degradado exacto de Figma */}
          <TouchableOpacity style={styles.buttonShadow} activeOpacity={0.85}>
            <LinearGradient
              colors={['#0284C7', '#0EA5E9', '#EA580C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.submitButtonText}>Agregar habilidad</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 4. BARRA DE NAVEGACIÓN INFERIOR (Bottom Tab Bar) */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Inicio')}>
          <Text style={styles.tabIcon}>🏠</Text>
          <Text style={styles.tabLabel}>Inicio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Buscar')}>
          <Text style={styles.tabIcon}>🔍</Text>
          <Text style={styles.tabLabel}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Creditos')}>
          <Text style={styles.tabIcon}>🪙</Text>
          <Text style={styles.tabLabel}>Créditos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Perfil')}>
          <Text style={[styles.tabIcon, styles.tabIconActive]}>👤</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default AddSkillScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 22,
    paddingTop: 12,
    paddingBottom: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginBottom: 20,
  },
  iconButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backChevron: {
    fontSize: 26,
    color: '#0284C7',
    fontWeight: '300',
  },
  headerLogo: {
    width: 120,
    height: 26,
  },
  avatarThumbnailContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
  },
  avatarThumbnail: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    marginBottom: 20,
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  screenSubtitle: {
    fontSize: 13,
    color: '#64748B',
  },
  formArea: {
    width: '100%',
  },
  fieldGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 6,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  fieldIcon: {
    fontSize: 15,
    marginRight: 10,
    color: '#64748B',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },
  selectorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 48,
  },
  selectorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectorValue: {
    fontSize: 14,
    color: '#0F172A',
  },
  chevronDown: {
    fontSize: 16,
    color: '#94A3B8',
    fontWeight: 'bold',
  },
  textAreaBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    height: 94,
  },
  textAreaInput: {
    flex: 1,
    fontSize: 13.5,
    color: '#0F172A',
    lineHeight: 19,
  },
  buttonShadow: {
    borderRadius: 25,
    marginTop: 8,
    marginBottom: 16,
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  gradientButton: {
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  bottomNav: {
    flexDirection: 'row',
    height: 60,
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
    fontSize: 18,
    color: '#94A3B8',
    marginBottom: 2,
  },
  tabIconActive: {
    color: '#0284C7',
  },
  tabLabel: {
    fontSize: 11,
    color: '#94A3B8',
    fontWeight: '500',
  },
  tabLabelActive: {
    color: '#0284C7',
    fontWeight: '700',
  },
});