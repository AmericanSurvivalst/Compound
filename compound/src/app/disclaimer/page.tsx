'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AlertTriangle } from 'lucide-react';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Header />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-3 mb-8">
          <AlertTriangle className="w-8 h-8 text-[var(--warning)]" />
          <h1 className="text-3xl font-bold">Disclaimer</h1>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold mb-4">Educational Purposes Only</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The information provided on Compound is for educational and informational purposes only. 
              It is not intended to be a substitute for professional medical advice, diagnosis, or treatment. 
              Always seek the advice of your physician or other qualified health provider with any questions 
              you may have regarding a medical condition or before starting any new supplement, medication, or treatment.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Not Medical Advice</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              Nothing on this website should be construed as medical advice. The compound information, 
              dosing protocols, and recommendations presented are based on available research and anecdotal 
              reports but should not replace consultation with a licensed healthcare professional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Legal Status</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
              Many compounds discussed on this website are not approved by the FDA for human use. 
              Some are classified as controlled substances. Others exist in legal gray areas as 
              &quot;research chemicals.&quot; Users are responsible for understanding and complying with the 
              laws in their jurisdiction.
            </p>
            <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2">
              <li>Anabolic steroids are Schedule III controlled substances in the United States</li>
              <li>SARMs are not approved for human use and are banned by WADA</li>
              <li>Many peptides are sold as &quot;research chemicals&quot; and are not FDA-approved</li>
              <li>Laws vary by country and change frequently</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Assumption of Risk</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              By using this website and the information provided, you acknowledge that you understand 
              the risks associated with the use of performance-enhancing compounds. You agree that 
              Compound and its creators are not responsible for any adverse effects, health complications, 
              legal issues, or other consequences that may result from your use of any compounds discussed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">No Endorsement</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              The inclusion of any compound on this website does not constitute an endorsement or 
              recommendation for its use. We do not encourage or promote the use of illegal substances 
              or the misuse of any medications or supplements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Accuracy of Information</h2>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              While we strive to provide accurate and up-to-date information, we make no warranties 
              or representations about the accuracy, completeness, or reliability of any content on 
              this website. Research on many of these compounds is ongoing, and new information may 
              emerge that contradicts or updates what is presented here.
            </p>
          </section>

          <section className="p-6 rounded-xl bg-red-500/10 border border-red-500/30">
            <h2 className="text-xl font-semibold mb-4 text-red-400">Important Warning</h2>
            <p className="text-red-400/80 leading-relaxed">
              Many compounds discussed on this website can have serious side effects, interact with 
              medications, and cause long-term health consequences. Some can be life-threatening. 
              Never use any compound without proper medical supervision, blood work monitoring, and 
              a thorough understanding of the risks involved.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
