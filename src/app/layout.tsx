import './globals.css';
import type { Metadata } from 'next';
import { PlayerProvider } from '@/context/PlayerContext';
import { Player } from '@/components/player/Player';

export const metadata: Metadata = {
    title: 'DistroStream - distribute & listen',
    description: 'The future of music distribution and streaming.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
