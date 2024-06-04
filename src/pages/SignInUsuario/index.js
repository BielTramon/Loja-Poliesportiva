
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function SignInForm() {
  const navigation = useNavigation();

  const handleSignUpClick = () => {
    navigation.navigate('SignUpUsuario');
  };

  const handleEntrarClick = () => {
    navigation.navigate('WelcomeUsuario');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.sportshub}>SPORTSHUB</Text>
      <View style={styles.formulario}>
        <View style={styles.botoesContainer}>
          <TouchableOpacity style={styles.botaoUser}>
            <Text style={styles.textoUser}>Gerente</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoUser}>
            <Text style={styles.textoUser}>Funcionário</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botaoUser}>
            <Text style={styles.textoUser}>Usuário</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.formularioTitulo}>Faça login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.botaoEntrar} onPress={handleEntrarClick}>
          <Text style={styles.textoEntrar}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.linkBotao}>
          <Text>
            Não possui uma conta? <Text style={styles.linkTexto} onPress={handleSignUpClick}>Crie uma conta</Text>
          </Text>
        </View>
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
  linkBotao: {
    marginTop: 20,
    alignItems: 'center',
  },
  linkTexto: {
    color: '#6B7280',
    textDecorationLine: 'underline',
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
