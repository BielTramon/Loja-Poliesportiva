import React from 'react';
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function ShortsUsuario() {
    const navigation = useNavigation();

    const handleCarrinhoPress = () => {
        navigation.navigate('CarrinhoUsuario');
    };

    const handleEngrenagemPress = () => {
        navigation.navigate('EngrenagemUsuario');
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.topBar}>
                <View style={styles.leftItens}>
                    <TouchableOpacity onPress={handleCarrinhoPress}>
                        <Image source={require('../../assets/carrinho.png')} style={styles.carrinhoImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEngrenagemPress}>
                        <Image source={require('../../assets/engrenagem.png')} style={styles.engrenagemImage} />
                    </TouchableOpacity>
                </View>
                <Text style={styles.sportshub}>SPORTSHUB</Text>
            </View>

            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.welcomeText}>Shorts</Text>
                
                <View style={styles.detalheprodutocontainer}>
                    <Image source={require('../../assets/shorts.png')} style={styles.produtoImage} />
                    <Text style={styles.detalheprodutoText}>Detalhes sobre os shorts...</Text>
                </View>
            </ScrollView>
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
    leftItens: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    carrinhoImage: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    engrenagemImage: {
        width: 30,
        height: 30,
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        paddingBottom: 20,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    detalheprodutocontainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    produtoImage: {
        width: 120,
        height: 120,
        marginBottom: 10,
    },
    detalheprodutoText: {
        fontSize: 16,
        color: '#4C00B7',
        textAlign: 'center',
    },
});

export default ShortsUsuario;
