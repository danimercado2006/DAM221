
import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet} from 'react-native';

export default function PanelPrincipalScr() {
    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.menu}>☰</Text>
                    <Text style={styles.logo}>◉ Tempos</Text>
                    <Text style={styles.avatar}>👩🏻</Text>
                </View>

                <Text style={styles.greeting}>
                    ¡Hola, Daniela!
                </Text>

                <Text style={styles.subtitle}>
                    Qué bueno verte de nuevo
                </Text>

                <View style={styles.creditCard}>
                    <Text style={styles.coin}>🏆</Text>

                    <View style={{ flex: 1 }}>
                        <Text style={styles.smallLabel}>
                            MIS CRÉDITOS
                        </Text>

                        <View style={styles.creditLine}>
                            <Text style={styles.creditNumber}>5</Text>

                            <Text style={styles.creditText}>
                                créditos disponibles
                            </Text>
                        </View>
                    </View>

                    <Text style={styles.circleArrow}>›</Text>
                </View>

                <View style={styles.shortcuts}>
                    {[
                        '⌕\nBuscar servicio',
                        '▣\nMis servicios',
                        '◷\nHistorial',
                        '♥\nFavoritos'
                    ].map((item, index) => (
                        <View
                            style={styles.shortcut}
                            key={index}
                        >
                            <Text style={styles.shortcutIcon}>
                                {item.split('\n')[0]}
                            </Text>

                            <Text style={styles.shortcutText}>
                                {item.split('\n')[1]}
                            </Text>
                        </View>
                    ))}
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>
                        Servicios recomendados
                    </Text>

                    <Text style={styles.link}>
                        Ver todos
                    </Text>
                </View>

                <View style={styles.serviceRow}>
                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceImage}>👥</Text>

                        <Text style={styles.serviceTitle}>
                            Conversación en inglés
                        </Text>

                        <Text style={styles.muted}>
                            María López
                        </Text>

                        <Text style={styles.rating}>
                            ★ 4.8
                        </Text>

                        <Text style={styles.link}>
                            2 créditos/h
                        </Text>
                    </View>

                    <View style={styles.serviceCard}>
                        <Text style={styles.serviceImage}>📚</Text>

                        <Text style={styles.serviceTitle}>
                            Clases de matemáticas
                        </Text>

                        <Text style={styles.muted}>
                            Carlos Ruiz
                        </Text>

                        <Text style={styles.rating}>
                            ★ 4.6
                        </Text>

                        <Text style={styles.link}>
                            1 crédito/h
                        </Text>
                    </View>
                </View>

                <View style={styles.bottomNav}>
                    {[
                        '⌂\nInicio',
                        '⌕\nBuscar',
                        '▣\nCréditos',
                        '♟\nPerfil'
                    ].map((item, index) => (
                        <Text
                            key={index}
                            style={[
                                styles.navItem,
                                index === 0 && styles.activeNav
                            ]}
                        >
                            {item}
                        </Text>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safe: {
        flex: 1,
        backgroundColor: '#FFFFFF'
    },

    container: {
        padding: 16,
        paddingBottom: 12
    },

    header: {
        height: 42,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    menu: {
        fontSize: 20,
        color: '#64748B'
    },

    logo: {
        fontWeight: '700',
        color: '#26364A'
    },

    avatar: {
        fontSize: 25
    },

    greeting: {
        fontSize: 22,
        fontWeight: '700',
        color: '#172033',
        marginTop: 22
    },

    subtitle: {
        color: '#8A96A8',
        fontSize: 12,
        marginTop: 3
    },

    creditCard: {
        marginTop: 18,
        backgroundColor: '#EAF6FF',
        borderRadius: 18,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12
    },

    coin: {
        fontSize: 30
    },

    smallLabel: {
        fontSize: 9,
        color: '#738196'
    },

    creditLine: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },

    creditNumber: {
        fontSize: 25,
        fontWeight: '700',
        color: '#172033'
    },

    creditText: {
        fontSize: 11,
        color: '#718096'
    },

    circleArrow: {
        backgroundColor: '#078BCB',
        color: '#FFFFFF',
        fontSize: 24,
        width: 30,
        height: 30,
        textAlign: 'center',
        borderRadius: 15
    },

    shortcuts: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 18
    },

    shortcut: {
        alignItems: 'center',
        backgroundColor: '#F7FAFC',
        borderRadius: 12,
        width: '23%',
        paddingVertical: 12
    },

    shortcutIcon: {
        fontSize: 22,
        color: '#169BCB'
    },

    shortcutText: {
        fontSize: 9,
        color: '#4A5568',
        marginTop: 7
    },

    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 10
    },

    sectionTitle: {
        fontWeight: '700',
        fontSize: 14,
        color: '#172033'
    },

    link: {
        color: '#079ACB',
        fontSize: 10,
        fontWeight: '600'
    },

    serviceRow: {
        flexDirection: 'row',
        gap: 10
    },

    serviceCard: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#EDF1F5',
        borderRadius: 13,
        padding: 10
    },

    serviceImage: {
        backgroundColor: '#E5F5FC',
        fontSize: 42,
        textAlign: 'center',
        padding: 12,
        borderRadius: 10
    },

    serviceTitle: {
        fontSize: 11,
        fontWeight: '700',
        color: '#253246',
        marginTop: 8
    },

    muted: {
        fontSize: 9,
        color: '#8491A3',
        marginTop: 3
    },

    rating: {
        fontSize: 10,
        color: '#E8A900',
        marginTop: 8
    },

    bottomNav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#EDF1F5',
        marginTop: 30,
        paddingTop: 12
    },

    navItem: {
        textAlign: 'center',
        fontSize: 10,
        color: '#8A9AAF',
        lineHeight: 18
    },

    activeNav: {
        color: '#078BCB',
        fontWeight: '700'
    }
});
