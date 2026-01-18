import React, { forwardRef } from 'react';
import { Search } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', icon, style, ...props }, ref) => {
        return (
            <div style={{ position: 'relative', width: '100%' }}>
                {icon && (
                    <div style={{
                        position: 'absolute',
                        left: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        pointerEvents: 'none',
                        opacity: 0.5,
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        {icon}
                    </div>
                )}
                <input
                    ref={ref}
                    style={{
                        width: '100%',
                        background: 'var(--glass-bg)',
                        border: '1px solid transparent',
                        color: 'var(--foreground)',
                        padding: '0.8rem 1rem',
                        paddingLeft: icon ? '3rem' : '1rem',
                        borderRadius: '2rem',
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'all 0.2s',
                        ...style
                    }}
                    className={className}
                    onFocus={(e) => {
                        e.currentTarget.style.background = '#333';
                        e.currentTarget.style.border = '1px solid #555';
                    }}
                    onBlur={(e) => {
                        e.currentTarget.style.background = 'var(--glass-bg)';
                        e.currentTarget.style.border = '1px solid transparent';
                    }}
                    {...props}
                />
            </div>
        );
    }
);

Input.displayName = 'Input';
