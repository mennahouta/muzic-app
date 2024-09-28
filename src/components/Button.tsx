import React from 'react'
import { Text, StyleSheet, Pressable, ButtonProps } from 'react-native'

export default function Button(props: ButtonProps) {
    const { onPress, title = 'Save' } = props
    return (
        <Pressable style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 8,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.4,
        color: '#fafafa',
    },
})
