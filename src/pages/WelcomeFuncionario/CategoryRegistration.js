import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function Category() {
    const [loading, setLoading] = useState(true) //tela de download
    const [categorias, setCategorias] = useState("")

    async function CategoriaDelete(codigo) {
      try {
        const response = await axios.delete(`http://localhost:3000/categoria?codigo=${codigo}`);
        console.log(response);
        if (response.status === 200) alert("Categoria deletada com sucesso!");
        getCategory();
      } catch (error) {
        new Error(error);
      }
  }

  async function getCategory() {
    try {
      setTimeout(async () => { //caso queira tirar o setTimeout, é só botar o async antes do function e tirar o setTimeout
        const response = await axios.get("http://localhost:3000/categoria"); //da um fetch nesse localhost
        setCategorias(response.data.categorias); //pega os dados do response e armazena em clientes
        setLoading(false);
      }, 1000);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getCategory();
  }, []);

  return ( 
    <View>
      <Text>Categorias Disponíveis</Text>
      {loading && categorias.length === 0 ? (
        <h3>Carregando...</h3>
      ) : (
        categorias.map((categoria) => {
          return (
            <View
              key={categoria.nome}
              style={{
                display:"flex",
                alignItens: "center",
                border: "1px solid red",
                gap: 10,
                flexDirection: "column",
              }}
            >
                <Text>Código: {categoria.codigo}</Text> 
                <Text>Nome: {categoria.nome}</Text>
                <TouchableOpacity onPress={() => CategoriaDelete(categoria.codigo)}>
                  <Text>Deletar Categoria</Text>
                </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
}

export default Category
