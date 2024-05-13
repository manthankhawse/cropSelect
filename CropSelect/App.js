import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import YieldScreen from './screens/YieldScreen';
import CropScreen from './screens/CropScreen';
import DiseaseScreen from './screens/DiseaseScreen';
import FertilizerScreen from './screens/FertilizerScreen';
import ManualScreen from './screens/ManualScreen';
import YieldResult from './screens/YieldResult';
import { DataProvider } from './contexts/DataContexts';
import CropResult from './screens/CropResult';
import FertilizerResult from './screens/FertilizerResult';
import PriceResult from './screens/PriceResult';





export default function App() {
  const Stack = createNativeStackNavigator()
  return (
    <DataProvider>
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='YieldScreen' component={YieldScreen} options={{headerShown:false}}/>
          <Stack.Screen name='CropScreen' component={CropScreen} options={{headerShown:false}}/>
          <Stack.Screen name='DiseaseScreen' component={DiseaseScreen} options={{headerShown:false}}/>
          <Stack.Screen name='FertilizerScreen' component={FertilizerScreen} options={{headerShown:false}}/>
          <Stack.Screen name='ManualScreen' component={ManualScreen} options={{headerShown:false}}/>
          <Stack.Screen name='YieldResult' component={YieldResult} options={{headerShown:false}}/>
          <Stack.Screen name='CropResult' component={CropResult} options={{headerShown:false}}/>
          <Stack.Screen name='FertilizerResult' component={FertilizerResult} options={{headerShown:false}}/>
          <Stack.Screen name='PriceResult' component={PriceResult} options={{headerShown:false}}/>
        </Stack.Navigator>
      </SafeAreaProvider>
      </NavigationContainer>
      </DataProvider>
  );
}


