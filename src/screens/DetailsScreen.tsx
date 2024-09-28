import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable } from 'react-native'
import { DetailsScreenProps } from '../types/navigation'
import Button from '../components/Button'
import DetailRow from '../components/DetailRow'

const DetailsScreen = ({ route }: DetailsScreenProps) => {
    const { album } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: album.imageURI }} style={styles.albumImage} />
                <View style={styles.overlay} />
            </View>

            <View style={styles.logoContainer}>
                <Image source={{ uri: album.imageURI }} style={styles.logoImage} />
            </View>

            <View style={styles.detailsContainer}>
                <DetailRow icon="music-note" label="Album Name" value={album.title} />
                <DetailRow icon="person" label="Artist Name" value={album.artist} />
                <DetailRow icon="fiber-smart-record" label="No of songs" value={album.songsCount} />
                <DetailRow icon="calendar-today" label="Release on" value={album.releaseDate} />
            </View>

            <View style={styles.link}>
                <Button title="iTunes Link" onPress={() => Linking.openURL(album.link)}></Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    imageContainer: {
        position: 'relative',
    },
    albumImage: {
        marginTop: -20,
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
    },
    logoContainer: {
        position: 'absolute',
        top: 340,
        left: 20,
        zIndex: 1,
    },
    logoImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },
    detailsContainer: {
        padding: 20,
        backgroundColor: '#f5f5f5',
        marginTop: 20,
    },
    link: {
        marginTop: -10,
        paddingHorizontal: 10,
    },
})

export default DetailsScreen
