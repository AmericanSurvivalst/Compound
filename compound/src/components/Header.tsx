'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, User } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 text-[var(--accent-primary)] transition-transform group-hover:scale-110">
              <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                <path d="M20 4L33.32 12V28L20 36L6.68 28V12L20 4Z" stroke="currentColor" strokeWidth="2.5"/>
                <circle cx="20" cy="12" r="3" fill="currentColor"/>
                <circle cx="28" cy="20" r="3" fill="currentColor"/>
                <circle cx="20" cy="28" r="3" fill="currentColor"/>
                <circle cx="12" cy="20" r="3" fill="currentColor"/>
                <circle cx="20" cy="20" r="4" fill="currentColor"/>
                <line x1="20" y1="12" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                <line x1="28" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                <line x1="20" y1="28" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
                <line x1="12" y1="20" x2="20" y2="20" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <span className="text-xl font-bold tracking-tight">Compound</span>
          </Link>
          
          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/compounds" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Compounds
            </Link>
            <Link href="/stacks" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Stacks
            </Link>
            <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Learn
            </Link>
            <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              Pricing
            </Link>
            <Link 
              href="/auth"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
            >
              <User className="w-4 h-4" />
              Sign In
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--border)]">
            <nav className="flex flex-col gap-4">
              <Link href="/compounds" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(false)}>
                Compounds
              </Link>
              <Link href="/stacks" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(false)}>
                Stacks
              </Link>
              <Link href="/blog" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(false)}>
                Learn
              </Link>
              <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]" onClick={() => setMobileMenuOpen(false)}>
                Pricing
              </Link>
              <Link 
                href="/auth"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-[var(--accent-primary)] text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <User className="w-4 h-4" />
                Sign In
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
