import axios from 'axios'
import { transformAlbum } from '../utils/albumMapper'
import { TopAlbumsResponse, Album } from '../types/itunes'

const TopAlbumsAPIURL = 'https://itunes.apple.com/us/rss/topalbums/limit=10/json'

export const fetchAlbums = async (): Promise<Album[]> => {
    try {
        const response = await axios.get<TopAlbumsResponse>(TopAlbumsAPIURL)
        return response.data.feed.entry.map(transformAlbum)
    } catch (error) {
        console.error(error)
        return []
    }
}
