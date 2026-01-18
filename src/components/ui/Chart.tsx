'use client';

import React from 'react';

export function SimpleLineChart({ data, color = 'var(--primary)' }: { data: number[], color?: string }) {
    const max = Math.max(...data);
    const min = Math.min(...data); // usually 0
    const height = 200;
    const width = 600;

    // Normalize data points
    const points = data.map((val, idx) => {
        const x = (idx / (data.length - 1)) * width;
        const y = height - ((val / max) * height * 0.8) - 10; // 80% height usage + padding
        return `${x},${y}`;
    }).join(' ');

    const fillPath = `${points} ${width},${height} 0,${height}`;

    return (
        <div style={{ width: '100%', height: '200px', overflow: 'hidden' }}>
            <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                {/* Fill Gradient */}
                <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                        <stop offset="100%" stopColor={color} stopOpacity="0" />
                    </linearGradient>
                </defs>

                <path d={`M ${fillPath} Z`} fill="url(#chartGradient)" stroke="none" />
                <polyline points={points} fill="none" stroke={color} strokeWidth="3" vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" />

                {/* Dots */}
                {data.map((val, idx) => {
                    const x = (idx / (data.length - 1)) * width;
                    const y = height - ((val / max) * height * 0.8) - 10;
                    return (
                        <circle key={idx} cx={x} cy={y} r="4" fill="#000" stroke={color} strokeWidth="2" />
                    )
                })}
            </svg>
        </div>
    );
}
