import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import IconLabel from '../components/Detail/IconLabel'
import StarReview from '../components/Detail/StarReview'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'

const Detail = ({ navigation }) => {
	return (
		<View style={styles.container}>
			{/* Header */}
			<View style={{ flex: 2 }}>
				<Image
					source={images.skiVillaBanner}
					resizeMode="cover"
					style={{
						height: '80%',
						width: '100%',
					}}
				/>
				<View style={[styles.header, styles.shadow]}>
					<View style={styles.contentHeader}>
						<View style={styles.shadow}>
							<Image
								source={images.skiVilla}
								resizeMode="cover"
								style={{
									height: 70,
									width: 70,
									borderRadius: 15,
								}}
							/>
						</View>
						<View style={styles.txtContent}>
							<Text style={{ ...FONTS.h3 }}>Ski Villa</Text>
							<Text style={{ color: COLORS.gray, ...FONTS.body3 }}>France</Text>
							<StarReview rate={4.5} />
						</View>
					</View>
					<View style={{ marginTop: SIZES.radius }}>
						<Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
							Ski Villa offers simple rooms with mountain views in front of the ski lift to the Ski Resort
						</Text>
					</View>
				</View>
				{/* Header Button */}
				<View style={styles.headerButton}>
					<View style={{ flex: 1 }}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Image
								source={icons.back}
								resizeMode="cover"
								style={{
									height: 30,
									width: 30,
								}}
							/>
						</TouchableOpacity>
					</View>
					<View style={{ flex: 1, alignItems: 'flex-end' }}>
						<TouchableOpacity>
							<Image
								source={icons.menu}
								resizeMode="cover"
								style={{
									height: 30,
									width: 30,
								}}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			{/* Body */}
			<View style={{ flex: 1.5 }}>
				{/* Icons */}
				<View style={styles.bodyWrapper}>
					<IconLabel icon={icons.villa} label="Villa" />
					<IconLabel icon={icons.parking} label="Parking" />
					<IconLabel icon={icons.wind} label="4°C" />
				</View>
				{/* About */}
				<View style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding }}>
					<Text style={{ ...FONTS.h2 }}>About</Text>
					<Text style={{ marginTop: SIZES.radius, color: COLORS.gray, ...FONTS.body3 }}>
						Located in the Alps width an altitude of 1,702 meters. This ski area is the largest ski area in
						the world and is known as the best place to ski. Many other facilities, such as a fitness
						center, sauna, steam room to star-rated restaurants.
					</Text>
				</View>
			</View>

			{/* Footer */}
			<View style={{ flex: 0.5, paddingHorizontal: SIZES.padding }}>
				<LinearGradient
					style={{ height: 70, width: '100%', borderRadius: 15 }}
					colors={['#edf0fc', '#d6dfff']}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}
				>
					<View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
						<View style={{ flex: 1, marginHorizontal: SIZES.padding, justifyContent: 'center' }}>
							<Text style={{ ...FONTS.h1 }}>1000$</Text>
						</View>
						<TouchableOpacity style={{ width: 130, height: '80%', marginHorizontal: SIZES.radius }}>
							<LinearGradient
								style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderRadius: 10 }}
								colors={['#46aeff', '#5884ff']}
								start={{ x: 0, y: 0 }}
								end={{ x: 1, y: 0 }}
							>
								<Text style={{ color: COLORS.white, ...FONTS.h2 }}>BOOKING</Text>
							</LinearGradient>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		</View>
	)
}

export default Detail

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	header: {
		position: 'absolute',
		bottom: '5%',
		left: '5%',
		right: '5%',
		borderRadius: 15,
		padding: SIZES.padding,
		backgroundColor: COLORS.white,
	},
	shadow: {
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,

		elevation: 5,
	},
	contentHeader: {
		flexDirection: 'row',
	},
	txtContent: {
		marginHorizontal: SIZES.radius,
		justifyContent: 'space-around',
	},
	headerButton: {
		position: 'absolute',
		top: 50,
		left: 20,
		right: 20,
		flexDirection: 'row',
	},
	bodyWrapper: {
		flexDirection: 'row',
		marginTop: SIZES.base,
		paddingHorizontal: SIZES.padding * 2,
		justifyContent: 'space-between',
	},
})
