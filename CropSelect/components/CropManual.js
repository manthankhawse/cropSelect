import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'


const CropManual = () => {
  return (
    <View style={tw`my-5`}>
    <View>
      <Text style={tw`font-bold my-2 text-xl w-80 mx-5 text-blue-400`}>User Guide: Crop Recommendation Using ML Model</Text>
    </View>
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Introduction:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Welcome to the Crop Recommendation ML Model user guide! This guide will assist you in using our ML model to recommend suitable crops based on input parameters such as nitrogen (N), phosphorus (P), potassium (K) levels, temperature, humidity, pH level, and rainfall.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Requirements:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Input parameters: N (nitrogen), P (phosphorus), K (potassium) levels, temperature, humidity, pH level, rainfall.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Input Parameters:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Enter the following input parameters required by the model:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>1.Nitrogen Level (N): Provide the nitrogen level in the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>2.Phosphorus Level (P): Input the phosphorus level in the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>3.Potassium Level (K): Provide the potassium level in the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>4.Temperature: Enter the temperature value in Celsius (°C).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>5.Humidity: Input the humidity level as a percentage (%).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>6.pH Level: Specify the pH level of the soil.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>7.Rainfall: Provide the average rainfall received in the cultivation area (in millimeters).</Text>
    </View>
    
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Generate Crop Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Click on the "Recommend" button or submit the request to the API endpoint.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Wait for the model to process the input parameters and generate crop recommendation.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>View Crop Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Once the model has processed the input parameters, the recommendation of a specific crop will be displayed.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Review and Apply Recommendation:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Use the predicted yield to make informed decisions regarding crop management, harvesting, and marketing strategies.</Text>
    </View>
    </View>
  )
}

export default CropManual

const styles = StyleSheet.create({})