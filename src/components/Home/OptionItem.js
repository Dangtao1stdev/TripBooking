import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, FONTS, SIZES } from '../../constants'

const OptionItem = ({ icon, bgColor, label, onPress }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
			<View style={[styles.shadow, { height: 60, width: 60 }]}>
				<LinearGradient
					style={styles.linearGradient}
					colors={bgColor}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<Image
						source={icon}
						resizeMode="cover"
						style={{
							height: 30,
							width: 30,
							tintColor: COLORS.white,
						}}
					/>
				</LinearGradient>
			</View>
			<Text style={styles.label}>{label}</Text>
		</TouchableOpacity>
	)
}

export default OptionItem

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 3,
		},
		shadowOpacity: 0.27,
		shadowRadius: 4.65,

		elevation: 6,
	},
	linearGradient: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
	label: {
		marginTop: SIZES.base,
		color: COLORS.gray,
		...FONTS.body3,
	},
})
