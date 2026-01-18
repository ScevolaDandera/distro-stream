'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/Input';
import { Card } from '@/components/ui/Card';
import { Search as SearchIcon, Play, MoreHorizontal } from 'lucide-react';

// Mock Data
const ALL_DATA = [
    { id: 1, type: 'artist', name: 'M83', image: 'hsl(200, 50%, 40%)' },
    { id: 2, type: 'artist', name: 'The Weeknd', image: 'hsl(0, 50%, 40%)' },
    { id: 3, type: 'artist', name: 'Daft Punk', image: 'hsl(50, 50%, 40%)' },
    { id: 4, type: 'track', name: 'Midnight City', artist: 'M83', duration: '4:03', image: 'hsl(200, 60%, 50%)' },
    { id: 5, type: 'track', name: 'Starboy', artist: 'The Weeknd', duration: '3:50', image: 'hsl(0, 60%, 50%)' },
    { id: 6, type: 'track', name: 'Get Lucky', artist: 'Daft Punk', duration: '4:08', image: 'hsl(50, 60%, 50%)' },
    { id: 7, type: 'track', name: 'Wait', artist: 'M83', duration: '5:12', image: 'hsl(210, 60%, 50%)' },
    { id: 8, type: 'track', name: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20', image: 'hsl(10, 60%, 50%)' },
];

export default function SearchPage() {
    const [query, setQuery] = useState('');

    const filteredData = query
        ? ALL_DATA.filter(item => item.name.toLowerCase().includes(query.toLowerCase()) || (item.artist && item.artist.toLowerCase().includes(query.toLowerCase())))
        : [];

    return (
        <div style={{ padding: '2rem', paddingBottom: '120px', minHeight: '100vh', background: 'var(--background)' }}>
            <header style={{ maxWidth: '600px', margin: '0 auto 3rem auto', textAlign: 'center' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Search</h1>
                <Input
                    placeholder="What do you want to listen to?"
                    icon={<SearchIcon size={20} />}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />
            </header>

            {query ? (
                <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                    {filteredData.length > 0 ? (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            {filteredData.map(item => (
                                <div key={`${item.type}-${item.id}`} className="glass" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    transition: 'background 0.2s',
                                    cursor: 'pointer'
                                }}>
                                    <div style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: item.type === 'artist' ? '50%' : '4px',
                                        background: item.image,
                                        marginRight: '1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {item.type === 'track' && <span style={{ opacity: 0.5 }}>🎵</span>}
                                    </div>

                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 'bold' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'capitalize' }}>
                                            {item.type === 'track' ? `${item.type} • ${item.artist}` : item.type}
                                        </div>
                                    </div>

                                    {item.type === 'track' && (
                                        <div style={{ opacity: 0.6, fontSize: '0.9rem', marginRight: '1rem' }}>
                                            {item.duration}
                                        </div>
                                    )}

                                    <button style={{ background: 'transparent', border: 'none', color: '#fff', opacity: 0.5 }}>
                                        <MoreHorizontal size={20} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', opacity: 0.5, marginTop: '2rem' }}>
                            No results found for "{query}"
                        </div>
                    )}
                </div>
            ) : (
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '1rem' }}>Browse All</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.5rem' }}>
                        {['Pop', 'Rock', 'Hip-Hop', 'Electronic', 'Indie', 'Jazz', 'Classical', 'Metal'].map(genre => (
                            <Card key={genre} style={{
                                height: '180px',
                                background: `linear-gradient(135deg, ${getRandomColor()} 0%, rgba(0,0,0,0.5) 100%)`,
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                border: 'none'
                            }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{genre}</span>
                                {/* Decorative circle */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: -20,
                                    right: -20,
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    background: 'rgba(255,255,255,0.2)',
                                    transform: 'rotate(25deg)'
                                }} />
                            </Card>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

function getRandomColor() {
    const colors = ['#e11d48', '#d97706', '#16a34a', '#2563eb', '#7c3aed', '#db2777'];
    return colors[Math.floor(Math.random() * colors.length)];
}
