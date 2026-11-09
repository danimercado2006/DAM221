import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const ForgotPasswordScreen = ({ onNavigateBack, onNavigateLogin, onSubmitEmail }) => {
  const [email, setEmail] = useState('');

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. BARRA SUPERIOR DE NAVEGACIÓN: Botón Volver + Logo Oficial Centrado */}
        <View style={styles.navBar}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={onNavigateBack}
            activeOpacity={0.7}
          >
            <Text style={styles.backArrow}>‹</Text>
          </TouchableOpacity>

          <Image
            source={require('../assets/tempos_header_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />

          <View style={styles.headerSpacer} />
        </View>

        {/* 2. ILUSTRACIÓN CENTRAL: Candado de seguridad en aura circular */}
        <View style={styles.illustrationSection}>
          <View style={styles.outerGlowCircle}>
            <View style={styles.innerDashedRing}>
              <View style={styles.lockContainer}>
                <View style={styles.lockShackle} />
                <View style={styles.lockBody}>
                  <View style={styles.keyholeDot} />
                  <View style={styles.keyholeLine} />
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 3. TÍTULO Y DESCRIPCIÓN */}
        <View style={styles.textSection}>
          <Text style={styles.title}>Recuperar contraseña</Text>
          <Text style={styles.description}>
            Ingresa el correo electrónico asociado a tu cuenta de Tempos para recibir un enlace de restablecimiento seguro.
          </Text>
        </View>

        {/* 4. FORMULARIO CON CAJA DE INFORMACIÓN */}
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>✉</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Correo electrónico"
              placeholderTextColor="#94A3B8"
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />
          </View>

          <View style={styles.infoCallout}>
            <View style={styles.infoIconCircle}>
              <Text style={styles.infoIconText}>ⓘ</Text>
            </View>
            <Text style={styles.infoText}>
              Te enviaremos un código de verificación e instrucciones de acceso.
            </Text>
          </View>

          {/* Botón con Degradado Exacto */}
          <TouchableOpacity
            style={styles.buttonShadow}
            onPress={() => onSubmitEmail && onSubmitEmail(email)}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={['#0284C7', '#0EA5E9', '#EA580C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.actionButtonText}>Enviar instrucciones</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* 5. PIE DE PÁGINA */}
        <View style={styles.footerSection}>
          <View style={styles.loginRow}>
            <Text style={styles.footerRegularText}>¿Recordaste tu contraseña? </Text>
            <TouchableOpacity onPress={onNavigateLogin} activeOpacity={0.7}>
              <Text style={styles.loginLinkBold}>Iniciar sesión</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.securityNoteRow}>
            <Text style={styles.shieldIcon}>🛡️</Text>
            <Text style={styles.securityText}>
              Tus créditos de tiempo e información están protegidos
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop:20,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
    paddingTop: 12,
    paddingBottom: 28,
    justifyContent: 'space-between',
  },
  navBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 44,
    marginBottom: 24,
  },
  backButton: {
    width: 36,
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
  },
  backArrow: {
    fontSize: 26,
    color: '#0F172A',
    fontWeight: '300',
  },
  headerLogo: {
    width: 120,
    height: 26,
  },
  headerSpacer: {
    width: 36,
  },
  illustrationSection: {
    alignItems: 'center',
    marginVertical: 18,
  },
  outerGlowCircle: {
    width: 104,
    height: 104,
    borderRadius: 52,
    backgroundColor: '#F0F9FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerDashedRing: {
    width: 82,
    height: 82,
    borderRadius: 41,
    borderWidth: 1.5,
    borderStyle: 'dashed',
    borderColor: '#BAE6FD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lockContainer: {
    alignItems: 'center',
  },
  lockShackle: {
    width: 22,
    height: 18,
    borderWidth: 3,
    borderColor: '#EA580C',
    borderBottomWidth: 0,
    borderTopLeftRadius: 11,
    borderTopRightRadius: 11,
    marginBottom: -2,
  },
  lockBody: {
    width: 32,
    height: 26,
    borderRadius: 6,
    borderWidth: 3,
    borderColor: '#0284C7',
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  keyholeDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: '#0284C7',
  },
  keyholeLine: {
    width: 2.5,
    height: 6,
    backgroundColor: '#0284C7',
    marginTop: -1,
  },
  textSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 13,
    color: '#64748B',
    textAlign: 'center',
    lineHeight: 19,
    paddingHorizontal: 8,
  },
  formContainer: {
    width: '100%',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E2E8F0',
    borderRadius: 26,
    paddingHorizontal: 18,
    height: 52,
    marginBottom: 12,
  },
  inputIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#94A3B8',
  },
  textInput: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },
  infoCallout: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#F0F9FF',
    borderWidth: 1,
    borderColor: '#E0F2FE',
    borderRadius: 14,
    paddingVertical: 10,
    paddingHorizontal: 14,
    marginBottom: 18,
  },
  infoIconCircle: {
    marginRight: 8,
    marginTop: 1,
  },
  infoIconText: {
    fontSize: 13,
    color: '#0284C7',
    fontWeight: 'bold',
  },
  infoText: {
    flex: 1,
    fontSize: 11.5,
    color: '#64748B',
    lineHeight: 16,
  },
  buttonShadow: {
    borderRadius: 26,
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  gradientButton: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footerSection: {
    alignItems: 'center',
    marginTop: 32,
  },
  loginRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  footerRegularText: {
    fontSize: 13,
    color: '#64748B',
  },
  loginLinkBold: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0284C7',
  },
  securityNoteRow: {
    flexDirection: 'row',
    alignItems: 'center',
    opacity: 0.8,
  },
  shieldIcon: {
    fontSize: 12,
    marginRight: 6,
  },
  securityText: {
    fontSize: 11,
    color: '#94A3B8',
    textAlign: 'center',
  },
});