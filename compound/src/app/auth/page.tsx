'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Lock, Check, ArrowRight } from 'lucide-react';

const proFeatures = [
  'Full access to all 50+ compounds',
  'Complete dosing protocols',
  'Side effect management guides',
  'Curated stacks for every goal',
  'Verified source recommendations',
  'Coach AI for personalized guidance',
  'New compounds added monthly',
  'Cancel anytime - no commitment',
];

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Implement Supabase auth
    console.log('Auth:', { email, password, isLogin });
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - Benefits */}
          <div className="hidden md:block">
            <h1 className="text-3xl font-bold mb-4">
              {isLogin ? 'Welcome back' : 'Unlock everything'}
            </h1>
            <p className="text-[var(--text-secondary)] mb-8">
              {isLogin 
                ? 'Sign in to access your Pro features and continue learning.'
                : 'Get full access to all compounds, protocols, and AI-powered guidance.'
              }
            </p>

            {!isLogin && (
              <>
                <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] mb-6">
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-4xl font-bold">$5</span>
                    <span className="text-[var(--text-tertiary)]">/month</span>
                  </div>
                  <ul className="space-y-3">
                    {proFeatures.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                        <Check className="w-4 h-4 text-[var(--accent-primary)] flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 text-sm text-[var(--text-tertiary)]">
                  <div className="flex -space-x-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[var(--bg-tertiary)] border-2 border-[var(--bg-primary)]" />
                    ))}
                  </div>
                  <span>Joined by 2,000+ optimizers</span>
                </div>
              </>
            )}
          </div>

          {/* Right - Form */}
          <div className="max-w-md mx-auto md:mx-0 w-full">
            <div className="p-8 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
              <h2 className="text-xl font-bold mb-6 md:hidden">
                {isLogin ? 'Sign in' : 'Create account'}
              </h2>
              <h2 className="text-xl font-bold mb-6 hidden md:block">
                {isLogin ? 'Sign in' : 'Create your account'}
              </h2>

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
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)]"
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
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:outline-none focus:border-[var(--accent-primary)]"
                      required
                      minLength={8}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[var(--accent-primary)] text-white font-medium hover:bg-[var(--accent-secondary)] transition-colors disabled:opacity-50"
                >
                  {loading ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      {isLogin ? 'Sign In' : 'Create Account & Subscribe'}
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
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
                  By signing up, you agree to our{' '}
                  <Link href="/terms" className="underline">Terms</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="underline">Privacy Policy</Link>.
                  You&apos;ll be charged $5/month after signup.
                </p>
              )}
            </div>

            {isLogin && (
              <p className="text-center mt-4">
                <Link href="/auth/reset" className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]">
                  Forgot your password?
                </Link>
              </p>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
