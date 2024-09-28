import React, { useState } from 'react'
import { Pressable, PressableProps } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

type FavButtonProps = {
    favIconFilled?: boolean
    size?: number
}

export default function FavButton(props: FavButtonProps) {
    const { favIconFilled, size = 30 } = props
    return <Icon name={favIconFilled ? 'favorite' : 'favorite-outline'} size={size}></Icon>
}
