'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Beaker, Mail, Lock, Check } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Supabase auth
    console.log('Auth:', { email, password, isLogin });
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)]">
        <div className="max-w-md mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Compound</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? 'Welcome back' : 'Get Pro Access'}
          </h1>
          <p className="text-[var(--text-secondary)]">
            {isLogin ? 'Sign in to your account' : 'Create your account to unlock everything'}
          </p>
        </div>

        {/* Pro Benefits */}
        {!isLogin && (
          <div className="mb-8 p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <h3 className="font-medium mb-3">Pro includes:</h3>
            <ul className="space-y-2">
              {[
                'Full access to all 50+ compounds',
                'Complete dosing protocols',
                'AI Coach for personalized guidance',
                'Verified source recommendations',
                'Exclusive stacks and protocols',
              ].map((benefit, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                  <Check className="w-4 h-4 text-[var(--accent-primary)]" />
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[var(--border)]">
              <span className="text-2xl font-bold">$5</span>
              <span className="text-[var(--text-secondary)]">/month</span>
            </div>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-tertiary)]" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)]"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-colors"
          >
            {isLogin ? 'Sign In' : 'Create Account & Subscribe'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {isLogin ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
          </button>
        </div>

        {!isLogin && (
          <p className="mt-6 text-xs text-center text-[var(--text-tertiary)]">
            By signing up, you agree to be charged $5/month. Cancel anytime.
          </p>
        )}
      </main>
    </div>
  );
}
