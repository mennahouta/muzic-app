import React, { useState } from 'react'
import { Pressable, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

export default function FavButton() {
    const [isFavorite, setIsFavorite] = useState<boolean>(false)
    const handleFavPress = () => {
        setIsFavorite((prev) => !prev)
    }
    return (
        <Pressable onPress={handleFavPress}>
            <Icon name={isFavorite ? 'favorite' : 'favorite-outline'} size={30}></Icon>
        </Pressable>
    )
}
