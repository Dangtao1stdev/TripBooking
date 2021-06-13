import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './StackNavigator'
const AppNavigationContainer = () => {
	return (
		<NavigationContainer>
			<StackNavigator/>
		</NavigationContainer>
	)
}
export default AppNavigationContainer
