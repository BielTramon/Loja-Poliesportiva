import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "./Home";
import Gerente from "./Gerente";

export default function App(){
  const Stack = createStackNavigator();
  return(
    <NavigationContainer screemOpitions={{headerShown: false}}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Gerente" component={Gerente}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}