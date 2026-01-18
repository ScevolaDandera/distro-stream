'use client';

import React, { createContext, useContext, useState } from 'react';

type Track = {
    title: string;
    artist: string;
    coverUrl: string;
    duration: number; // in seconds
};

interface PlayerContextType {
    isPlaying: boolean;
    currentTrack: Track | null;
    togglePlay: () => void;
    playTrack: (track: Track) => void;
}

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState<Track | null>({
        title: "Midnight City",
        artist: "M83",
        coverUrl: "https://t2.genius.com/unsafe/340x340/https%3A%2F%2Fimages.genius.com%2F0f5454cb43df8995383a1529124a9e57.1000x1000x1.jpg",
        duration: 243
    }); // Mock initial track

    const togglePlay = () => setIsPlaying(!isPlaying);

    const playTrack = (track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    return (
        <PlayerContext.Provider value={{ isPlaying, currentTrack, togglePlay, playTrack }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
}
