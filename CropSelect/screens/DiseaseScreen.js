import { Image, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import LoadingScreen from './LoadingScreen'
import tw from 'tailwind-react-native-classnames'
import plant from '../assets/commodity.png'
import { useNavigation } from '@react-navigation/native'
import { useData } from '../contexts/DataContexts'
import {PRICE_API} from '@env'

const DiseaseScreen = () => {
  const navigation = useNavigation()
  const {setPriceCrop, setPriceState, setPriceDistrict, setPriceMarket, setCropPrice} = useData()
  const [stateName, setStateName] = useState("")
  const [districtName, setDistrict] = useState("")
  const [marketName, setMarket] = useState("")
  const [cropName, setCrop] = useState("")
  const [varietyName, setVariety] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")
  const [day, setDay] = useState("")
  const [loading, setLoading] = useState(false)

  const predict = async ()=>{
    try {
      setLoading(true);
      const res = await fetch(PRICE_API, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: stateName,
          district: districtName,
          market: marketName,
          commodity: cropName,
          variety: varietyName,
          month: month,
          year: parseInt(year),
          day: parseInt(day)
        })
      });

      
      

      if (!res.ok) {
        throw new Error(`Network response was not ok ${res.status}`);
      }
  
      const data = await res.json(); // Parse response JSON
      setCropPrice(data);
      setPriceCrop(cropName)
      setPriceState(stateName)
      setPriceDistrict(districtName)
      setPriceMarket(marketName)
      setLoading(false);
      navigation.navigate("PriceResult")
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
        <Text style={tw`text-2xl`}>Crop Price Prediction</Text>
      </View>
      

      <View>

      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>State:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={stateName} onChangeText={setStateName} />
      </View>  
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>District:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={districtName} onChangeText={setDistrict}/>
      </View>  
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Market:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={marketName} onChangeText={setMarket}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Crop:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mr-4 px-5`]} value={cropName} onChangeText={setCrop}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-5`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Variety:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={varietyName} onChangeText={setVariety}/>
      </View>   
      <View style={tw`flex flex-row items-center justify-between my-4`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Month:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={month} onChangeText={setMonth}/>
      </View> 
      <View style={tw`flex flex-row items-center justify-between my-4`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Year:</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={year} onChangeText={setYear}/>
      </View> 
      <View style={tw`flex flex-row items-center justify-between my-4`}>
        <Text style={tw`text-xl font-semibold mx-9`}>Day (1-7):</Text>
        <TextInput style={[tw`w-36 h-10 border border-gray-400 rounded-xl mx-4 px-5`]} value={day} onChangeText={setDay}/>
      </View> 
      <TouchableOpacity style={tw`mx-auto my-5`}>
        <Text style={tw`text-xl font-bold text-white bg-blue-400 px-3 py-2 rounded-lg`} onPress={predict}>Predict</Text>
      </TouchableOpacity>      
      </View>
      </KeyboardAvoidingView>}
      
    </SafeAreaView>
    )
}

export default DiseaseScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'space-evenly'
  }
})