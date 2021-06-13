import React from 'react'
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { COLORS, FONTS, images, SIZES } from '../constants'
const Onboarding = ({navigation}) => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.contentWrapper}>
				<Image
					source={images.onboardingImage}
					resizeMode="contain"
					style={{
						height: '100%',
						width: '100%',
					}}
				/>
			</View>
			<View style={styles.contentWrapper}>
				<View style={styles.titleWrapper}>
					<Text style={{ ...FONTS.h2 }}>Digital Ticket</Text>
					<Text style={styles.txt}>
						Easy solution to buy tickets for your travel, business trips, transportation, lodging and
						culinal.
					</Text>
				</View>
				<TouchableOpacity onPress={()=>navigation.navigate('Home')} style={styles.btn}>
					<LinearGradient
						start={{ x: 0, y: 0 }}
						end={{ x: 1, y: 1 }}
						colors={['#46aeff', '#5884ff']}
						style={styles.linearGradient}
					>
						<Text style={{ color: COLORS.white, ...FONTS.h2 }}>Start !</Text>
					</LinearGradient>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default Onboarding

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	contentWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleWrapper: {
		alignItems: 'center',
		marginHorizontal: SIZES.padding,
	},
	txt: {
		color: COLORS.gray,
		marginTop: SIZES.padding,
		textAlign: 'center',
		...FONTS.h3,
	},
	btn: {
		marginTop: SIZES.padding * 2,
		width: '70%',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	linearGradient: {
		height: '100%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 15,
	},
})
