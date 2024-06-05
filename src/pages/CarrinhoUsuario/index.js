// CarrinhoUsuario.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CarrinhoUsuario() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Página do Carrinho</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CarrinhoUsuario;
