import { View, Text } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loading = ({size=50,color="#fff"}) => {
  return (
    <View style={{justifyContent:'center',alignContent:'center'}}>
      <ActivityIndicator size={size} color={color}/>
    </View>
  )
}

export default Loading