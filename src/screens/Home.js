import React from 'react'
import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import { COLORS, FONTS, icons, images, SIZES } from '../constants'
import OptionItem from '../components/Home/OptionItem'
import { Data } from '../data/data'
import RenderItemDestination from '../components/Home/RenderItemDestination'
const Home = () => {
	return (
		<View style={styles.container}>
			{/* Banner */}
			<View style={styles.bannerWrapper}>
				<Image
					source={images.homeBanner}
					resizeMode="cover"
					style={{
						height: '100%',
						width: '100%',
						borderRadius: 15,
					}}
				/>
			</View>
			{/* Options */}
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<View style={styles.optionWrapper}>
					<OptionItem
						icon={icons.airplane}
						bgColor={['#46aeff', '#5884ff']}
						label={'Flight'}
						onPress={() => {}}
					/>
					<OptionItem
						icon={icons.train}
						bgColor={['#fddf90', '#fcda13']}
						label={'Train'}
						onPress={() => {}}
					/>
					<OptionItem icon={icons.bus} bgColor={['#e973ad', '#da5df2']} label={'Bus'} onPress={() => {}} />
					<OptionItem icon={icons.taxi} bgColor={['#fcaba8', '#fe6bba']} label={'Taxi'} onPress={() => {}} />
				</View>
				<View style={[styles.optionWrapper, { marginTop: SIZES.radius }]}>
					<OptionItem icon={icons.bed} bgColor={['#ffc465', '#ff9c5f']} label={'Hotel'} onPress={() => {}} />
					<OptionItem icon={icons.eat} bgColor={['#7cf1fb', '#4ebefd']} label={'Eats'} onPress={() => {}} />
					<OptionItem
						icon={icons.compass}
						bgColor={['#7be993', '#46caaf']}
						label={'Adventure'}
						onPress={() => {}}
					/>
					<OptionItem
						icon={icons.event}
						bgColor={['#fca397', '#fc7b6c']}
						label={'Event'}
						onPress={() => {}}
					/>
				</View>
			</View>
			{/* Destination */}
			<View style={{ flex: 1 }}>
				<Text style={styles.txtDestination}>Destination</Text>
				<FlatList
					horizontal
					showsHorizontalScrollIndicator={false}
					keyExtractor={(item) => item.id.toString()}
					renderItem={({ item, index }) => <RenderItemDestination item={item} index={index} />}
					data={Data}
				/>
			</View>
		</View>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: COLORS.white,
	},
	bannerWrapper: {
		flex: 1,
		marginTop: SIZES.base,
		paddingHorizontal: SIZES.base,
	},
	optionWrapper: {
		flexDirection: 'row',
		marginTop: SIZES.padding,
		paddingHorizontal: SIZES.padding,
	},
	txtDestination: {
		marginTop: SIZES.base,
		marginHorizontal: SIZES.padding,
		...FONTS.h2,
	},
})
