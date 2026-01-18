import { Card } from '@/components/ui/Card';
import { SimpleLineChart } from '@/components/ui/Chart';

export default function AnalyticsPage() {
    const streamData = [1200, 1900, 1500, 2200, 2800, 2400, 3100, 3500];
    const revenueData = [50, 85, 60, 120, 150, 140, 200, 250];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Analytics</h1>
                <p style={{ opacity: 0.7 }}>Track your performance and earnings.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
                <MetricCard title="Total Steams" value="1.2M" sub="+12.5%" />
                <MetricCard title="Listeners" value="342.1K" sub="+5.2%" />
                <MetricCard title="Saves" value="45.2K" sub="+8.1%" />
                <MetricCard title="Revenue" value="$4,230" sub="+$420" />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                <Card style={{ padding: '2rem' }}>
                    <div style={{ marginBottom: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Streaming Trends</h3>
                        <select style={{ background: 'transparent', color: '#fff', border: '1px solid var(--glass-border)', padding: '0.5rem', borderRadius: '0.5rem' }}>
                            <option>Last 7 Days</option>
                            <option>Last 28 Days</option>
                        </select>
                    </div>
                    <SimpleLineChart data={streamData} color="var(--primary)" />
                </Card>

                <Card style={{ padding: '2rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>Top Locations</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <LocationBar city="London" country="UK" percent={35} />
                        <LocationBar city="Los Angeles" country="USA" percent={28} />
                        <LocationBar city="Berlin" country="Germany" percent={15} />
                        <LocationBar city="Paris" country="France" percent={12} />
                        <LocationBar city="Tokyo" country="Japan" percent={10} />
                    </div>
                </Card>
            </div>

            <Card style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Revenue Growth</h3>
                <SimpleLineChart data={revenueData} color="var(--accent)" />
            </Card>
        </div>
    );
}

function MetricCard({ title, value, sub }: { title: string, value: string, sub: string }) {
    return (
        <Card>
            <div style={{ opacity: 0.7, marginBottom: '0.2rem' }}>{title}</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>{value}</div>
            <div style={{ color: 'var(--primary)', fontSize: '0.9rem', marginTop: '0.2rem' }}>{sub}</div>
        </Card>
    );
}

function LocationBar({ city, country, percent }: { city: string, country: string, percent: number }) {
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.3rem', fontSize: '0.9rem' }}>
                <span>{city}, <span style={{ opacity: 0.6 }}>{country}</span></span>
                <span>{percent}%</span>
            </div>
            <div style={{ height: '6px', background: 'var(--glass-border)', borderRadius: '3px', overflow: 'hidden' }}>
                <div style={{ width: `${percent}%`, background: 'var(--foreground)', height: '100%', borderRadius: '3px' }} />
            </div>
        </div>
    );
}
