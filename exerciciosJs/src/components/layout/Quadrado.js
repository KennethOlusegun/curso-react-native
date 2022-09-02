import React from 'react'
import { View } from 'react-native'

export default props => {
	const lado = 50
   return (
	   <View style={{
			height: lado,
			widht: lado,
			backgroundColor: props.cor || '#000'
		}}>
	   
	 	</View>
	)
}