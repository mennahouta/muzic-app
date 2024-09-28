import React from 'react'
import { Album } from '../../types/itunes'
import { useFavorites } from '../../context/FavoritesContext'
import { TouchableOpacity, StyleSheet } from 'react-native'
import FavButton from '../../components/FavButton'

export default function FavActionButton(props: { album: Album }) {
    const { album } = props
    const { addFavorite, removeFavorite, isFavorite } = useFavorites()

    const handleFavPress = () => {
        const fav = isFavorite(album.id)
        if (fav) {
            removeFavorite(album.id)
        } else {
            addFavorite(album)
        }
    }
    return (
        <TouchableOpacity style={styles.favActionButtonContainer} onPress={handleFavPress}>
            <FavButton favIconFilled={isFavorite(album.id)}></FavButton>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favActionButtonContainer: {
        marginLeft: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 40,
    },
})
