'use client';

import React from 'react';
import { Card } from '@/components/ui/Card';
import { Play } from 'lucide-react';

export default function BrowsePage() {
    const sections = [
        { title: "Trending Now", items: [1, 2, 3, 4, 5] },
        { title: "Fresh Finds", items: [6, 7, 8, 9, 10] },
        { title: "Your Mix", items: [11, 12, 13, 14, 15] },
    ];

    return (
        <div style={{
            padding: '2rem',
            paddingBottom: '120px', // Space for player
            background: 'linear-gradient(to bottom, #1a1a1a 0%, var(--background) 100%)',
            minHeight: '100vh'
        }}>
            <header style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Browse</h1>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <span style={{ opacity: 0.7, cursor: 'pointer' }}>Music</span>
                    <span style={{ opacity: 0.7, cursor: 'pointer' }}>Podcasts</span>
                    <span style={{ opacity: 0.7, cursor: 'pointer' }}>Live Events</span>
                </div>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {sections.map((section, idx) => (
                    <section key={idx}>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>{section.title}</h2>
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                            gap: '1.5rem'
                        }}>
                            {section.items.map((item) => (
                                <AlbumCard key={item} id={item} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
}

function AlbumCard({ id }: { id: number }) {
    return (
        <div
            className="group"
            style={{
                padding: '1rem',
                background: 'rgba(255,255,255,0.03)',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                transition: 'background 0.3s'
            }}
        // In a real app we'd use onMouseEnter/Leave for hover effects, but CSS 'group' works with Tailwind usually
        // Here we simulate hover with inline styles by relying on parent interaction or simple css class in globals
        >
            <div style={{
                position: 'relative',
                marginBottom: '1rem',
                boxShadow: '0 8px 16px rgba(0,0,0,0.3)'
            }}>
                <div style={{
                    width: '100%',
                    aspectRatio: '1/1',
                    background: `hsl(${id * 45}, 60%, 50%)`, // Random-ish color
                    borderRadius: '4px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <span style={{ fontSize: '2rem', opacity: 0.5 }}>🎵</span>
                </div>

                {/* Play Button Overlay (Visible on Hover in a real implementation) */}
                <div style={{
                    position: 'absolute',
                    bottom: '8px',
                    right: '8px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.4)',
                    // opacity: 0, // Hidden by default
                    // transform: 'translateY(10px)',
                    // transition: 'all 0.3s ease'
                }}>
                    <Play size={20} fill="black" stroke="black" style={{ marginLeft: '2px' }} />
                </div>
            </div>

            <div style={{ fontWeight: 'bold', marginBottom: '0.2rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Album Title {id}
            </div>
            <div style={{ fontSize: '0.9rem', opacity: 0.6, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                Artist Name
            </div>
        </div>
    );
}
