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

const EditProfileScreen = ({ onNavigateBack, onTabPress, onSaveProfile }) => {
  const [name, setName] = useState('Daniela Ramírez Mercado');
  const [email, setEmail] = useState('daniela@correo.com');
  const [phone, setPhone] = useState('442 123 4567');
  const [location, setLocation] = useState('Querétaro, Qro.');
  const [bio, setBio] = useState(
    'Estudiante de TI. Me gusta aprender y compartir conocimientos.'
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* 1. CABECERA: Botón Volver + Logo Oficial Centrado + Avatar */}
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

        {/* 2. TÍTULO */}
        <View style={styles.titleSection}>
          <Text style={styles.screenTitle}>Editar perfil</Text>
          <Text style={styles.screenSubtitle}>
            Actualiza tu información personal.
          </Text>
        </View>

        {/* 3. AVATAR CON BOTÓN DE CÁMARA */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80',
              }}
              style={styles.avatarImage}
            />
            <TouchableOpacity style={styles.cameraBadge} activeOpacity={0.85}>
              <Text style={styles.cameraIcon}>📷</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 4. FORMULARIO */}
        <View style={styles.formArea}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Nombre completo</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="Tu nombre completo"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Correo electrónico</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholder="correo@ejemplo.com"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Teléfono</Text>
            <View style={styles.inputBox}>
              <TextInput
                style={styles.textInput}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholder="Número de teléfono"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Ubicación</Text>
            <View style={styles.inputBox}>
              <Text style={styles.fieldIcon}>📍</Text>
              <TextInput
                style={styles.textInput}
                value={location}
                onChangeText={setLocation}
                placeholder="Ciudad, Estado"
                placeholderTextColor="#94A3B8"
              />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Biografía</Text>
            <View style={styles.textAreaBox}>
              <TextInput
                style={styles.textAreaInput}
                value={bio}
                onChangeText={setBio}
                placeholder="Cuéntanos un poco sobre ti..."
                placeholderTextColor="#94A3B8"
                multiline={true}
                numberOfLines={3}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Botón Guardar cambios con Degradado Exacto */}
          <TouchableOpacity
            style={styles.buttonShadow}
            onPress={() => onSaveProfile && onSaveProfile({ name, email, phone, location, bio })}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={['#0284C7', '#0EA5E9', '#EA580C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.submitButtonText}>Guardar cambios</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 5. BARRA DE NAVEGACIÓN INFERIOR */}
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
          <Text style={[styles.tabIcon, styles.tabIconActive]}>🪙</Text>
          <Text style={[styles.tabLabel, styles.tabLabelActive]}>Créditos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem} onPress={() => onTabPress && onTabPress('Perfil')}>
          <Text style={styles.tabIcon}>👤</Text>
          <Text style={styles.tabLabel}>Perfil</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  
  },
  scrollView: {
    marginTop:20,
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
    marginBottom: 16,
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
  avatarWrapper: {
    alignItems: 'center',
    marginVertical: 12,
  },
  avatarContainer: {
    position: 'relative',
    width: 96,
    height: 96,
    borderRadius: 48,
    borderWidth: 3,
    borderColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    elevation: 3,
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 48,
  },
  cameraBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#0284C7',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  formArea: {
    width: '100%',
    marginTop: 8,
  },
  fieldGroup: {
    marginBottom: 14,
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
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },
  textAreaBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    padding: 12,
    height: 84,
  },
  textAreaInput: {
    flex: 1,
    fontSize: 13.5,
    color: '#0F172A',
    lineHeight: 18,
  },
  buttonShadow: {
    borderRadius: 25,
    marginTop: 10,
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