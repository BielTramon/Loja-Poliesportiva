import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInUsuario from '../pages/SignInUsuario';
import SignUpUsuario from '../pages/SignUpUsuario';
import WelcomeUsuario from '../pages/WelcomeUsuario';
import CarrinhoUsuario from '../pages/CarrinhoUsuario';
import EngrenagemUsuario from '../pages/EngrenagemUsuario';
import CamisetaUsuario from '../pages/CamisetaUsuario';
import ShortsUsuario from '../pages/ShortsUsuario';
import MeiasUsuario from '../pages/MeiasUsuario';
import ChuteirasUsuario from '../pages/ChuteirasUsuario';
import JaquetasUsuario from '../pages/JaquetasUsuario';
import CalçasUsuario from '../pages/CalçasUsuario';
import CategoryRegistration from '../pages/WelcomeFuncionario/CategoryRegistration';
import BrandRegistration from '../pages/WelcomeFuncionario/BrandRegistration';
import Item from '../pages/WelcomeFuncionario/ItensManangement';
import WelcomeFuncionario from '../pages/WelcomeFuncionario';
import WelcomeGerente from '../pages/WelcomeGerente';
import Funcionarios from '../pages/WelcomeGerente/FuncionarioManangement';


const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignInUsuario"
                component={SignInUsuario}
                options={{headerShown: false}}
            />       
            <Stack.Screen
                name="SignUpUsuario"
                component={SignUpUsuario}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="WelcomeUsuario"
                component={WelcomeUsuario}
                options={{ headerShown: false }}
            />  
            <Stack.Screen
                name="CarrinhoUsuario"
                component={CarrinhoUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EngrenagemUsuario"
                component={EngrenagemUsuario}
                options={{ headerShown: false }}
            />  
            <Stack.Screen
                name="CamisetaUsuario"
                component={CamisetaUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ShortsUsuario"
                component={ShortsUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="MeiasUsuario"
                component={MeiasUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ChuteirasUsuario"
                component={ChuteirasUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="JaquetasUsuario"
                component={JaquetasUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CalçasUsuario"
                component={CalçasUsuario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="CategoryRegistration"
                component={CategoryRegistration}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="BrandRegistration"
                component={BrandRegistration}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="ItensManangement"
                component={Item}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WelcomeFuncionario"
                component={WelcomeFuncionario}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="WelcomeGerente"
                component={WelcomeGerente}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="FuncionarioManangement"
                component={Funcionarios}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
