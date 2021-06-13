import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, icons, SIZES } from '../../constants'

const StarReview = ({ rate }) => {
	var starComponent = []
	var fullStar = Math.floor(rate)
	var noStar = Math.floor(5 - rate)
	var halfStar = 5 - fullStar - noStar

	// Full Star
	for (i = 0; i < fullStar; i++) {
		starComponent.push(
			<Image
				key={'full' + i.toString()}
				source={icons.starFull}
				resizeMode="cover"
				style={{
					width: 20,
					height: 20,
				}}
			/>
		)
	}
	// Half Star
	for (i = 0; i < halfStar; i++) {
		starComponent.push(
			<Image
				key={'half' + i.toString()}
				source={icons.starHalf}
				resizeMode="cover"
				style={{
					width: 20,
					height: 20,
				}}
			/>
		)
	}
	// No Star
	for (i = 0; i < noStar; i++) {
		starComponent.push(
			<Image
				key={'empty' + i.toString()}
				source={icons.starEmpty}
				resizeMode="cover"
				style={{
					width: 20,
					height: 20,
				}}
			/>
		)
	}

	return (
		<View style={styles.container}>
			{starComponent}
			<Text style={styles.txt}>{rate}</Text>
		</View>
	)
}

export default StarReview

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	txt: {
		marginLeft: SIZES.base,
		color: COLORS.gray,
		...FONTS.body3,
	},
})
