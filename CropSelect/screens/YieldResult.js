import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useData } from '../contexts/DataContexts'
import { SafeAreaView } from 'react-native-safe-area-context'
import Yield from '../assets/yield.png'
import tw from 'tailwind-react-native-classnames'
import { useNavigation } from '@react-navigation/native'
import { yield_tips } from '../utils/tips'
import idea from '../assets/idea.png'


const YieldResult = () => {

  const navigation = useNavigation()
  const {yieldVal, yieldArea, yieldCrop} = useData()
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={tw`flex justify-evenly items-center h-80`}>
        <Image source={Yield} style={tw`h-36 w-36`}/>
        <Text style={tw`text-3xl font-semibold`}>Yield Prediction</Text>
      </View>
      <View>
        <View style={tw`flex flex-row justify-between w-80 mx-auto my-1`}>
          <Text style={tw`text-xl`}>Predicted Yield:</Text>
          <Text style={tw`text-xl font-bold`}>{yieldVal.toPrecision(5)*10} q/Ha</Text>
        </View>
        <View style={tw`flex flex-row justify-between w-80 mx-auto my-1`}>
          <Text style={tw`text-xl`}>Production:</Text>
          <Text style={tw`text-xl font-bold`}>{(yieldArea*yieldVal*10).toPrecision(5)} Quintals</Text>
        </View>
      </View>

      <View style={tw`my-11`}>
        <View style={tw`flex flex-row items-center mx-2 my-2`}>
          <Image source={idea} style={tw`h-10 w-10`}/>
          <Text style={[tw`text-xl w-80 font-semibold`, styles.heading]}>Tips on improving yield of {yieldCrop}:</Text>
        </View>
        {yield_tips[yieldCrop].tips.map((tip)=>{
          return (
            <Text style={tw`w-80 mx-auto font-semibold my-1`}>{tip}</Text>
          )
        })}
      </View>

      <View>
        <Text style={[tw`text-lg font-semibold mx-7`, styles.heading]}>Use our other models as well!</Text>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Get crop recommendations based on Soil type</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 text-white rounded-full`} onPress={()=>navigation.navigate("CropScreen")}>➜</Text>
        </View>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Get fertilizer advise based on Soil type</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 text-white rounded-full`} onPress={()=>navigation.navigate("FertilizerScreen")}>➜</Text>
        </View>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Predict price for crops</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 rounded-full text-white`} onPress={()=>navigation.navigate("DiseaseScreen")}>➜</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default YieldResult

const styles = StyleSheet.create({
  heading:{
    color:"#873e23"
  }
})