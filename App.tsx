import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './screens/Home';
import About from './screens/About';
import Projects from './screens/Projects';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
// import { AppRoutes } from './screens/AppStack';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Projects') {
              iconName = focused ? 'folder-open' : 'folder-open-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />

          }
        })
        }>
        <Tab.Screen name="Home" component={Home} options={{ tabBarActiveTintColor: '#2f4f4f' }} />
        <Tab.Screen name="About" component={About} options={{ tabBarActiveTintColor: '#2f4f4f', }} />
        <Tab.Screen name="Projects" component={Projects} options={{ tabBarActiveTintColor: '#2f4f4f'}} />

      </Tab.Navigator>

    
    </NavigationContainer>



  );
}


// const Stack = createNativeStackNavigator();

// const AppRoutes = () => {

//   return (
//     <Stack.Navigator>
            
//                 <Stack.Screen name='AboutScreen' component={About} />
//                 <Stack.Screen name='ProjectsScreen' component={Projects} />
//                 <Stack.Screen name='DetailCantScreen' component={DetailCant} />

//             </Stack.Navigator>
//   )

// }


