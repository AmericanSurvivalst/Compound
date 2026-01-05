'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, ArrowLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/lib/data';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find(p => p.slug === slug);
  const otherPosts = blogPosts.filter(p => p.slug !== slug).slice(0, 2);

  if (!post) {
    return (
      <div className="min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post Not Found</h1>
            <Link href="/blog" className="text-[var(--accent-primary)] hover:underline">
              ← Back to blog
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.published_at,
    author: { '@type': 'Organization', name: 'Compound' },
    publisher: {
      '@type': 'Organization',
      name: 'Compound',
      logo: { '@type': 'ImageObject', url: 'https://compound.app/logo.svg' },
    },
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="mb-8">
          <Link href="/blog" className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">
            <ArrowLeft className="w-4 h-4" />
            All Articles
          </Link>
        </nav>

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
                return <h2 key={i} className="text-xl font-semibold mt-8 mb-4 text-[var(--text-primary)]">{block.replace('## ', '')}</h2>;
              }
              if (block.startsWith('**') && block.endsWith('**')) {
                return <p key={i} className="font-semibold text-[var(--text-primary)] mb-4">{block.replace(/\*\*/g, '')}</p>;
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

        {/* Related Posts */}
        {otherPosts.length > 0 && (
          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Keep Reading</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {otherPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.slug}`}
                  className="p-4 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors group"
                >
                  <span className="text-xs text-[var(--accent-primary)]">{p.category}</span>
                  <h4 className="font-medium mt-1 group-hover:text-[var(--accent-primary)] transition-colors">{p.title}</h4>
                  <div className="flex items-center gap-1 text-xs text-[var(--text-tertiary)] mt-2">
                    Read more <ChevronRight className="w-3 h-3" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
