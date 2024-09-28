import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from './src/types/navigation'
import Icon from 'react-native-vector-icons/MaterialIcons'
import HomeScreen from './src/screens/Home/HomeScreen'
import DetailsScreen from './src/screens/AlbumDetails/AlbumDetailsScreen'
import FavoritesScreen from './src/screens/Favorites/FavoritesScreen'
import { FavoritesProvider } from './src/context/FavoritesContext'
import FavActionButton from './src/screens/AlbumDetails/FavActionButton'
import FavButton from './src/components/FavButton'
import FavNavButton from './src/screens/Home/FavNavButton'

const Stack = createStackNavigator<RootStackParamList>()

const App = () => {
    return (
        <FavoritesProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home">
                    <Stack.Screen
                        name="Home"
                        component={HomeScreen}
                        options={({ navigation }) => ({
                            title: 'Home',
                            headerRight: () => (
                                <FavNavButton onPress={() => navigation.navigate('Favorites')}></FavNavButton>
                            ),
                        })}
                    />
                    <Stack.Screen name="AlbumDetails" options={{ headerShown: false }} component={DetailsScreen} />
                    <Stack.Screen name="Favorites" component={FavoritesScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </FavoritesProvider>
    )
}

export default App
