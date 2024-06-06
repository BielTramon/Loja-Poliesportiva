import { View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function SignInForm() {
  const navigation = useNavigation();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function addUser() {
    console.log(nome)
    try {
      const response = await axios.post('http://localhost:3000/usuarios',{
        nome: nome,
        email: email,
        senha: senha,
        role: 'Usuário',
      });
      console.log(response);
      if (response.status===200) alert("usuários cadastrado com sucesso!");
    } catch (error) {
      new Error(error)
    }
  }
    //navigation.navigate('WelcomeUsuario')
    return (
      <View style={styles.container}>
        <Text style={styles.sportshub}>SPORTSHUB</Text>
        <View style={styles.formulario}>
          <Text style={styles.formularioTitulo}>Crie uma conta</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu usuário"
              keyboardType="email-address"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
          </View>
          <TouchableOpacity style={styles.botaoEntrar} onPress={addUser}>
            <Text style={styles.textoEntrar}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  sportshub: {
    fontFamily: 'Karantina',
    color: '#4C00B7',
    fontSize: 50,
    padding: 20,
    marginTop: -50,
    position: 'absolute',
    top: 80,
  },
  formulario: {
    backgroundColor: '#fff',
    padding: 20,
    maxWidth: 350,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 15,
    elevation: 5,
  },
  formularioTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
  },
  botaoEntrar: {
    backgroundColor: '#4F46E5',
    paddingVertical: 15,
    borderRadius: 10,
  },
  textoEntrar: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  botaoUser: {
    backgroundColor: '#4F46E5',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  textoUser: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
});

export default SignInForm;
