
import React from 'react';
import {SafeAreaView, ScrollView, View, Text, StatusBar, StyleSheet} from 'react-native';

export default function MisCreditosScr() {
    const movements = [
        ['▣', 'Clase de matemáticas', '10/01/2026', '+2', '#DDF7ED'],
        ['▤', 'Conversación en inglés', '05/01/2026', '-2', '#FFF0E5'],
        ['▧', 'Diseño en Canva', '01/01/2026', '-1', '#E5F1FF'],
        ['⌘', 'Apoyo en programación', '14/09/2026', '+3', '#FFF8D9']
    ];

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.menu}>☰</Text>
                    <Text style={styles.logo}>◉ Tempos</Text>
                    <Text style={styles.avatar}>👤</Text>
                </View>

                <Text style={styles.heading}>Mis créditos</Text>

                <View style={styles.balance}>
                    <Text style={styles.coin}>🪙</Text>

                    <View>
                        <Text style={styles.label}>SALDO ACTUAL</Text>

                        <Text style={styles.amount}>
                            5
                            <Text style={styles.creditWord}>{' '}créditos</Text>
                        </Text>
                    </View>
                </View>

                <View style={styles.stats}>
                    <View style={styles.stat}>
                        <Text style={styles.green}>↑ Créditos obtenidos</Text>

                        <Text style={styles.statNum}>12</Text>
                    </View>

                    <View style={styles.stat}>
                        <Text style={styles.red}>↓ Créditos utilizados</Text>

                        <Text style={styles.statNum}>7</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Movimientos recientes</Text>

                    <Text style={styles.link}>Ver todos</Text>
                </View>

                {movements.map((movement, index) => (
                    <View style={styles.movement} key={index}>
                        <Text style={[styles.icon,{backgroundColor: movement[4]}]}>
                            {movement[0]}
                        </Text>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.movementTitle}>{movement[1]}</Text>

                            <Text style={styles.date}>{movement[2]}</Text>
                        </View>

                        <Text style={[styles.change, movement[3].startsWith('+') ? styles.positive : styles.negative]}>
                            {movement[3]}
                        </Text>
                    </View>
                ))}

                <View style={styles.nav}>
                    <Text>⌂ Inicio</Text>
                    <Text>⌕ Buscar</Text>

                    <Text style={styles.active}>▣ Créditos</Text>

                    <Text>♟ Perfil</Text>
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
        padding: 16
    },

    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    menu: {
        fontSize: 20,
        color: '#65758A'
    },

    logo: {
        fontWeight: '700',
        color: '#26364A'
    },

    avatar: {
        color: '#9AA8B8'
    },

    heading: {
        fontSize: 21,
        fontWeight: '700',
        color: '#172033',
        marginTop: 18,
        marginBottom: 16
    },

    balance: {
        backgroundColor: '#E8F5FF',
        borderRadius: 15,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 15
    },

    coin: {
        fontSize: 30,
        backgroundColor: '#FFFFFF',
        padding: 9,
        borderRadius: 30
    },

    label: {
        fontSize: 9,
        color: '#7A8A9D'
    },

    amount: {
        fontSize: 24,
        fontWeight: '700',
        color: '#087FC4'
    },

    creditWord: {
        fontSize: 12,
        fontWeight: '500'
    },

    stats: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 14
    },

    stat: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#EDF1F5',
        borderRadius: 14,
        padding: 14
    },

    green: {
        fontSize: 10,
        color: '#38A98A'
    },

    red: {
        fontSize: 10,
        color: '#E17A83'
    },

    statNum: {
        fontSize: 22,
        fontWeight: '700',
        color: '#26364A',
        marginTop: 8
    },

    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 24,
        marginBottom: 10
    },

    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: '#26364A'
    },

    link: {
        fontSize: 10,
        color: '#079ACB'
    },

    movement: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: '#EEF2F6',
        borderRadius: 12,
        marginBottom: 8,
        gap: 10
    },

    icon: {
        fontSize: 18,
        padding: 10,
        borderRadius: 9
    },

    movementTitle: {
        fontSize: 11,
        fontWeight: '600',
        color: '#26364A'
    },

    date: {
        fontSize: 9,
        color: '#93A0B0',
        marginTop: 3
    },

    change: {
        fontSize: 10,
        fontWeight: '700',
        padding: 5,
        borderRadius: 12
    },

    positive: {
        color: '#22A883',
        backgroundColor: '#E6FAF2'
    },

    negative: {
        color: '#E66D77',
        backgroundColor: '#FFF0F0'
    },

    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 25,
        paddingTop: 14,
        borderTopWidth: 1,
        borderColor: '#EEF2F6'
    },

    active: {
        color: '#078BCB',
        fontWeight: '700'
    }
});
