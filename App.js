import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { GoogleMapsScreen } from './screens/GoogleMapsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Placesdetails from './screens/Placesdetails';
import PlacesList from './screens/PlacesList';


const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='PlacesList' screenOptions={{statusBarColor: 'green',headerTintColor: 'green',headerTitleAlign: 'center'
    }}>
        <Stack.Screen name='PlacesList' component={PlacesList} />
        <Stack.Screen name='Placesdetails' component={Placesdetails} />
    
        </Stack.Navigator>
      </NavigationContainer>
  );
}

