import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import image from '../assets/icon.png'
import farmer from '../assets/farmer.png'
import Yield from '../assets/yield.png'
import plant from '../assets/plant.png'
import fertilizer from '../assets/fertilizer.png'
import commodity from '../assets/commodity.png'
import mannual from '../assets/user-guide.png'
import { useNavigation } from '@react-navigation/native'


const data = [
  {
      id:"123",
      title:"Yield Prediction",
      description:"Predict Yield, Production and revenue of your crop",
      image:Yield,
      screen:"YieldScreen"
  },
  {
      id:"456",
      title:"Crop Recommendation",
      description:"Get crop recommendations based on Soil type",
      image:plant,
      screen:"CropScreen"
  },
  {
    id:"789",
    title:"Fertilizer Advise",
    description:"Get fertilizer recommendations based on Soil type",
    image:fertilizer,
    screen:"FertilizerScreen"
},
{
  id:"987",
  title:"Crop Price Prediction",
  description:"Get price prediction for your crop",
  image:commodity,
  screen:"DiseaseScreen"
},
{
  id:"654",
  title:"User Manual",
  description:"Confused? Here's the guide to use the app",
  image:mannual,
  screen:"ManualScreen"
}
]

const HomeScreen = () => {

  const navigation = useNavigation()
  return (
    <SafeAreaView>
      <View style={tw`flex flex-row items-start justify-center h-full bg-green-400 flex py-14 relative`}>
        <View style={tw`flex flex-row items-center`}>
        <Image source={farmer} style={tw`h-12 w-12 p-3 rounded-full mx-3`}/>
        <Text style={[tw`text-4xl text-white font-bold`]}>CropSelect</Text>
        </View>
      </View>
      <View style={tw`absolute bg-white w-full h-full top-36 rounded-3xl`}>
        <Text style={[tw`text-2xl font-light mx-auto my-5`, {color:"#873e23"}]}>Main Menu</Text>

        <FlatList
        data={data}
        keyExtractor={(item)=>item.id}
        renderItem={({item})=>(
            
        <TouchableOpacity style={tw`flex flex-row items-center border border-gray-400 w-11/12 mx-auto p-1 rounded-lg mb-2`} onPress={()=>navigation.navigate(item.screen)}>
          <Image source={item.image} style={tw`h-24 w-24 rounded-xl`}/>
          <View style={tw`w-11/12 flex flex-wrap`}>
            <Text style={tw`text-xl font-semibold ml-4`}>{item.title}</Text>
            <Text style={tw`text-sm font-light ml-4 w-56`}>{item.description}</Text>
          </View>
        </TouchableOpacity>
        )}
    />
        
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  btn:{

  }
    
})