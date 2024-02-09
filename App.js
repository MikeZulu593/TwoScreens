import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome } from "@expo/vector-icons";
import Bienvenido from "./components/Bienvenido";
import Form from "./components/Form";
/*SE REALIZAN LOS IMPORTS DE CADA VENTANA Y CADA VENTANA TIENE YA EL IMPORT DE STYLES
ADEMÁS DE LOS COMPONENTES NECESARIOS*/


const Tab = createBottomTabNavigator();
//NAVIGATION CONTAINER PARA EL NAVEGADOR
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "black",  
          tabBarInactiveTintColor: "black", //COLORES DE LOS TEXTOS
        }}
      >
        <Tab.Screen
          name="Inicio"
          component={Bienvenido}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="home" size={33} color="#666666" />
            ),
          }}
        />
        <Tab.Screen
          name="Formulario"
          component={Form}
          options={{
            tabBarIcon: () => (
              <FontAwesome name="wpforms" size={33} color="#666666" /> //ICONOS
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
