import React from 'react'
import { Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './src/screens/Home/HomeScreen'
import { RootStackParamList } from './src/types/navigation'
import DetailsScreen from './src/screens/AlbumDetails/AlbumDetailsScreen'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AlbumDetails" options={{ header: () => null }} component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
