import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'
import FavButton from '../../components/FavButton'

export default function FavNavButton(props: { onPress: () => void }) {
    const { onPress } = props
    return (
        <TouchableOpacity style={styles.favNavButtonContainer} onPress={onPress}>
            <FavButton favIconFilled={true} size={25}></FavButton>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    favNavButtonContainer: {
        marginRight: 10,
    },
})
