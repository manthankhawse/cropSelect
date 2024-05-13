import { Image, ScrollView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { useData } from '../contexts/DataContexts'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames'
import crop from '../assets/commodity.png'
import { useNavigation } from '@react-navigation/native'




const PriceResult = () => {

    const {priceCrop, priceState, priceDistrict, priceMarket, cropPrice} = useData()
    const navigation = useNavigation()
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={tw`flex justify-evenly items-center h-80`}>
        <Image source={crop} style={tw`h-36 w-36`}/>
        <Text style={tw`text-3xl font-semibold`}>Crop Price Prediction</Text>
      </View>
      <View style={tw`flex flex-row justify-around items-center`}>
        <View style={tw`w-48`}>
          <Text style={tw`text-md font-semibold`}>{priceCrop} Price at {priceMarket}, {priceDistrict}, {priceState}:</Text>
        </View>
        <View>
            <Text style={tw`text-md font-bold`}>Rs. {cropPrice}/Quintal</Text>
        </View>
      </View>

      <View style={tw`my-12`}>
        <Text style={[tw`text-lg font-semibold mx-7`, styles.heading]}>Use our other models as well!</Text>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Predict Yield, Production and revenue of your crop</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 text-white rounded-full`} onPress={()=>navigation.navigate("YieldScreen")}>➜</Text>
        </View>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Get fertilizer advise based on Soil type</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 text-white rounded-full`} onPress={()=>navigation.navigate("FertilizerScreen")}>➜</Text>
        </View>
        <View style={tw`flex flex-row items-center w-80 mx-auto justify-between my-4 border border-green-400 p-2`}>
          <Text style={tw`text-lg font-light w-56`}>Get crop recommendations based on Soil type</Text>
          <Text style={tw`text-3xl mx-3 bg-green-400 py-1 px-1.5 rounded-full text-white`} onPress={()=>navigation.navigate("CropScreen")}>➜</Text>
        </View>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default PriceResult

const styles = StyleSheet.create({})