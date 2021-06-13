import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const IconLabel = ({ icon, label }) => {
	return (
		<View style={{ alignItems: 'center' }}>
			<Image
				source={icon}
				resizeMode="cover"
				style={{
					height: 50,
					width: 50,
				}}
			/>
			<Text style={styles.txt}>{label}</Text>
		</View>
	)
}

export default IconLabel

const styles = StyleSheet.create({
	txt: {
		marginTop: SIZES.padding,
		color: COLORS.gray,
		...FONTS.h3,
	},
})
