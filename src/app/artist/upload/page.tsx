'use client';

import React, { useState, useRef } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Upload, Music, X } from 'lucide-react';

export default function UploadPage() {
    const [file, setFile] = useState<File | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.type.startsWith('audio/')) {
                setFile(droppedFile);
            } else {
                alert('Please upload an audio file');
            }
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const removeFile = () => {
        setFile(null);
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <header style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Upload Music</h1>
                <p style={{ opacity: 0.7 }}>Distribute your sound to the world.</p>
            </header>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Upload Zone */}
                {!file ? (
                    <div
                        onDragOver={handleDragOver}
                        onDragLeave={handleDragLeave}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                        style={{
                            border: `2px dashed ${isDragging ? 'var(--primary)' : 'var(--glass-border)'}`,
                            borderRadius: '1rem',
                            padding: '4rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            background: isDragging ? 'rgba(30, 215, 96, 0.05)' : 'transparent',
                            transition: 'all 0.2s'
                        }}
                    >
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileSelect}
                            accept="audio/*"
                            style={{ display: 'none' }}
                        />
                        <div style={{
                            background: 'var(--glass-bg)',
                            padding: '1rem',
                            borderRadius: '50%',
                            marginBottom: '1rem'
                        }}>
                            <Upload size={32} color="var(--primary)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Drag and drop your track here</h3>
                        <p style={{ opacity: 0.5, fontSize: '0.9rem' }}>or click to browse files (WAV, MP3, FLAC)</p>
                    </div>
                ) : (
                    <Card>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{
                                    background: 'var(--primary-glow)',
                                    padding: '1rem',
                                    borderRadius: '0.5rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Music size={24} color="var(--primary)" />
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>{file.name}</div>
                                    <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{(file.size / (1024 * 1024)).toFixed(2)} MB</div>
                                </div>
                            </div>
                            <button
                                onClick={removeFile}
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                    color: 'var(--foreground)',
                                    opacity: 0.5,
                                    padding: '0.5rem'
                                }}
                            >
                                <X size={20} />
                            </button>
                        </div>
                    </Card>
                )}

                {/* Metadata Form */}
                <Card>
                    <h2 style={{ fontSize: '1.2rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>Track Details</h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <FormGroup label="Track Title" placeholder="e.g. Midnight City" />
                            <FormGroup label="Artist Name" placeholder="e.g. M83" />
                        </div>

                        <FormGroup label="Genre" placeholder="Select Genre..." />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>Artwork</label>
                            <div style={{
                                height: '150px',
                                width: '150px',
                                border: '1px dashed var(--glass-border)',
                                borderRadius: '0.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255,255,255,0.02)',
                                cursor: 'pointer'
                            }}>
                                <span style={{ fontSize: '0.8rem', opacity: 0.5 }}>Upload Cover</span>
                            </div>
                        </div>

                        <div style={{ paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'flex-end', gap: '1rem' }}>
                            <Button variant="ghost" type="button">Cancel</Button>
                            <Button variant="primary" type="submit">Distribute Track</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
}

function FormGroup({ label, placeholder }: { label: string, placeholder: string }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <label style={{ fontSize: '0.9rem', opacity: 0.8, fontWeight: 500 }}>{label}</label>
            <input
                type="text"
                placeholder={placeholder}
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    borderRadius: '0.5rem',
                    padding: '0.8rem 1rem',
                    color: 'var(--foreground)',
                    fontSize: '1rem',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    width: '100%'
                }}
                onFocus={(e) => e.target.style.borderColor = 'var(--primary)'}
                onBlur={(e) => e.target.style.borderColor = 'var(--glass-border)'}
            />
        </div>
    );
}
