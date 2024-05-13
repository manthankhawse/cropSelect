import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import logo from '../assets/farmerLoader.gif'
import tw from 'tailwind-react-native-classnames'


const LoadingScreen = () => {

  return (
    <View style={tw`bg-white h-full flex items-center`}>
      <Image source={logo} style={tw`h-36 w-36 mt-56`}/>
      <Text style={tw`text-blue-400 my-5 text-2xl font-semibold`}>Loading...</Text>
      <ActivityIndicator size="large" color='rgb(96 165 250)' style={tw`w-full my-3 mr-5`}/>
    </View>
  )
}

export default LoadingScreen

const styles = StyleSheet.create({})