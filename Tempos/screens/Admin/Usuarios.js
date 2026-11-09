
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    TextInput,
    Pressable,
    StatusBar,
    StyleSheet
} from 'react-native';

export default function UsersScreen() {
    const users = [
        ['👩🏻', 'Ana Torres', 'ana@correo.com', 'Activo'],
        ['👨🏻', 'Carlos Ruiz', 'carlos@correo.com', 'Activo'],
        ['👩🏼', 'María López', 'maria@correo.com', 'Inactivo'],
        ['👩🏽', 'Luis García', 'luis@correo.com', 'Activo'],
        ['👩🏻', 'Sofía Martínez', 'sofia@correo.com', 'Activo'],
        ['👨🏽', 'Daniel Pérez', 'daniel@correo.com', 'Inactivo'],
        ['👩🏼', 'Valeria Ramos', 'valeria@correo.com', 'Activo'],
        ['👨🏻', 'José Torres', 'jose@correo.com', 'Activo']
    ];

    return (
        <SafeAreaView style={styles.safe}>
            <StatusBar barStyle="dark-content" />

            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.logo}>◉ Tempos</Text>
                    <Text style={styles.admin}>●</Text>
                </View>

                <Text style={styles.heading}>
                    Usuarios
                </Text>

                <Text style={styles.subtitle}>
                    Gestiona los usuarios del sistema
                </Text>

                <View style={styles.searchRow}>
                    <TextInput
                        style={styles.search}
                        value="⌕ Buscar usuario..."
                        editable={false}
                    />

                    <Text style={styles.filter}>
                        ⚙
                    </Text>
                </View>

                <Pressable style={styles.add}>
                    <Text style={styles.addText}>
                        ＋ Nuevo usuario
                    </Text>
                </Pressable>

                {users.map((user, index) => (
                    <View
                        style={styles.user}
                        key={index}
                    >
                        <Text style={styles.avatar}>
                            {user[0]}
                        </Text>

                        <View style={{ flex: 1 }}>
                            <Text style={styles.name}>
                                {user[1]}
                            </Text>

                            <Text style={styles.email}>
                                {user[2]}
                            </Text>
                        </View>

                        <Text
                            style={[
                                styles.status,
                                user[3] === 'Activo'
                                    ? styles.active
                                    : styles.inactive
                            ]}
                        >
                            {user[3]}
                        </Text>

                        <Text style={styles.edit}>
                            ✎
                        </Text>

                        <Text style={styles.delete}>
                            ♧
                        </Text>
                    </View>
                ))}

                <Text style={styles.pagination}>
                    Mostrando 1–8 de 50 {'     '}
                    ‹ {'  '}
                    <Text style={styles.page}>1</Text>
                    {'  '} 2 {'  '} 3 {'  '} ›
                </Text>

                <View style={styles.nav}>
                    {[
                        '⌂\nDashboard',
                        '♙\nUsuarios',
                        '▦\nCat. y servicios',
                        '⇄\nIntercambios',
                        '▥\nReportes'
                    ].map((item, index) => (
                        <Text
                            key={index}
                            style={[
                                styles.navItem,
                                index === 1 && styles.navActive
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
        backgroundColor: '#F7FAFF'
    },

    container: {
        padding: 14
    },

    header: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        fontWeight: '700',
        color: '#26364A'
    },

    admin: {
        position: 'absolute',
        right: 4,
        color: '#087FC4',
        fontSize: 22
    },

    heading: {
        fontSize: 20,
        fontWeight: '700',
        color: '#172033',
        marginTop: 18
    },

    subtitle: {
        fontSize: 10,
        color: '#8A96A8',
        marginTop: 3
    },

    searchRow: {
        flexDirection: 'row',
        gap: 8,
        marginTop: 14
    },

    search: {
        flex: 1,
        height: 36,
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#E6EDF5',
        paddingHorizontal: 10,
        fontSize: 10,
        color: '#8A96A8'
    },

    filter: {
        backgroundColor: '#FFFFFF',
        color: '#079ACB',
        borderRadius: 10,
        padding: 9
    },

    add: {
        alignSelf: 'flex-end',
        backgroundColor: '#078BCB',
        borderRadius: 18,
        paddingVertical: 8,
        paddingHorizontal: 12,
        marginTop: 8,
        marginBottom: 10
    },

    addText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '700'
    },

    user: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 9,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 7,
        gap: 7
    },

    avatar: {
        fontSize: 22
    },

    name: {
        fontSize: 10,
        fontWeight: '700',
        color: '#26364A'
    },

    email: {
        fontSize: 8,
        color: '#93A0B0',
        marginTop: 2
    },

    status: {
        fontSize: 8,
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderRadius: 10
    },

    active: {
        color: '#15A87C',
        backgroundColor: '#E5FAF1'
    },

    inactive: {
        color: '#E26A78',
        backgroundColor: '#FFF0F1'
    },

    edit: {
        fontSize: 14,
        color: '#079ACB'
    },

    delete: {
        fontSize: 13,
        color: '#F17A8A'
    },

    pagination: {
        fontSize: 9,
        color: '#93A0B0',
        textAlign: 'center',
        marginTop: 8,
        marginBottom: 14
    },

    page: {
        backgroundColor: '#078BCB',
        color: '#FFFFFF',
        padding: 5,
        borderRadius: 5
    },

    nav: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 1,
        borderColor: '#E8EEF5',
        paddingTop: 12
    },

    navItem: {
        fontSize: 8,
        color: '#8A9AAF',
        textAlign: 'center',
        lineHeight: 15
    },

    navActive: {
        color: '#078BCB',
        fontWeight: '700'
    }
});
