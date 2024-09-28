import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/HomeScreen'
import { RootStackParamList } from './src/types/navigation'
import DetailsScreen from './src/screens/DetailsScreen'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" options={{ header: () => null }} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
