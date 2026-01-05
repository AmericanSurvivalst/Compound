'use client';

import Link from 'next/link';
import { ArrowLeft, Beaker, BookOpen } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <BookOpen className="w-8 h-8 text-[var(--accent-primary)]" />
          <div>
            <h1 className="text-3xl font-bold">Free Guides</h1>
            <p className="text-[var(--text-secondary)]">Learn the fundamentals of performance optimization</p>
          </div>
        </div>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] card-hover"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium text-[var(--accent-primary)]">{post.category}</span>
                <span className="text-xs text-[var(--text-tertiary)]">•</span>
                <span className="text-xs text-[var(--text-tertiary)]">{post.read_time} min read</span>
              </div>
              <h2 className="text-xl font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                {post.title}
              </h2>
              <p className="text-[var(--text-secondary)]">{post.excerpt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
