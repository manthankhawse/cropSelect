import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import plant from '../assets/plant.png'
import LoadingScreen from './LoadingScreen'
import { useData } from '../contexts/DataContexts'
import { useNavigation } from '@react-navigation/native'
import {CROP_API} from '@env'


const CropScreen = () => {

  const {setRecCrop} = useData()
  const navigation = useNavigation()

  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [ph, setPh] = useState("");
  const [rainfall, setRainfall] = useState("");
  const [loading, setLoading] = useState(false);
  const predict = async ()=>{
    try {
      setLoading(true);
      const res = await fetch(CROP_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          temperature:parseFloat(temp),
          humidity:parseFloat(humidity),
          rainfall:parseFloat(rainfall),
          ph:parseFloat(ph),
          N:parseInt(n),
          P:parseInt(p),
          K:parseInt(k)
        })
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json(); // Parse response JSON
      // console.log(data); // Log the parsed data
      setRecCrop(data);
      setLoading(false);
      navigation.navigate("CropResult")
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  }

  return (
    
    <SafeAreaView style={{height: '100%'}}>
      {loading? <LoadingScreen/>:
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
      <View style={tw`flex flex-row items-center p-4 border-b-2 border-gray-400`}>
        <Image source={plant} style={tw`h-9 w-9 mx-2`}/>
        <Text style={tw`text-2xl`}>Crop Recommendation</Text>
      </View>
      

      <View>

      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Nitrogen(%):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setN} value={n}/>
      </View>  
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold ml-9`}>Phosphorous(%):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setP} value={p}/>
      </View>  
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Potassium(%):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setK} value={k}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold ml-9`}>Rainfall(in mm):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mr-4 px-5`]} onChangeText={setRainfall} value={rainfall}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-7`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Humidity(%):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setHumidity} value={humidity}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold ml-9`}>Temperature(°C):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setTemp} value={temp}/>
      </View> 
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>pH:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setPh} value={ph}/>
      </View> 
      <TouchableOpacity style={tw`mx-auto my-5`} onPress={predict}>
        <Text style={tw`text-2xl font-bold text-white bg-blue-400 px-3 py-2 rounded-lg`} >Recommend</Text>
      </TouchableOpacity>      
      </View>
      </KeyboardAvoidingView>}
      
    </SafeAreaView>

  )
}

export default CropScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly',
  }
})