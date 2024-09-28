import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Album } from './itunes'
import { RouteProp } from '@react-navigation/native'

export type RootStackParamList = {
    Home: undefined
    Details: { album: Album }
}

export type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>

export type DetailsScreenProps = {
  route: RouteProp<RootStackParamList, 'Details'>;
};
