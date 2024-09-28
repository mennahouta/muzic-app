import React from 'react'
import { TouchableOpacity, View, Image, Text, FlatList, StyleSheet } from 'react-native'
import { Album } from '../types/itunes'
import Icon from 'react-native-vector-icons/MaterialIcons'

type AlbumListProps = {
    albums: Album[]
    onAlbumPress: (item: Album) => void
}

export default function AlbumList(props: AlbumListProps) {
    const { albums, onAlbumPress } = props
    const renderItem = ({ item }: { item: Album }) => (
        <TouchableOpacity onPress={() => onAlbumPress(item)} style={styles.albumContainer}>
            <Image source={{ uri: item.imageURI }} style={styles.albumImage} />
            <View style={styles.albumDetails}>
                <Text style={styles.albumTitle}>{item.title}</Text>
                <Text style={styles.artistName}>{item.artist}</Text>
                <Text style={styles.albumPrice}>{item.price}</Text>
            </View>
            <Icon name="chevron-right" size={30} color="#999" style={styles.arrowButton} />
        </TouchableOpacity>
    )

    return (
        <View>
            <FlatList
                data={albums}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    listContainer: {
        padding: 10,
    },
    albumContainer: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 10,
        alignItems: 'center',
    },
    albumImage: {
        width: 130,
        height: 130,
        marginRight: 10,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
    },
    albumDetails: {
        flex: 1,
    },
    albumTitle: {
        fontSize: 16,
        marginBottom: 4,
    },
    artistName: {
        fontSize: 14,
        color: '#999',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    albumPrice: {
        fontSize: 14,
        color: '#999',
    },
    arrowButton: {
        marginRight: 10,
    },
})
