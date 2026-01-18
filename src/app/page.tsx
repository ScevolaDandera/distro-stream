export default function Home() {
    return (
        <main style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2rem',
            padding: '2rem',
            textAlign: 'center'
        }}>
            <div className="glass" style={{
                padding: '3rem',
                borderRadius: '1rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
            }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>
                    Welcome to <span className="text-gradient">DistroStream</span>
                </h1>
                <p style={{ opacity: 0.8, fontSize: '1.2rem', maxWidth: '600px' }}>
                    The unified platform for artists and listeners.
                    Upload your music directly to the stream.
                </p>

                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
                    <button style={{
                        background: 'var(--primary)',
                        color: '#000',
                        border: 'none',
                        padding: '0.8rem 2rem',
                        borderRadius: '2rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        Download
                    </button>
                    <button style={{
                        background: 'transparent',
                        color: 'var(--foreground)',
                        border: '1px solid var(--glass-border)',
                        padding: '0.8rem 2rem',
                        borderRadius: '2rem',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                        Learn More
                    </button>
                </div>
            </div>
        </main>
    );
}
