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
    if (favoriteAlbums.length === 0) {
        return <Text style={styles.noFavoritesText}>Try adding some fav♪! </Text>
    }
    const handlePress = (album: Album) => {
        navigation.navigate('AlbumDetails', { album })
    }
    return <AlbumList albums={favoriteAlbums} onAlbumPress={handlePress}></AlbumList>
}

const styles = StyleSheet.create({
    noFavoritesText: {
        textAlign: 'center',
        fontSize: 25,
        color: '#888',
        marginTop: 20,
    },
})
export default FavoritesScreen
