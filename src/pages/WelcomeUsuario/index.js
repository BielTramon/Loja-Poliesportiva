import { View, Text, TextInput,StatusBar, TouchableOpacity, StyleSheet,ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function WelcomeUsuario() {
    const navigation = useNavigation();

    const handleCarrinhoPress = () => {
        navigation.navigate('CarrinhoUsuario');
    };

    const handleEngrenagemPress = () => {
        navigation.navigate('EngrenagemUsuario');
    };

    const handleProductPress = (screen) => {
        navigation.navigate(screen);
    };

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.topBar}>
                <View style={styles.leftIcons}>
                    <TouchableOpacity onPress={handleCarrinhoPress}>
                        {/* <Image source={require('../../assets/carrinho.png')} style={styles.carrinhoImage} /> */}
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleEngrenagemPress}>
                        {/* <Image source={require('../../assets/engrenagem.png')} style={styles.engrenagemImage} /> */}
                    </TouchableOpacity>
                </View>
                <Text style={styles.sportshub}>SPORTSHUB</Text>
            </View>

            {/* Conteúdo Principal */}
            <ScrollView contentContainerStyle={styles.content}>
                <Text style={styles.welcomeText}>Produtos</Text>
                
                <View style={styles.productsContainer}>
                    <View style={styles.productRow}>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('CamisetaUsuario')}>
                            {/* <Image source={require('../../assets/camiseta.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Camisetas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('ShortsUsuario')}>
                            {/* <Image source={require('../../assets/shorts.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Shorts</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productRow}>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('MeiasUsuario')}>
                            {/* <Image source={require('../../assets/meia.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Meias</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('ChuteirasUsuario')}>
                            {/* <Image source={require('../../assets/chuteira.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Chuteiras</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.productRow}>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('JaquetasUsuario')}>
                            {/* <Image source={require('../../assets/jaqueta.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Jaquetas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.productBox} onPress={() => handleProductPress('CalçasUsuario')}>
                            {/* <Image source={require('../../assets/calça.png')} style={styles.productImage} /> */}
                            <Text style={styles.productText}>Calças</Text>
                        </TouchableOpacity>
                    </View>
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
    leftIcons: {
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
    productsContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        width: '90%',
    },
    productRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    productBox: {
        backgroundColor: '#ECECEC',
        flex: 1,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        borderRadius: 10,
    },
    productImage: {
        width: 120,
        height: 120,
        marginBottom: 5,
    },
    productText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4C00B7',
    },
});

export default WelcomeUsuario;
