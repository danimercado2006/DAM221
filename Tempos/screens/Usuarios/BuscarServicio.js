
import React from 'react';
import {SafeAreaView, ScrollView, View, Text, TextInput, Pressable, StatusBar, StyleSheet} from 'react-native';

export default function BuscarYSolicitarScr() {
    const services = [
        ['👥', 'Conversación en inglés', 'María López', '★ 4.8 (24)', '2 créditos/hora'],
        ['📖', 'Clases de inglés básico', 'Ana Torres', '★ 4.8 (18)', '1 crédito/hora'],
        ['💼', 'Inglés para negocios', 'Luis García', '★ 4.9 (12)', '3 créditos/hora']
    ];

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFFFF"
            />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.back}>‹</Text>
                    <Text style={styles.logo}>◉ Tempos</Text>
                    <Text style={styles.avatar}>👤</Text>
                </View>

                <TextInput
                    style={styles.search}
                    value="⌕  Inglés"
                    editable={false}
                />

                <View style={styles.categories}>
                    {[
                        'Todos',
                        'Idiomas',
                        'Programación',
                        'Diseño'
                    ].map((item, index) => (
                        <Text
                            key={item}
                            style={[
                                styles.category,
                                index === 1 && styles.selected
                            ]}
                        >
                            {item}
                        </Text>
                    ))}
                </View>

                {services.map((service, index) => (
                    <View
                        key={index}
                        style={styles.service}
                    >
                        <Text style={styles.image}>
                            {service[0]}
                        </Text>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.title}>
                                {service[1]}
                            </Text>

                            <Text style={styles.muted}>
                                {service[2]}
                            </Text>

                            <Text style={styles.rating}>
                                {service[3]}
                            </Text>
                        </View>

                        <Text style={styles.cost}>
                            {service[4]}
                        </Text>

                        <Text style={styles.heart}>
                            ♡
                        </Text>
                    </View>
                ))}

                <View style={styles.detail}>
                    <View style={styles.handle} />

                    <View style={styles.detailHeader}>
                        <Text style={styles.detailTitle}>
                            Conversación en inglés
                        </Text>

                        <Text style={styles.heart}>
                            ♥
                        </Text>
                    </View>

                    <Text style={styles.person}>
                        👩🏻 María López
                    </Text>

                    <Text style={styles.detailLine}>
                        ★ 4.8 (24 calificaciones)
                    </Text>

                    <Text style={styles.detailLine}>
                        ◉ Modalidad: En línea o presencial
                    </Text>

                    <Text style={styles.detailLine}>
                        ◷ Duración: 1 hora
                    </Text>

                    <Text style={styles.detailLine}>
                        ⌖ Ubicación: Querétaro, Qro.
                    </Text>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}>
                            Solicitar servicio
                        </Text>
                    </Pressable>
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
        padding: 14
    },

    header: {
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    back: {
        fontSize: 28,
        color: '#607080'
    },

    logo: {
        fontWeight: '700',
        color: '#26364A'
    },

    avatar: {
        color: '#9AA8B8'
    },

    search: {
        backgroundColor: '#F3F6FA',
        borderRadius: 12,
        paddingHorizontal: 14,
        height: 38,
        fontSize: 12,
        color: '#637083',
        marginTop: 10
    },

    categories: {
        flexDirection: 'row',
        gap: 6,
        marginVertical: 12
    },

    category: {
        backgroundColor: '#F1F5F9',
        paddingVertical: 7,
        paddingHorizontal: 10,
        borderRadius: 18,
        fontSize: 10,
        color: '#64748B'
    },

    selected: {
        backgroundColor: '#12B5C8',
        color: '#FFFFFF'
    },

    service: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 9,
        marginBottom: 9,
        borderWidth: 1,
        borderColor: '#EDF1F5',
        gap: 8
    },

    image: {
        fontSize: 30,
        backgroundColor: '#EAF5F9',
        borderRadius: 8,
        padding: 8
    },

    title: {
        fontSize: 11,
        fontWeight: '700',
        color: '#26364A'
    },

    muted: {
        fontSize: 9,
        color: '#8A96A8',
        marginTop: 2
    },

    rating: {
        fontSize: 9,
        color: '#E7A500',
        marginTop: 4
    },

    cost: {
        fontSize: 9,
        color: '#09A4C7',
        fontWeight: '700'
    },

    heart: {
        color: '#C2CBD6',
        fontSize: 17
    },

    detail: {
        marginTop: 24,
        borderRadius: 20,
        backgroundColor: '#FFFFFF',
        padding: 16,
        shadowColor: '#000000',
        shadowOpacity: 0.08,
        shadowRadius: 12,
        elevation: 4
    },

    handle: {
        width: 35,
        height: 4,
        borderRadius: 3,
        backgroundColor: '#E4EAF0',
        alignSelf: 'center',
        marginBottom: 14
    },

    detailHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    detailTitle: {
        fontWeight: '700',
        fontSize: 14,
        color: '#26364A'
    },

    person: {
        fontSize: 10,
        color: '#46566B',
        marginVertical: 10
    },

    detailLine: {
        fontSize: 10,
        color: '#728094',
        marginVertical: 4
    },

    button: {
        backgroundColor: '#087FC4',
        borderRadius: 20,
        marginTop: 14,
        padding: 12
    },

    buttonText: {
        textAlign: 'center',
        fontSize: 12,
        color: '#FFFFFF',
        fontWeight: '700'
    }
});
