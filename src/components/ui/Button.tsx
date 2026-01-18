import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    variant = 'primary',
    size = 'md',
    className = '',
    style,
    ...props
}: ButtonProps) {
    const baseStyles: React.CSSProperties = {
        borderRadius: '9999px',
        fontWeight: 600,
        cursor: 'pointer',
        border: 'none',
        transition: 'all 0.2s ease',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
    };

    const variants = {
        primary: {
            background: 'var(--primary)',
            color: '#000',
        },
        outline: {
            background: 'transparent',
            border: '1px solid var(--glass-border)',
            color: 'var(--foreground)',
        },
        ghost: {
            background: 'transparent',
            color: 'var(--foreground)',
        }
    };

    const sizes = {
        sm: { padding: '0.5rem 1rem', fontSize: '0.875rem' },
        md: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
        lg: { padding: '1rem 2rem', fontSize: '1.125rem' },
    };

    return (
        <button
            style={{
                ...baseStyles,
                ...variants[variant],
                ...sizes[size],
                ...style,
            }}
            className={className}
            {...props}
        />
    );
}
