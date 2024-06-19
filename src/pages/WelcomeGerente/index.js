import { View, Text, TextInput,StatusBar, TouchableOpacity, StyleSheet} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import React, {useState,useEffect } from 'react';
import axios from 'axios';

function WelcomeGerente() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function addFuncionario() {
        try {
            const response = await axios.post('http://localhost:3000/usuarios',{
            nome: nome,
            email: email,
            senha: senha,
            role: 'Funcionário',
            });
            console.log(response);
            if (response.status===200) alert("Funcionário cadastrado com sucesso!");
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
                <Text style={styles.welcomeText}>Cadastro de funcionário</Text>
                
                <View style={styles.credentialsContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Funcionário - Nome"
                        keyboardType="email-address"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Funcionário - Email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Funcionário - Senha"
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={setSenha}
                    />
                    <TouchableOpacity style={styles.confirmButton} onPress={addFuncionario}>
                        <Text style={styles.confirmButtonText}>Confirmar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.FuncManangement} onPress={() => navigation.navigate('FuncionarioManangement')}>
                        <Text style={styles.confirmButtonText}>Gerenciamento de Funcionários</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
 }

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
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ECECEC',
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
    },
    credentialsContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        alignItems: 'center',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 15,
        width: '100%',
    },
    confirmButton: {
        backgroundColor: '#4C00B7',
        paddingVertical: 15,
        borderRadius: 5,
        alignItems: 'center',
        width: '100%',
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

export default WelcomeGerente;