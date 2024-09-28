import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Album } from './itunes'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    Home: undefined
    AlbumDetails: { album: Album }
    Favorites: { albums: Album[] }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
export type FavoritesScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Favorites'>

export type DetailsScreenProps = {
    route: RouteProp<RootStackParamList, 'AlbumDetails'>
}
