// routes.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInUsuario from '../pages/SignInUsuario';
import SignUpUsuario from '../pages/SignUpUsuario';
import WelcomeUsuario from '../pages/WelcomeUsuario';

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
        </Stack.Navigator>
    )
}
