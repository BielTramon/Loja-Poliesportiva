// WelcomeUsuario.js
import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, Animated } from 'react-native';

function WelcomeUsuario() {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.topBar}>
                <Image source={require('../../assets/carrinho.png')} style={styles.carrinhoImage} />
                <Text style={styles.sportshub}>SPORTSHUB</Text>
            </View>

            {/* Conteúdo Principal */}
            <View style={styles.content}>
                <Text style={styles.welcomeText}>Bem-vindo à nossa aplicação!</Text>
            </View>

            {/* Barra Inferior */}
            <View style={styles.bottomBar}>
                <Text style={styles.bottomBarText}>Barra Inferior</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    sportshub: {
        fontFamily: 'Karantina',
        color: '#4C00B7',
        fontSize: 20,
        padding: 5,
        fontWeight: 'bold',
    },
    topBar: {
        backgroundColor: '#fff',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    carrinhoImage: {
        width: 30,
        height: 30,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ECECEC',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    bottomBar: {
        backgroundColor: '#38a69d',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomBarText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default WelcomeUsuario;
