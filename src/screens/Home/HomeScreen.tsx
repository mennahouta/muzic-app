import React, { useEffect, useState } from 'react'
import { fetchAlbums } from '../../services/itunesService'
import { Album } from '../../types/itunes'
import { useNavigation } from '@react-navigation/native'
import { HomeScreenNavigationProp } from '../../types/navigation'
import AlbumList from '../../components/AlbumList'

const HomeScreen = () => {
    const [albums, setAlbums] = useState<Album[]>([])
    const navigation = useNavigation<HomeScreenNavigationProp>()

    useEffect(() => {
        const loadAlbums = async () => {
            const fetchedAlbums: Album[] = await fetchAlbums()
            setAlbums(fetchedAlbums)
        }
        loadAlbums()
    }, [])

    const handlePress = (album: Album) => {
        navigation.navigate('AlbumDetails', { album })
    }

    return <AlbumList albums={albums} onAlbumPress={handlePress}></AlbumList>
}

export default HomeScreen
