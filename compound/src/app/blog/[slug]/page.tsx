'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Beaker, Clock } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
          <Link href="/blog" className="text-[var(--accent-primary)] hover:underline">
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* Header */}
      <header className="border-b border-[var(--border)] sticky top-0 z-50 glass">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/blog" className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Articles
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <Beaker className="w-4 h-4 text-white" />
              </div>
              <span className="text-sm font-medium">Compound</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-medium text-[var(--accent-primary)]">{post.category}</span>
              <span className="text-[var(--text-tertiary)]">•</span>
              <span className="flex items-center gap-1 text-sm text-[var(--text-tertiary)]">
                <Clock className="w-4 h-4" />
                {post.read_time} min read
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-xl text-[var(--text-secondary)]">{post.excerpt}</p>
          </div>

          <div className="prose prose-invert prose-green max-w-none">
            {post.content.split('\n\n').map((block, i) => {
              if (block.startsWith('## ')) {
                return <h2 key={i} className="text-xl font-semibold mt-8 mb-4">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('**') && block.endsWith('**')) {
                return <p key={i} className="font-semibold text-[var(--text-primary)]">{block.replace(/\*\*/g, '')}</p>;
              }
              return <p key={i} className="text-[var(--text-secondary)] mb-4 leading-relaxed">{block}</p>;
            })}
          </div>
        </article>

        {/* CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] text-center">
          <h3 className="text-xl font-semibold mb-2">Want the full protocols?</h3>
          <p className="text-[var(--text-secondary)] mb-4">Get detailed dosing, stacks, and AI-powered guidance.</p>
          <Link 
            href="/auth"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--accent-primary)] text-white hover:bg-[var(--accent-secondary)] transition-colors"
          >
            Get Pro - $5/month
          </Link>
        </div>
      </main>
    </div>
  );
}
