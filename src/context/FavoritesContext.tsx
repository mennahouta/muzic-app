import React, { createContext, useState, useContext, ReactNode } from 'react'
import { Album } from '../types/itunes'

type FavoritesContextType = {
    favorites: Map<string, Album>
    addFavorite: (album: Album) => void
    removeFavorite: (albumId: string) => void
    isFavorite: (albumId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export const useFavorites = () => {
    const context = useContext(FavoritesContext)
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider')
    }
    return context
}

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
    const [favorites, setFavorites] = useState<Map<string, Album>>(new Map<string, Album>())

    const addFavorite = (album: Album) => {
        setFavorites((prev) => new Map(prev).set(album.id, album))
    }

    const removeFavorite = (albumId: string) => {
        setFavorites((prev) => {
            const newFavorites = new Map(prev)
            newFavorites.delete(albumId)
            return newFavorites
        })
    }

    const isFavorite = (albumId: string) => {
        return favorites.has(albumId)
    }

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}
