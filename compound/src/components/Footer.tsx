import Link from 'next/link';

const footerLinks = {
  product: [
    { label: 'Compounds', href: '/compounds' },
    { label: 'Stacks', href: '/stacks' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Coach AI', href: '/auth' },
  ],
  learn: [
    { label: 'Blog', href: '/blog' },
    { label: 'Peptide Guide', href: '/blog/beginners-guide-to-peptides' },
    { label: 'SARM Guide', href: '/blog/sarms-vs-steroids' },
    { label: 'FAQ', href: '/faq' },
  ],
  company: [
    { label: 'About', href: '/about' },
    { label: 'Disclaimer', href: '/disclaimer' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 text-[var(--accent-primary)]">
                <svg viewBox="0 0 40 40" fill="none" className="w-full h-full">
                  <path d="M20 4L33.32 12V28L20 36L6.68 28V12L20 4Z" stroke="currentColor" strokeWidth="2.5"/>
                  <circle cx="20" cy="12" r="3" fill="currentColor"/>
                  <circle cx="28" cy="20" r="3" fill="currentColor"/>
                  <circle cx="20" cy="28" r="3" fill="currentColor"/>
                  <circle cx="12" cy="20" r="3" fill="currentColor"/>
                  <circle cx="20" cy="20" r="4" fill="currentColor"/>
                </svg>
              </div>
              <span className="text-lg font-bold">Compound</span>
            </Link>
            <p className="text-sm text-[var(--text-tertiary)] mb-4">
              Research-backed information on performance compounds. Know what you&apos;re taking.
            </p>
            <p className="text-xs text-[var(--text-tertiary)]">
              © {new Date().getFullYear()} Compound. All rights reserved.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-primary)]">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-primary)]">Learn</h3>
            <ul className="space-y-2">
              {footerLinks.learn.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-[var(--text-primary)]">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[var(--text-tertiary)] hover:text-[var(--text-secondary)] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[var(--border)]">
          <p className="text-xs text-[var(--text-tertiary)] text-center max-w-3xl mx-auto">
            <strong>Disclaimer:</strong> Information on this site is for educational purposes only. 
            Many compounds discussed are not FDA-approved for human use. Some are controlled substances. 
            Always consult a healthcare provider before using any compounds. We do not sell or distribute any substances.
          </p>
        </div>
      </div>
    </footer>
  );
}
