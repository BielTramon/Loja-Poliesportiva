import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function Brand() {
    const [loading, setLoading] = useState(true) //tela de download
    const [marcas, setMarcas] = useState("")

  async function getBrand() {
    try {
      setTimeout(async () => { //caso queira tirar o setTimeout, é só botar o async antes do function e tirar o setTimeout
        const response = await axios.get("http://localhost:3000/marca"); //da um fetch nesse localhost
        setMarcas(response.data.marcas); //pega os dados do response e armazena em clientes
        setLoading(false);
      }, 1000);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getBrand();
  }, []);

  return ( 
    <View>
      <Text>Marcas Disponíveis</Text>
      {loading && marcas.length === 0 ? (
        <h3>Carregando...</h3>
      ) : (
        marcas.map((marca) => {
          return (
            <View
              key={marca.nome}
              style={{
                display:"flex",
                alignItens: "center",
                border: "1px solid red",
                gap: 10,
                flexDirection: "column",
              }}
            >
                <Text>Código: {marca.codigo}</Text> 
                <Text>Nome: {marca.nome}</Text>
            </View>
          );
        })
      )}
    </View>
  );
}

export default Brand
