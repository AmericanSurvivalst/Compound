'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Learn</h1>
          <p className="text-lg text-[var(--text-secondary)]">
            Free guides to help you make informed decisions about performance compounds.
          </p>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] card-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-sm font-medium text-[var(--accent-primary)]">{post.category}</span>
                <span className="text-[var(--text-tertiary)]">•</span>
                <span className="flex items-center gap-1 text-sm text-[var(--text-tertiary)]">
                  <Clock className="w-4 h-4" />
                  {post.read_time} min read
                </span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--text-secondary)]">{post.excerpt}</p>
            </Link>
          ))}
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-[var(--accent-muted)] border border-green-500/20 text-center">
          <h3 className="text-xl font-semibold mb-2">Want the full protocols?</h3>
          <p className="text-[var(--text-secondary)] mb-4">
            Get complete dosing guides, stacks, and AI-powered assistance.
          </p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro - $5/month
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
