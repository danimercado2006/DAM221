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

const LoginScreen = ({ onNavigateRegister, onNavigateForgot, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    // SafeAreaView protege contra la barra de estado, notch y barra de inicio
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* 1. CABECERA: Logotipo oficial de Tempos */}
        <View style={styles.topHeader}>
          <Image
            source={require('../assets/tempos_header_logo.png')}
            style={styles.headerLogo}
            resizeMode="contain"
          />
        </View>

        {/* 2. ZONA HERO: Isotipo del reloj circular */}
        <View style={styles.heroSection}>
          <View style={styles.clockBigCircle}>
            <View style={styles.clockRingOrange} />
            <View style={styles.clockRingBlue} />
            <View style={styles.clockCenterDot} />
            <View style={styles.clockHourHand} />
            <View style={styles.clockMinuteHand} />
          </View>

          <Text style={styles.mainTitle}>Tempos</Text>
          <Text style={styles.subtitle}>
            Intercambia tu tiempo, comparte tu talento
          </Text>
        </View>

        {/* 3. TRES PILARES: Aprende, Comparte, Conecta */}
        <View style={styles.pillarsRow}>
          <View style={styles.pillarItem}>
            <View style={styles.pillarIconCircle}>
              <Text style={styles.pillarEmoji}>🎓</Text>
            </View>
            <Text style={styles.pillarLabel}>Aprende</Text>
          </View>

          <View style={styles.pillarItem}>
            <View style={styles.pillarIconCircle}>
              <Text style={styles.pillarEmoji}>👥</Text>
            </View>
            <Text style={styles.pillarLabel}>Comparte</Text>
          </View>

          <View style={styles.pillarItem}>
            <View style={styles.pillarIconCircle}>
              <Text style={styles.pillarEmoji}>⭐</Text>
            </View>
            <Text style={styles.pillarLabel}>Conecta</Text>
          </View>
        </View>

        {/* 4. FORMULARIO: Inputs con cápsula (borderRadius: 26) */}
        <View style={styles.formContainer}>
          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>👤</Text>
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

          <View style={styles.inputWrapper}>
            <Text style={styles.inputIcon}>🔒</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Contraseña"
              placeholderTextColor="#94A3B8"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={styles.eyeButton}
              onPress={() => setShowPassword(!showPassword)}
              activeOpacity={0.7}
            >
              <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
            </TouchableOpacity>
          </View>

          {/* Botón Principal con Degradado Exacto de Figma (Azul a Naranja) */}
          <TouchableOpacity
            style={styles.buttonShadow}
            onPress={() => onLoginSuccess && onLoginSuccess(email)}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={['#0284C7', '#0EA5E9', '#EA580C']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradientButton}
            >
              <Text style={styles.loginButtonText}>Iniciar sesión</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* 5. PIE DE PÁGINA: Enlaces a registro y contraseña */}
        <View style={styles.footerContainer}>
          <View style={styles.registerRow}>
            <Text style={styles.footerText}>¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={onNavigateRegister} activeOpacity={0.7}>
              <Text style={styles.linkTextBold}>Regístrate</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={onNavigateForgot}
            activeOpacity={0.7}
          >
            <Text style={styles.linkText}>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 28,
    paddingTop: 16,
    paddingBottom: 32,
    justifyContent: 'space-between',
    marginTop:20,
  },
  topHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerLogo: {
    width: 125,
    height: 28,
  },
  heroSection: {
    alignItems: 'center',
    marginVertical: 12,
  },
  clockBigCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 6,
    borderColor: '#0284C7',
    borderLeftColor: '#EA580C',
    borderTopColor: '#EA580C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  clockCenterDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EA580C',
  },
  clockHourHand: {
    position: 'absolute',
    width: 4,
    height: 22,
    backgroundColor: '#0284C7',
    top: 22,
    borderRadius: 2,
  },
  clockMinuteHand: {
    position: 'absolute',
    width: 18,
    height: 4,
    backgroundColor: '#EA580C',
    right: 22,
    borderRadius: 2,
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 13,
    color: '#475569',
    textAlign: 'center',
    maxWidth: 240,
    lineHeight: 18,
  },
  pillarsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginVertical: 20,
  },
  pillarItem: {
    alignItems: 'center',
  },
  pillarIconCircle: {
    width: 54,
    height: 54,
    borderRadius: 27,
    backgroundColor: '#E0F2FE',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 6,
  },
  pillarEmoji: {
    fontSize: 22,
  },
  pillarLabel: {
    fontSize: 12,
    fontWeight: '600',
    color: '#334155',
  },
  formContainer: {
    width: '100%',
    marginVertical: 10,
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
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.04,
    shadowRadius: 3,
    elevation: 1,
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
  eyeButton: {
    padding: 6,
  },
  eyeIcon: {
    fontSize: 16,
    color: '#94A3B8',
  },
  buttonShadow: {
    marginTop: 8,
    borderRadius: 26,
    shadowColor: '#0284C7',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  gradientButton: {
    height: 52,
    borderRadius: 26,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 0.2,
  },
  footerContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  registerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  footerText: {
    fontSize: 13,
    color: '#475569',
  },
  linkTextBold: {
    fontSize: 13,
    fontWeight: '700',
    color: '#0284C7',
  },
  forgotButton: {
    paddingVertical: 4,
  },
  linkText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0284C7',
  },
});