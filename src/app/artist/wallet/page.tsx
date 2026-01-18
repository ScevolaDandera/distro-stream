'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { DollarSign, ArrowUpRight, Clock, CheckCircle } from 'lucide-react';

export default function WalletPage() {
    const [balance, setBalance] = useState(4230.50);
    const [isWithdrawing, setIsWithdrawing] = useState(false);

    const handleWithdraw = () => {
        setIsWithdrawing(true);
        // Simulate API call
        setTimeout(() => {
            setBalance(0);
            setIsWithdrawing(false);
            alert('Payout initiated! Funds will arrive instantly.');
        }, 2000);
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <header>
                <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Wallet</h1>
                <p style={{ opacity: 0.7 }}>Manage your earnings and payouts.</p>
            </header>

            {/* Balance Card */}
            <Card style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #115e34 100%)',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '3rem'
            }}>
                <div>
                    <div style={{ opacity: 0.8, color: '#000', fontWeight: 600, marginBottom: '0.5rem' }}>Available Balance</div>
                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#000' }}>
                        ${balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </div>
                </div>
                <Button
                    onClick={handleWithdraw}
                    disabled={balance <= 0 || isWithdrawing}
                    style={{
                        background: '#000',
                        color: '#fff',
                        padding: '1rem 2rem',
                        opacity: balance <= 0 || isWithdrawing ? 0.5 : 1
                    }}
                >
                    {isWithdrawing ? 'Processing...' : 'Withdraw Funds'}
                </Button>
            </Card>

            {/* Bank Details (Mock) */}
            <Card>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                        <div style={{ background: 'var(--glass-bg)', padding: '1rem', borderRadius: '50%' }}>
                            <DollarSign size={24} />
                        </div>
                        <div>
                            <div style={{ fontWeight: 'bold' }}>Bank of America</div>
                            <div style={{ opacity: 0.6, fontSize: '0.9rem' }}>**** **** **** 4242</div>
                        </div>
                    </div>
                    <Button variant="outline" size="sm">Edit Details</Button>
                </div>
            </Card>

            {/* Recent Transactions */}
            <div>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Recent Transactions</h2>
                <Card>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <TransactionItem
                            title="Royalty Payout - December"
                            date="Jan 15, 2026"
                            amount="+$1,250.00"
                            status="completed"
                        />
                        <TransactionItem
                            title="Royalty Payout - November"
                            date="Dec 15, 2025"
                            amount="+$980.50"
                            status="completed"
                        />
                        <TransactionItem
                            title="Withdrawal to Bank ****4242"
                            date="Dec 16, 2025"
                            amount="-$900.00"
                            status="completed"
                            type="withdrawal"
                        />
                        <TransactionItem
                            title="Royalty Payout - October"
                            date="Nov 15, 2025"
                            amount="+$850.00"
                            status="completed"
                        />
                    </div>
                </Card>
            </div>
        </div>
    );
}

function TransactionItem({ title, date, amount, status, type = 'income' }: { title: string, date: string, amount: string, status: string, type?: string }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem 0',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div style={{
                background: type === 'income' ? 'rgba(30, 215, 96, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                padding: '0.8rem',
                borderRadius: '50%',
                marginRight: '1rem'
            }}>
                {type === 'income' ? <ArrowUpRight size={20} color={type === 'income' ? 'var(--primary)' : 'white'} /> : <DollarSign size={20} />}
            </div>

            <div style={{ flex: 1 }}>
                <div style={{ fontWeight: 600 }}>{title}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6 }}>{date}</div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 'bold', color: type === 'income' ? 'var(--primary)' : 'var(--foreground)' }}>{amount}</div>
                <div style={{ fontSize: '0.8rem', opacity: 0.6, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.2rem' }}>
                    {status === 'completed' && <CheckCircle size={12} />} {status}
                </div>
            </div>
        </div>
    );
}
