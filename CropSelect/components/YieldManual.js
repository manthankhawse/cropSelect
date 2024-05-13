import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'

const YieldManual = () => {
  return (
    <View style={tw`my-5`}>
    <View>
      <Text style={tw`font-bold my-2 text-xl w-80 mx-5 text-blue-400`}>User Guide: Yield Prediction Using ML Model</Text>
    </View>
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Introduction:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Welcome to the Yield Prediction ML Model user guide! This guide will assist you in using our ML model to predict crop yield based on input parameters such as crop type, agricultural season, state, area, annual rainfall, fertilizer usage, and pesticide application.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Requirements:</Text>
    </View>
    <View>
        <Text style={tw`ml-5 w-11/12 text-lg font-light`}>Input parameters: Crop type, agricultural season, state, area, annual rainfall, fertilizer usage, pesticide application.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Input Parameters:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Enter the following input parameters required by the model:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>1.Crop Type:Select the crop type from the available options.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>2.Agricultural Season: Choose the agricultural season.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>3.State: Specify the state where the crop is being cultivated.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>4.Area: Enter the area of land under cultivation (in acres).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>5.Annual Rainfall: Provide the annual rainfall received in the cultivation area (in millimeters).</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>6.Fertilizer Usage: Input the type and quantity of fertilizer applied.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>7.Pesticide Application: Specify the type and quantity of pesticide used.</Text>
    </View>
    
    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Generate Yield Prediction:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Click on the "Predict" button or submit the request to the API endpoint.</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Wait for the model to process the input parameters and generate the yield prediction.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>View Yield Prediction:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Once the model has processed the input parameters, the predicted yield for the specified crop will be displayed.</Text>
    </View>

    <View>
        <Text style={tw`mx-5 text-lg font-semibold my-2`}>Review and Apply Prediction:</Text>
        <Text style={tw`ml-5 my-1 w-11/12 text-lg font-light`}>Use the predicted yield to make informed decisions regarding crop management, harvesting, and marketing strategies.</Text>
    </View>
    </View>
  )
}

export default YieldManual

const styles = StyleSheet.create({})