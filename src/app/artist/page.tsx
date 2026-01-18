import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function ArtistDashboard() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                    <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Dashboard</h1>
                    <p style={{ opacity: 0.7 }}>Welcome back, Generic Artist Name</p>
                </div>
                <Button variant="primary">Upload New Track</Button>
            </header>

            {/* Stats Row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                <StatCard title="Total Streams" value="1,234,567" trend="+12%" />
                <StatCard title="Monthly Listeners" value="45,230" trend="+5%" />
                <StatCard title="Revenue" value="$3,450.00" trend="+8%" />
            </div>

            {/* Recent Activity / Uploads */}
            <section>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Releases</h2>
                <Card>
                    <div style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                        <div style={{ display: 'flex', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem', opacity: 0.7 }}>
                            <div style={{ flex: 2 }}>Title</div>
                            <div style={{ flex: 1 }}>Status</div>
                            <div style={{ flex: 1 }}>Streams</div>
                            <div style={{ flex: 1 }}>Date</div>
                        </div>
                        {/* Mock Data Items */}
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{ display: 'flex', padding: '1rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                                <div style={{ flex: 2, fontWeight: 'bold' }}>Midnight Rain {i}</div>
                                <div style={{ flex: 1 }}><span style={{ background: 'rgba(30, 215, 96, 0.2)', color: 'var(--primary)', padding: '0.2rem 0.6rem', borderRadius: '1rem', fontSize: '0.8rem' }}>Live</span></div>
                                <div style={{ flex: 1 }}>12.5k</div>
                                <div style={{ flex: 1, opacity: 0.7 }}>Jan 18, 2026</div>
                            </div>
                        ))}
                    </div>
                </Card>
            </section>
        </div>
    );
}

function StatCard({ title, value, trend }: { title: string, value: string, trend: string }) {
    return (
        <Card hoverEffect>
            <div style={{ opacity: 0.7, marginBottom: '0.5rem' }}>{title}</div>
            <div style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>{value}</div>
            <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginTop: '0.5rem' }}>{trend} from last month</div>
        </Card>
    );
}
