import React from 'react'
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useFavorites } from '../../context/FavoritesContext'
import { useNavigation } from '@react-navigation/native'
import { Album } from '../../types/itunes'
import { FavoritesScreenNavigationProp } from '../../types/navigation'
import AlbumList from '../../components/AlbumList'

const FavoritesScreen = () => {
    const { favorites } = useFavorites()
    const navigation = useNavigation<FavoritesScreenNavigationProp>()
    const favoriteAlbums = Array.from(favorites.values())
    const handlePress = (album: Album) => {
        navigation.navigate('AlbumDetails', { album })
    }
    return <AlbumList albums={favoriteAlbums} onAlbumPress={handlePress}></AlbumList>
}

export default FavoritesScreen
