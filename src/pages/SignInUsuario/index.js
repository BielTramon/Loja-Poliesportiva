import React, {useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import axios from 'axios';

const Role = [
  {
    id: 1,
    name: 'Usuário'
  },
  {
    id: 2,
    name: 'Funcionário'
  },
  {
    id: 3,
    name: 'Gerente'
  },
]
function SignInForm() {
  const [usuarios, setUsuarios] = useState([])
  const [loading, setLoading] = useState(true) //tela de download
  const [role, setRole] = useState("Selecione sua função");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigation = useNavigation();

  const FuncionarioEnter = () => {
    navigation.navigate('FuncionarioMain');
  };

  const handleSignUpClick = () => {
    navigation.navigate('SignUpUsuario');
  };

  async function getClientes() {
    try {
      setTimeout(async () => { //caso queira tirar o setTimeout, é só botar o async antes do function e tirar o setTimeout
        const response = await axios.get("http://localhost:3000/usuarios"); //da um fetch nesse localhost
        console.log(usuarios)
        setUsuarios(response.data.usuarios); //pega os dados do response e armazena em clientes
        setLoading(false);
        usuarios.map((usuario) => {
        console.log(email)
        console.log(usuario.email);
        if (email === usuario.email && usuario.senha === senha) {
          //if(senha == usuario.senha) {
          if(role == "Usuário") {
            navigation.navigate('WelcomeUsuario');
          }
          else if (role == "Funcionário"){
            // navigation.navigate('FuncionarioMain')
            navigation.navigate('WelcomeFuncionario')
          }
          else if (role == "Gerente") {
            navigation.navigate('WelcomeGerente');
          }
        }  
        else {
          alert("Credenciais erradas, por favor tente novamente.")
        }
      })
    }, 1000);
    }
    catch (error) {
    new Error(error);
    }
  }

  useEffect(() => {
    getClientes();
  }, []);


  const Select = ({options, onChangeSelect, text}) => {
    // const [txt, setTxt] = useState(text);

    const [modalVisible, setModalVisible] = useState(false)
    function renderOption(item){
      return (
        <TouchableOpacity style={styles.select} onPress={()=> {
          onChangeSelect(item.name);
          // setTxt(item.name);
          setModalVisible(false);
        }}>
          <Text style={styles.textSelect}>{item.name}</Text>
        </TouchableOpacity>
        
      );
    }
    return <View>
      <TouchableOpacity onPress={()=> setModalVisible(true)} style={styles.inputContainer}>
        <Text style = {styles.input}>{role}</Text>
      </TouchableOpacity>
      <Modal animationType='slide' visible={modalVisible} onRequestClose={()=> setModalVisible(false)}>
        <SafeAreaView>
          <View style={styles.headerModal}>
            <TouchableOpacity onPress={()=> setModalVisible(false)}>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{text}</Text>
            <TouchableOpacity onPress={()=> setModalVisible(false)}>
              <Text style={styles.modalCancel}>Cancelar</Text>
            </TouchableOpacity>
          </View>
          <View>
            <FlatList
              data={options ?? []} 
              keyExtractor={(item) =>String(item.id)}
              renderItem={({item})=>renderOption(item)}>  </FlatList>
          </View>
        </SafeAreaView>
      </Modal>
    </View>
  }
  const handleEntrarClick = () => {
    navigation.navigate('WelcomeUsuario');
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.sportshub}>SPORTSHUB</Text>
      <View style={styles.formulario}>
        <Text style={styles.formularioTitulo}>Faça login</Text>
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
        <View>
          <Select
            options={Role}
            onChangeSelect={(nome)=> setRole(nome)}
            text={role}/>
        </View>
        <TouchableOpacity style={styles.botaoEntrar} onPress={getClientes}>
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
    fontFamily: 'arial',
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
  select: {
    height: 50,
    backgroundColor: '#F8F9FA',
    paddingHorizontal: 12,
    marginHorizontal: 20,
    borderRadius: 8,
    fontSize: 18,
    borderColor: '#CCC',
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textSelect: {
    color: '#555',
    fontSize: 16
  },
  headerModal: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    paddingBottom: 12,
    marginTop: 10,
  },
  modalTitle: {
    fontSize: 18,
    color: '#555',
  },
  modalCancel: {
    fontSize: 14,
    color: 'blue',
    fontWeight: '600'
  },
  boxSelect: {
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#fff',
    padding: 15,
    fontSize: 16,
    borderRadius: 10,
  }
});

export default SignInForm;
