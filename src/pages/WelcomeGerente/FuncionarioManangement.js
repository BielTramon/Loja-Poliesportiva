import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function Funcionarios() {
    const [loading, setLoading] = useState(true) //tela de download
    const [roles, setRoles] = useState([])
    const role = 'Funcionário';


  async function FuncionarioDelete(codigo) {
      try {
        const response = await axios.delete(`http://localhost:3000/usuarios?codigo=${codigo}`);
        console.log(response);
        if (response.status === 200) alert("Funcionário deletado com sucesso!");
        getFuncionario();
      } catch (error) {
        new Error(error);
      }
  }
  async function getFuncionario() {
    try {
      setTimeout(async () => { //caso queira tirar o setTimeout, é só botar o async antes do function e tirar o setTimeout
        const response = await axios.get(`http://localhost:3000/usuarios?role=${role}`); //da um fetch nesse localhost
        setRoles(response.data.roles); //pega os dados do response e armazena em clientes
        console.log(roles);
        setLoading(false);
      }, 1000);
    } catch (error) {
      new Error(error);
    }
  }

  useEffect(() => {
    getFuncionario();
  }, []);

  return ( 
    <View>
      <Text>Funcionários Disponíveis</Text>
      {loading && roles.length === 0 ? (
        <h3>Carregando...</h3>
      ) : (
        roles.map((usuario) => {
          return (
            <View
              key={usuario.nome}
              style={{
                display:"flex",
                alignItens: "center",
                border: "1px solid red",
                gap: 10,
                flexDirection: "column",
              }}
            >
                <Text>Código: {usuario.codigo}</Text> 
                <Text>Nome: {usuario.nome}</Text>
                <Text>Email: {usuario.email}</Text>
                <Text>Senha: {usuario.senha}</Text>
                <TouchableOpacity onPress={() => FuncionarioDelete(usuario.codigo)}>
                  <Text>Deletar Funcionário</Text>
                </TouchableOpacity>
            </View>
          );
        })
      )}
    </View>
  );
}

export default Funcionarios
