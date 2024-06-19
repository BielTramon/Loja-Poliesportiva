import { View, Text, TextInput,StatusBar, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function ShortsUsuario() {
    const [loading, setLoading] = useState(true) //tela de download
    const [itens, setItens] = useState("")
    const codcategoria = 2;


  async function ItemDelete(codigo) {
      try {
        const response = await axios.delete(`http://localhost:3000/itens?codigo=${codigo}`);
        console.log(response);
        if (response.status === 200) alert("Item deletado com sucesso!");
        getItem();
      } catch (error) {
        new Error(error);
      }
  }
  async function getItem() {
    try {
      setTimeout(async () => { //caso queira tirar o setTimeout, é só botar o async antes do function e tirar o setTimeout
        const response = await axios.get(`http://localhost:3000/itens?codcategoria=${codcategoria}`);; //da um fetch nesse localhost
        setItens(response.data.itens); //pega os dados do response e armazena em clientes
        setLoading(false);
      }, 1000);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getItem();
  }, []);

    const handleCarrinhoPress = () => {
        navigation.navigate('CarrinhoUsuario');
    };

    const handleEngrenagemPress = () => {
        navigation.navigate('EngrenagemUsuario');
    };

    return ( 
        <View>
        <Text>Itens Disponíveis</Text>
        {loading && itens.length === 0 ? (
          <h3>Carregando...</h3>
        ) : (
            itens.map((item) => {
            return (
              <View
                key={item.nome}
                style={{
                  display:"flex",
                  alignItens: "center",
                  border: "1px solid red",
                  gap: 10,
                  flexDirection: "column",
                }}
              >
                  <Text>Código: {item.codigo}</Text> 
                  <Text>Nome: {item.nome}</Text>
                  <Text>Código da Categoria: {item.codcategoria}</Text>
                  <Text>Código da marca: {item.codmarca}</Text>
                  <Text>Cor: {item.cor}</Text>
                  <Text>Preco: {item.preco}</Text>
                  <TouchableOpacity onPress={() => ItemDelete(item.codigo)}>
                    <Text>Deletar Item</Text>
                  </TouchableOpacity>
              </View>
            );
          })
        )}
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
