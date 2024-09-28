import React from 'react'
import { Text, StyleSheet, Pressable, PressableProps } from 'react-native'

interface ButtonProps extends PressableProps {
    title?: string
}

export default function Button(props: ButtonProps) {
    const { onPress, title = 'Save' } = props
    return (
        <Pressable style={styles.button} onPress={onPress} {...props}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 14,
        lineHeight: 21,
        letterSpacing: 0.4,
        color: '#fafafa',
    },
})
