'use client';

import React from 'react';
import { usePlayer } from '@/context/PlayerContext';
import { Play, Pause, SkipBack, SkipForward, Volume2, Mic2, ListMusic, Maximize2 } from 'lucide-react';

export function Player() {
    const { isPlaying, currentTrack, togglePlay } = usePlayer();

    if (!currentTrack) return null;

    return (
        <div className="glass" style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            height: '90px',
            padding: '0 2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            zIndex: 100,
            borderTop: '1px solid var(--glass-border)',
            borderLeft: 'none',
            borderRight: 'none',
            borderBottom: 'none',
            backgroundColor: 'rgba(0,0,0,0.85)', // slightly darker for contrast
            backdropFilter: 'blur(20px)'
        }}>
            {/* Track Info */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', width: '30%' }}>
                {/* Placeholder Cover Art */}
                <div style={{
                    width: '56px',
                    height: '56px',
                    background: '#333',
                    borderRadius: '4px',
                    overflow: 'hidden',
                    position: 'relative'
                }}>
                    {/* In a real app, use Next/Image here */}
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, #7c3aed, #1ed760)' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#fff' }}>{currentTrack.title}</span>
                    <span style={{ fontSize: '0.8rem', opacity: 0.7 }}>{currentTrack.artist}</span>
                </div>
            </div>

            {/* Controls */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', width: '40%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <button className="player-btn"><SkipBack size={20} fill="currentColor" /></button>

                    <button
                        onClick={togglePlay}
                        style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: '#fff',
                            color: '#000',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'transform 0.1s'
                        }}
                        className="hover:scale-105"
                    >
                        {isPlaying ? <Pause size={16} fill="currentColor" /> : <Play size={16} fill="currentColor" style={{ marginLeft: '2px' }} />}
                    </button>

                    <button className="player-btn"><SkipForward size={20} fill="currentColor" /></button>
                </div>

                {/* Progress Bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100%', maxWidth: '400px' }}>
                    <span style={{ fontSize: '0.7rem', opacity: 0.7, width: '30px', textAlign: 'right' }}>0:42</span>
                    <div style={{
                        height: '4px',
                        background: 'rgba(255,255,255,0.3)',
                        borderRadius: '2px',
                        flex: 1,
                        position: 'relative',
                        cursor: 'pointer'
                    }}>
                        <div style={{
                            width: '30%',
                            height: '100%',
                            background: '#fff',
                            borderRadius: '2px'
                        }} />
                    </div>
                    <span style={{ fontSize: '0.7rem', opacity: 0.7, width: '30px' }}>4:03</span>
                </div>
            </div>

            {/* Right Controls */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '1rem', width: '30%' }}>
                <Mic2 size={18} className="player-icon" />
                <ListMusic size={18} className="player-icon" />
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', width: '100px' }}>
                    <Volume2 size={18} className="player-icon" />
                    <div style={{ height: '4px', background: 'rgba(255,255,255,0.3)', borderRadius: '2px', flex: 1 }}>
                        <div style={{ width: '70%', height: '100%', background: '#fff', borderRadius: '2px' }} />
                    </div>
                </div>
                <Maximize2 size={18} className="player-icon" />
            </div>

            <style jsx>{`
        .player-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
        }
        .player-btn:hover {
          color: #fff;
        }
        .player-icon {
          color: rgba(255,255,255,0.7);
          cursor: pointer;
        }
        .player-icon:hover {
          color: #fff;
        }
      `}</style>
        </div>
    );
}
