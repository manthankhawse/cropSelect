import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Yield from '../assets/yield.png'
import tw from 'tailwind-react-native-classnames'
import Dropdown from '../components/Dropdown'
import { crop_data, season_data, state_data } from '../utils/data'
import LoadingScreen from './LoadingScreen'
import { useData } from '../contexts/DataContexts'
import { useNavigation } from '@react-navigation/native'
import {YIELD_API} from '@env'

const YieldScreen = () => {

  const {setYieldCrop, setYieldArea,setYieldVal} = useData()
  const navigation = useNavigation()


  const [crop, setCrop] = useState("Arecnut");
  const [season, setSeason] = useState("Whole Year");
  const [stateName, setStateName] = useState("Assam");
  const [area, setArea] = useState('');
  const [rainfall, setRainfall] = useState('')
  const [fertilizer, setFertilizer] = useState('');
  const [pesticide, setPesticide] = useState('');
  const [loading, setLoading] = useState(false);

  const predict = async () => {
    try {
      setLoading(true);
      const res = await fetch(YIELD_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Crop: crop,
          Season: season,
          State: stateName,
          Area: parseFloat(area), // Parse area to float
          Annual_Rainfall: parseFloat(rainfall), // Parse rainfall to float
          Fertilizer: parseFloat(fertilizer), // Parse fertilizer to float
          Pesticide: parseFloat(pesticide), // Parse pesticide to float
        })
      });
  
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await res.json(); // Parse response JSON
      // console.log(data); // Log the parsed data
      setYieldArea(parseFloat(area))
      setYieldCrop(crop)
      setYieldVal(data)
      setLoading(false);
      navigation.navigate('YieldResult')

    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };



  return (
    
    <SafeAreaView style={{height: '100%'}}>
      {loading? <LoadingScreen/>:
      <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === "ios" ? "padding" : "height"}>
      
      <View style={tw`flex flex-row items-center p-4 border-b-2 border-gray-400`}>
        <Image source={Yield} style={tw`h-9 w-9 mx-2`}/>
        <Text style={tw`text-2xl`}>Yield Prediction</Text>
      </View>
      <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-xl font-semibold mx-9`}>Crop:</Text>
          <Dropdown style={tw`border border-gray-400`} data={crop_data} setter={setCrop}/>
      </View>

      <View>
        <View style={tw`flex flex-row items-center justify-between`}>
          <Text style={tw`text-xl font-semibold mx-9`}>Season:</Text>
          <Dropdown data={season_data} setter={setSeason}/>
      </View>
        

      <View style={tw`flex flex-row items-center justify-between`}>
        <Text style={tw`text-xl font-semibold mx-9`}>State:</Text>
        <Dropdown data={state_data} setter={setStateName}/>
      </View>

      <View style={tw`flex flex-row items-center justify-between my-7`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Area(Ha):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setArea} value={area}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-7`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Rainfall(in mm):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mr-4 px-5`]} onChangeText={setRainfall} value={rainfall}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-7`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Fertilizer(kg):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setFertilizer} value={fertilizer}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-7`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Pesticide(kg):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} onChangeText={setPesticide} value={pesticide}/>
      </View> 
      <TouchableOpacity style={tw`mx-auto my-5`} onPress={predict}>
        <Text style={tw`text-2xl font-bold text-white bg-blue-400 px-3 py-2 rounded-lg`} >Predict</Text>
      </TouchableOpacity>      
      </View>
      </KeyboardAvoidingView>}
      
      
    </SafeAreaView>
    
  )
}

export default YieldScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly'
  }
})