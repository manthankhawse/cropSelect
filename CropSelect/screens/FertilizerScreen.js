import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import fertilizer from '../assets/fertilizer.png'
import { crop_fert, soil_data } from '../utils/data'
import Dropdown from '../components/Dropdown'
import LoadingScreen from './LoadingScreen'
import { useData } from '../contexts/DataContexts'
import { useNavigation } from '@react-navigation/native'
import {FERT_API} from '@env'


const FertilizerScreen = () => {

  const {setFertilizer} = useData()
  const navigation = useNavigation()

  const [temp, setTemp] = useState("");
  const [humidity, setHumidity] = useState("");
  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [k, setK] = useState("");
  const [moisture, setMoisture] = useState("");
  const [crop, setCrop] = useState("");
  const [soil, setSoil] = useState("")
  const [loading, setLoading] = useState(false)

  const predict = async () => {
    try {
      setLoading(true);
      const res = await fetch(FERT_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Temperature:parseInt(temp),
          Humidity:parseInt(humidity),
          Moisture:parseInt(moisture),
          SoilType:soil,
          CropType:crop,
          Nitrogen:parseInt(n),
          Phosphorous:parseInt(p),
          Potassium :parseInt(k)
        })
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json(); // Parse response JSON
      // console.log(data); // Log the parsed data
      setFertilizer(data);
      setLoading(false);
      navigation.navigate("FertilizerResult");
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };
  return (
    <SafeAreaView style={{height: '100%'}}>
      {loading? <LoadingScreen/>:
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
      <View style={tw`flex flex-row items-center p-4 border-b-2 border-gray-400`}>
        <Image source={fertilizer} style={tw`h-9 w-9 mx-2`}/>
        <Text style={tw`text-2xl`}>Fertilizer Recommendation</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-xl font-semibold mx-9`}>Crop:</Text>
          <Dropdown style={tw`border border-gray-400`} data={crop_fert} setter={setCrop}/>
      </View>

      <View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-xl font-semibold mx-9`}>Soil:</Text>
          <Dropdown data={soil_data} setter={setSoil}/>
      </View>
        

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
        <Text style={tw`text-xl font-semibold mx-9`}>Temperature(°C):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mr-4 px-5`]} onChangeText={setTemp} value={temp}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Moisture(soil):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setMoisture} value={moisture}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Humidity(%):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setHumidity} value={humidity}/>
      </View> 
      <TouchableOpacity style={tw`mx-auto my-5`} onPress={predict}>
        <Text style={tw`text-2xl font-bold text-white bg-blue-400 px-3 py-2 rounded-lg`} >Predict</Text>
      </TouchableOpacity>      
      </View>
      </KeyboardAvoidingView>}
      
      
    </SafeAreaView>
  )
}

export default FertilizerScreen


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly'
  }
})