import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Detail, Home, Onboarding } from '../screens'
import { COLORS, icons, SIZES } from '../constants'
import { Image, TouchableOpacity } from 'react-native'
import TabNavigator from './TabNavigator'
const Stack = createStackNavigator()
const StackNavigator = () => {
	return (
		<Stack.Navigator initialRouteName="Onboarding">
			<Stack.Screen
				name="Onboarding"
				component={Onboarding}
				options={{
					title: null,
					headerStyle: {
						backgroundColor: COLORS.white,
					},
					headerRight: () => (
						<TouchableOpacity style={{ marginRight: SIZES.padding }}>
							<Image
								source={icons.barMenu}
								resizeMode="contain"
								style={{
									height: 25,
									width: 25,
								}}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen
				name="Home"
				component={TabNavigator}
				options={{
					title: null,
					headerStyle: {
						backgroundColor: COLORS.white,
					},
					headerLeft: ({ onPress }) => (
						<TouchableOpacity style={{ marginLeft: SIZES.padding }} onPress={onPress}>
							<Image
								source={icons.back}
								resizeMode="contain"
								style={{
									height: 25,
									width: 25,
								}}
							/>
						</TouchableOpacity>
					),
					headerRight: () => (
						<TouchableOpacity style={{ marginRight: SIZES.padding }}>
							<Image
								source={icons.menu}
								resizeMode="contain"
								style={{
									height: 25,
									width: 25,
								}}
							/>
						</TouchableOpacity>
					),
				}}
			/>
			<Stack.Screen name="Detail" component={Detail} options={{ headerShown: false }} />
		</Stack.Navigator>
	)
}

export default StackNavigator
