import Link from 'next/link';

export default function ArtistLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            {/* Sidebar */}
            <aside style={{
                width: '250px',
                borderRight: '1px solid var(--glass-border)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                position: 'fixed',
                height: '100vh',
                backdropFilter: 'blur(10px)',
                backgroundColor: 'rgba(0,0,0,0.5)'
            }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                    <span className="text-gradient">DistroStream</span>
                    <div style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.2rem' }}>for Artists</div>
                </div>

                <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <NavLink href="/artist">Dashboard</NavLink>
                    <NavLink href="/artist/upload">Upload Music</NavLink>
                    <NavLink href="/artist/analytics">Analytics</NavLink>
                    <NavLink href="/artist/wallet">Royalties</NavLink>
                </nav>

                <div style={{ marginTop: 'auto' }}>
                    <Link href="/" style={{ opacity: 0.6, fontSize: '0.9rem' }}>← Back to Home</Link>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                marginLeft: '250px',
                padding: '2rem',
                maxWidth: '1200px'
            }}>
                {children}
            </main>
        </div>
    );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link
            href={href}
            style={{
                padding: '0.8rem 1rem',
                borderRadius: '0.5rem',
                background: 'var(--glass-bg)',
                border: '1px solid transparent',
                transition: 'all 0.2s',
            }}
        // Note: In a real app we'd add active state logic here
        >
            {children}
        </Link>
    );
}
