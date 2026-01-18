import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function Card({ children, className = '', hoverEffect = false, ...props }: CardProps) {
    return (
        <div
            className={`glass ${hoverEffect ? 'hover:bg-white/10 transition-colors duration-300' : ''} ${className}`}
            style={{
                borderRadius: '1rem',
                padding: '1.5rem',
                ...props.style
            }}
            {...props}
        >
            {children}
        </div>
    );
}
