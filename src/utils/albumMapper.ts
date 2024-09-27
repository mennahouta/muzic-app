import { RawAlbum, Album } from '../types/itunes'

export const transformAlbum = (raw: RawAlbum): Album => {
    return {
        id: raw['id'].label,
        title: raw['im:name'].label,
        imageURI: raw['im:image'][2].label,
        songsCount: raw['im:itemCount'].label,
        price: raw['im:price'].label,
        artist: raw['im:artist'].label,
        releaseDate: raw['im:releaseDate'].attributes.label,
    }
}
