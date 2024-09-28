import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView, Linking, Pressable } from 'react-native'
import { DetailsScreenProps } from '../../types/navigation'
import Button from '../../components/Button'
import DetailRow from './DetailRow'
import FavButton from '../../components/FavButton'

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

            <View style={styles.actionsContainer}>
                <View style={styles.favButtonContainer}>
                    <FavButton></FavButton>
                </View>
                <View style={styles.itunesLinkContainer}>
                    <Button title="iTunes Link" onPress={() => Linking.openURL(album.link)}></Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eeeeee',
    },
    imageContainer: {
        position: 'relative',
    },
    albumImage: {
        marginTop: -20,
        width: '100%',
        height: 350,
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
        top: 285,
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
        backgroundColor: '#eeeeee',
        marginTop: 20,
    },
    actionsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        gap: 15,
    },
    itunesLinkContainer: {
        width: '80%',
    },
    favButtonContainer: {
        marginLeft: 10,
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 25,
    },
})

export default DetailsScreen
