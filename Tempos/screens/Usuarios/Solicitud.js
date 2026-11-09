
import React from 'react';
import {SafeAreaView, View, Text, Pressable, StatusBar, StyleSheet} from 'react-native';

export default function SolicitudExitosaScr() {
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" />

            <View style={styles.header}>
                <Text style={styles.back}>‹</Text>
                <Text style={styles.logo}>◉ Tempos</Text>
                <View />
            </View>

            <View style={styles.content}>
                <View style={styles.successCircle}>
                    <Text style={styles.check}>✓</Text>
                </View>

                <Text style={styles.title}>
                    ¡Solicitud enviada!
                </Text>

                <Text style={styles.description}>
                    Tu solicitud de servicio ha sido
                    aceptada automáticamente.
                </Text>

                <View style={styles.service}>
                    <Text style={styles.serviceImage}>
                        🌐
                    </Text>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.serviceTitle}>
                            Conversación en inglés
                        </Text>

                        <Text style={styles.muted}>
                            María López
                        </Text>

                        <Text style={styles.detail}>
                            Fecha: 15/10/2026
                        </Text>

                        <Text style={styles.detail}>
                            Duración: 1 hora
                        </Text>

                        <Text style={styles.cost}>
                            Costo: 2 créditos
                        </Text>
                    </View>
                </View>
            </View>

            <View style={styles.bottom}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>
                        Ver mis solicitudes
                    </Text>
                </Pressable>

                <Text style={styles.return}>
                    Volver al inicio
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#F4FCFF'
    },

    header: {
        height: 50,
        paddingHorizontal: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    back: {
        fontSize: 28,
        color: '#607080'
    },

    logo: {
        fontWeight: '700',
        color: '#26364A'
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 22
    },

    successCircle: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#10B981',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4
    },

    check: {
        fontSize: 38,
        color: '#FFFFFF'
    },

    title: {
        fontSize: 18,
        fontWeight: '700',
        color: '#26364A',
        textAlign: 'center',
        marginTop: 18
    },

    description: {
        fontSize: 10,
        color: '#8793A3',
        textAlign: 'center',
        lineHeight: 16,
        marginTop: 6
    },

    service: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 14,
        padding: 12,
        marginTop: 24,
        width: '100%',
        borderLeftWidth: 3,
        borderLeftColor: '#12B5C8',
        gap: 10,
        elevation: 2
    },

    serviceImage: {
        fontSize: 30,
        backgroundColor: '#E5F5FC',
        borderRadius: 8,
        padding: 10
    },

    serviceTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#26364A'
    },

    muted: {
        fontSize: 10,
        color: '#7E8B9C',
        marginTop: 3
    },

    detail: {
        fontSize: 9,
        color: '#8793A3',
        marginTop: 4
    },

    cost: {
        fontSize: 9,
        color: '#079ACB',
        fontWeight: '700',
        marginTop: 4
    },

    bottom: {
        paddingHorizontal: 20,
        paddingBottom: 20
    },

    button: {
        backgroundColor: '#087FC4',
        borderRadius: 22,
        padding: 13
    },

    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700'
    },

    return: {
        textAlign: 'center',
        color: '#079ACB',
        fontSize: 10,
        marginTop: 12
    }
});
