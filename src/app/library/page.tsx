'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Heart, Disc, ListMusic } from 'lucide-react';

export default function LibraryPage() {
    const [activeTab, setActiveTab] = useState<'playlists' | 'albums' | 'songs'>('playlists');

    return (
        <div style={{ padding: '2rem', paddingBottom: '120px', minHeight: '100vh', background: 'var(--background)' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Your Library</h1>

                <div style={{ display: 'flex', gap: '1rem' }}>
                    <TabButton active={activeTab === 'playlists'} onClick={() => setActiveTab('playlists')}>Playlists</TabButton>
                    <TabButton active={activeTab === 'albums'} onClick={() => setActiveTab('albums')}>Albums</TabButton>
                    <TabButton active={activeTab === 'songs'} onClick={() => setActiveTab('songs')}>Liked Songs</TabButton>
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '2rem' }}>
                {/* Liked Songs Special Card */}
                {activeTab === 'playlists' && (
                    <div
                        className="glass"
                        style={{
                            gridColumn: 'span 2',
                            padding: '2rem',
                            borderRadius: '1rem',
                            background: 'linear-gradient(135deg, #450af5, #c4b5fd)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-end',
                            minHeight: '250px',
                            cursor: 'pointer'
                        }}
                    >
                        <div>
                            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Liked Songs</div>
                            <div style={{ fontSize: '1rem', opacity: 0.9 }}>422 liked songs</div>
                        </div>
                    </div>
                )}

                {/* Mock Items */}
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} style={{ cursor: 'pointer' }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '1/1',
                            background: '#333',
                            borderRadius: '1rem',
                            marginBottom: '1rem',
                            overflow: 'hidden'
                        }}>
                            <div style={{ width: '100%', height: '100%', background: `hsl(${i * 60}, 50%, 40%)` }} />
                        </div>
                        <div style={{ fontWeight: 600, marginBottom: '0.2rem' }}>
                            {activeTab === 'playlists' ? `Playlist #${i}` : activeTab === 'albums' ? `Album Title ${i}` : `Song Title ${i}`}
                        </div>
                        <div style={{ fontSize: '0.9rem', opacity: 0.6 }}>
                            {activeTab === 'playlists' ? 'By You' : 'Artist Name'}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function TabButton({ children, active, onClick }: { children: React.ReactNode, active: boolean, onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            style={{
                background: active ? '#fff' : 'var(--glass-bg)',
                color: active ? '#000' : '#fff',
                border: 'none',
                padding: '0.6rem 1.2rem',
                borderRadius: '2rem',
                fontSize: '0.9rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
            }}
        >
            {children}
        </button>
    );
}
