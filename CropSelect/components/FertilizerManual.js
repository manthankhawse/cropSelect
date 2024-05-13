import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const FertilizerManual = () => {
  return (
    <View style={tw`my-5`}>
    <View>
      <Text style={tw`font-bold my-2 text-xl w-80 mx-5 text-blue-400`}>User Guide: Fertilizer Recommendation Using ML Model</Text>
    </View>
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Introduction:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Welcome to the Fertilizer Recommendation ML Model user guide! This guide will walk you through the process of using our ML model to recommend suitable fertilizers based on input parameters such as temperature, moisture level, humidity, crop type, soil type, and nutrient levels.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Requirements:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Input parameters: temperature, moisture level, humidity, crop type, soil type, nitrogen level, phosphorus level, potassium level.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Input Parameters:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Enter the following input parameters required by the model:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>1.Temperature: Provide the temperature value in Celsius (°C).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>2.Moisture Level: Enter the moisture level as a percentage (%).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>3.Humidity: Input the humidity level as a percentage (%).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>4.Crop Type: Select the crop type from the available options.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>5.Soil Type: Choose the soil type from the available options.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>6.Nitrogen Level: Enter the nitrogen level in the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>7.Phosphorus Level: Input the phosphorus level in the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>8.Potassium Level: Provide the potassium level in the soil.</Text>
    </View>
    
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Generate Fertilizer Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Click on the "Recommend" button or submit the request to the API endpoint.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Wait for the model to process the input parameters and generate the recommendation.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>View Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Once the model has processed the input parameters, the recommended fertilizer will be displayed.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Review and Apply Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Use the recommendation to make informed decisions regarding fertilizer application.</Text>
    </View>
    </View>
  )
}

export default FertilizerManual

const styles = StyleSheet.create({})