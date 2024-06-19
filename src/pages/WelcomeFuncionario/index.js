import { View, Text, TextInput,StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function WelcomeFuncionario() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [codcategoria, setCodcategoria] = useState(0);
    const [codmarca, setCodmarca] = useState(0);
    const [cor, setCor] = useState("");
    const [preco, setPreco] = useState(0);
  
    async function addItem() {
      console.log(nome)
      console.log(codcategoria === String)
      try {
        const response = await axios.post('http://localhost:3000/itens',{
          nome: nome,
          codcategoria: codcategoria,
          codmarca: codmarca,
          cor: cor,
          preco: preco,
        });
        console.log(response);
        if (response.status===200) alert("Produto cadastrado com sucesso!");
      } catch (error) {
        new Error(error)
      }
    }
    

    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#fff" />
            <View style={styles.topBar}>
                <Text style={styles.sportshub}>SPORTSHUB</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.welcomeText}>Cadastrar produtos</Text>
                
                <View style={styles.productsContainer}>
                    <View style={styles.productRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o nome do produto"
                            keyboardType="default"
                            value={nome}
                            onChangeText={setNome}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o código da categoria"
                            value={codcategoria}
                            onChangeText={setCodcategoria}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o código da marca"
                            value={codmarca}
                            onChangeText={setCodmarca}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Insira a cor do produto"
                            value={cor}
                            onChangeText={setCor}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Insira o preço do produto"
                            value={preco}
                            onChangeText={setPreco}
                        />
                        <TouchableOpacity style={styles.confirmButton} onPress={addItem}>
                            <Text style={styles.confirmButtonText}>Confirmar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.FuncManangement} onPress={() => navigation.navigate('CategoryRegistration')}>
                            <Text style={styles.confirmButtonText}> Clique aqui para ver as categorias disponíveis</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.FuncManangement} onPress={() => navigation.navigate('BrandRegistration')}>
                                <Text style={styles.confirmButtonText}> Clique aqui para ver as marcas disponíveis</Text>
                        </TouchableOpacity>
                        </View>
                        <View>
                        <TouchableOpacity style={styles.FuncManangement} onPress={() => navigation.navigate('ItensManangement')}>
                                <Text style={styles.confirmButtonText}> Clique aqui para ver gerenciar os itens disponíveis</Text>
                    </TouchableOpacity>
                    </View>
                </View>
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
        textAlign: 'center',
    },
    topBar: {
        backgroundColor: '#fff',
        height: 90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    content: {
        alignItems: 'center',
        backgroundColor: '#ECECEC',
        flex: 1,
        justifyContent: 'center',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    productsContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
    },
    productRow: {
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    confirmButton: {
        backgroundColor: '#4C00B7',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
    },
    confirmButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    FuncManangement: {
        backgroundColor: '#4F46E5',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
        alignItems: 'left',
        
      },
});

export default WelcomeFuncionario;


