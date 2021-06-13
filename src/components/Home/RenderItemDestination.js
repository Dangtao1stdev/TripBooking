import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FONTS, SIZES } from '../../constants'
import { useNavigation } from '@react-navigation/native'
const RenderItemDestination = ({ item, index }) => {
	const navigation = useNavigation()
	return (
		<TouchableOpacity
			onPress={() => navigation.navigate('Detail')}
			style={[styles.btn, { marginLeft: index == 0 && SIZES.padding }]}
		>
			<Image
				source={item.img}
				resizeMode="cover"
				style={{
					width: SIZES.width * 0.28,
					height: '82%',
					borderRadius: 15,
				}}
			/>
			<Text style={styles.txt}>{item.name}</Text>
		</TouchableOpacity>
	)
}

export default RenderItemDestination

const styles = StyleSheet.create({
	btn: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: SIZES.base,
	},
	txt: {
		marginTop: SIZES.base / 2,
		...FONTS.h4,
	},
})
