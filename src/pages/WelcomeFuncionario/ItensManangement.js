import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function Item() {
    const [loading, setLoading] = useState(true) //tela de download
    const [itens, setItens] = useState("")


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
        const response = await axios.get("http://localhost:3000/itens"); //da um fetch nesse localhost
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
}

export default Item
