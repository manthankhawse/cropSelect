import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ManualDropdown from '../components/ManualDropdown'
import tw from 'tailwind-react-native-classnames'
import guide from '../assets/user-guide.png'
import YieldManual from '../components/YieldManual'
import CropManual from '../components/CropManual'
import FertilizerManual from '../components/FertilizerManual'
import DiseaseManual from '../components/DiseaseManual'

const ManualScreen = () => {

  const [model, setModel] = useState('1')
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={tw`flex flex-row items-center p-4 border-b-2 border-gray-400 mt-5`}>
        <Image source={guide} style={tw`h-9 w-9 mx-2`}/>
        <Text style={tw`text-2xl`}>User Manual</Text>
      </View>
      <ManualDropdown setter = {setModel}/>
      <View>
        {model==='1'?<YieldManual/>:model==='2'?<CropManual/>:model==='3'?<FertilizerManual/>:<DiseaseManual/>}
      </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default ManualScreen

const styles = StyleSheet.create({})