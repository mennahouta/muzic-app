type ReleaseDate = {
    attributes: {
        label: string
    }
}

type Item = {
    label: string
}

export type RawAlbum = {
    id: Item
    'im:name': Item
    'im:image': Item[]
    'im:itemCount': Item
    'im:price': Item
    'im:artist': Item
    'im:releaseDate': ReleaseDate
}

export type TopAlbumsResponse = {
    feed: {
        entry: RawAlbum[]
    }
}

export type Album = {
    id: string
    title: string
    imageURI: string
    songsCount: string
    price: string
    artist: string
    releaseDate: string
}
