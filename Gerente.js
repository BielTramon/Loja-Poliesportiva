import { StyleSheet, Text, View, TextInput, TouchableOpacity} from "react-native";
import { useState } from "react";


export default function Gerente({navigation}){

  const [username, setUsername] = useState('');
  const [senha, setSenha] = useState('');

  function Logar(){
      if (username === 'Tramon' && senha === '1234')
      {
          navigation.navigate('Notificacoes')
          setSenha('');
          setUsername('');
      }
      else
      {
          alert('Dados invalidos feio!!')
      }
  }
  return(
      <View style={styles.contaner}>
          <Text style={styles.text}>Cookébom.inc</Text>

          <TextInput style={styles.input}
          placeholder='Usuario'value={username} onChangeText={setUsername}>
          </TextInput>
          <TextInput style={styles.input}
          secureTextEntry='Senha' value={senha} onChangeText={setSenha}
          ></TextInput>

          <TouchableOpacity style={styles.botao} onPress={Logar}>
              <Text style={styles.botaotxt}>Login</Text>
          </TouchableOpacity>
      </View>
  )
}
const styles = StyleSheet.create({
  contaner: {
    justifyContent: 'center',
  },
  text: {
    marginBottom: 1,
    color: 'black',
    fontSize: 20,
    borderRadius: 10,
    backgroundColor: 10,

  },
  textD: {
    marginBottom: 250,
    fontSize: 40,
    color: '#725AC1'
  },
  textButton: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  Button: {
    marginBottom: 40,
    borderRadius: 20,
    backgroundColor: '#725AC1'
  }
});