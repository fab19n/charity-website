import React from 'react';
import Link from 'next/link';
import { 
  HeartHandshake, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  Lock, 
  Building2, 
  Flag, 
  XCircle, 
  CheckCircle,
  Phone,
  Mail,
  Link as LinkIcon,
  Handshake,
  ArrowLeft,
  ScrollText
} from 'lucide-react';

export default function PolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b sticky top-0 bg-white z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img 
              src="/icons/cmyc-logo.svg" 
              alt="CMYC Logo" 
              className="w-8 h-8"
            />
            <span className="font-bold text-xl text-gray-600">Check My Charity</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-blue-600">How It Works</Link>
            <Link href="/directory" className="text-gray-600 hover:text-blue-600">Directory</Link>
            <Link href="/admin" className="text-gray-600 hover:text-blue-600">Verification</Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          </div>
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-bg bg-gradient-to-br from-slate-900 to-slate-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
              <ScrollText className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Policy, Disclaimer & Verification Statement
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Transparency and trust are at the core of everything we do
          </p>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-center gap-3">
            <a href="#about" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              About Platform
            </a>
            <a href="#verification" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              Verification
            </a>
            <a href="#limitations" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              Limitations
            </a>
            <a href="#pdpa" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              PDPA Notice
            </a>
            <a href="#governance" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              Governance
            </a>
            <a href="#reporting" className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 transition-all">
              Reporting
            </a>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        
        {/* Section 1: About This Platform */}
        <section id="about" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <HeartHandshake className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. About This Platform</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-4 leading-relaxed">
              This platform is a Corporate Social Responsibility (CSR) initiative by <strong>27Advisory</strong> to connect donors directly with individuals, families, and organisations that genuinely need assistance.
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg mb-4">
              <p className="text-blue-800 font-medium">
                We serve only as a <strong>verifier and introducer</strong>. We <strong>do not</strong> collect, hold, manage, or distribute any form of funds or donations.
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              All donations, support and communication occur <strong>directly between the donor and the beneficiary</strong>.
            </p>
          </div>
        </section>

        {/* Section 2: Verification Methodology */}
        <section id="verification" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Verification Methodology</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              27Advisory conducts a <strong>best-effort verification process</strong> based on documents, declarations, interviews and, where relevant, additional checks.
            </p>
            
            <h3 className="font-semibold text-gray-900 mb-4">Our verification aims to confirm:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The identity of the organisation/individual</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">The legitimacy of the need</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Accuracy of information provided</span>
              </div>
              <div className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Supporting documents and evidence</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-amber-800 mb-2">Important Clarification</h4>
                  <p className="text-amber-700 text-sm leading-relaxed">
                    A "Verified" status means that, <strong>at the time of assessment</strong>, we found the case to be credible based on information available. It <strong>does NOT</strong> guarantee outcomes, long-term conduct, financial management, future behaviour, or absolute authenticity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Limitations of Responsibility */}
        <section id="limitations" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Limitations of Responsibility</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              By using this platform, users acknowledge and agree that:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">27Advisory does <strong>not</strong> guarantee the performance, actions, or behaviour of any beneficiary.</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">27Advisory does <strong>not</strong> participate in or oversee any donation transactions.</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">27Advisory is <strong>not liable</strong> for any loss, misuse, fraud, dispute, or misrepresentation arising between donors and beneficiaries.</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-gray-300">
                <XCircle className="w-5 h-5 text-gray-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All decisions to donate are made <strong>voluntarily</strong> and at the donor's own discretion and risk.</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: PDPA Notice */}
        <section id="pdpa" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Personal Data Protection (PDPA) Notice</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              In line with the Personal Data Protection Act (PDPA) of Malaysia:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Beneficiaries must provide <strong>explicit consent</strong> before submitting personal information.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">All data collected is used <strong>solely for verification, listing, and communication purposes</strong>.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Sensitive information is handled with confidentiality and stored according to our data-retention policy.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">We do not sell, rent or monetise personal data.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Individuals may request correction or removal of their data at any time.</span>
              </div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
              <p className="text-purple-800 text-sm">
                Full PDPA policy is available upon request.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5: Governance */}
        <section id="governance" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Building2 className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Governance & Independent CSR Entity</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              This platform may be operated under a separate CSR entity/foundation governed by its own board and oversight framework.
            </p>
            <h3 className="font-semibold text-gray-900 mb-4">The CSR entity will uphold:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Internal risk policies</span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Clear approval criteria</span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Periodic review of listed cases</span>
              </div>
              <div className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                <FileCheck className="w-5 h-5 text-indigo-600" />
                <span className="text-gray-700">Conflict-of-interest safeguards</span>
              </div>
            </div>
            <p className="text-gray-600 italic">
              This structure ensures transparency, independence and proper governance.
            </p>
          </div>
        </section>

        {/* Section 6: Reporting Issues */}
        <section id="reporting" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <Flag className="w-6 h-6 text-red-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">6. Reporting Issues, Fraud or Misconduct</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-6 leading-relaxed">
              We take integrity seriously. If you encounter suspicious activity, misinformation, or misconduct by any listed beneficiary, please alert us.
            </p>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
              <h3 className="font-semibold text-red-800 mb-4">Report a Problem:</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-red-600" />
                  <a href="mailto:csr@27advisory.com" className="text-red-700 hover:underline font-medium">
                    csr@27advisory.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Flag className="w-5 h-5 text-red-600" />
                  <Link href="/report" className="text-red-700 hover:underline font-medium">
                    Online Report Form
                  </Link>
                </div>
              </div>
              <p className="text-red-700 text-sm mt-4">
                Evidence or documentation may be requested for investigation.
              </p>
            </div>
            <p className="text-gray-700">
              Upon receiving a report, we may temporarily suspend, review or remove the listing.
            </p>
          </div>
        </section>

        {/* Section 7: Right to Remove */}
        <section id="removal" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
              <XCircle className="w-6 h-6 text-gray-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">7. Right to Remove or Decline Listings</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <p className="text-gray-700 mb-4 leading-relaxed">
              27Advisory reserves the right to:
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Decline applications</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Request further documentation</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Suspend doubtful listings</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-gray-700">Remove any case that fails re-verification or breaches our policies</span>
              </li>
            </ul>
            <p className="text-gray-600 italic">
              These actions ensure the trustworthiness of the platform.
            </p>
          </div>
        </section>

        {/* Section 8: Acceptance */}
        <section id="acceptance" className="mb-12 scroll-mt-24">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-8 h-8" />
              <h2 className="text-2xl font-bold">8. Acceptance of Terms</h2>
            </div>
            <p className="text-blue-100 leading-relaxed text-lg">
              By using this platform — whether as a donor, visitor or beneficiary — you acknowledge that you have read, understood and accepted this Policy & Disclaimer.
            </p>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-7">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="w-6 h-6" />
                <span className="font-bold">Check My Charity</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <p className="hover:text-white">A 27Advisory CSR Initiative</p>
                <li><Link href="/policy" className="hover:text-white">Policy, Disclaimer & Verification Statement</Link></li>
              </ul>                    
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-6 h-6" />
                <span className="font-bold">Quick Links</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Handshake className="w-6 h-6" />
                <span className="font-bold">Get Involved</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/directory" className="hover:text-white">Browse Directory</Link></li>
                <li><Link href="/apply" className="hover:text-white">Apply for Help</Link></li>
                <li><Link href="/report" className="hover:text-white">Report an Issue</Link></li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Phone className="w-6 h-6" />
                <span className="font-bold">Contact Us</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>cmyc@27advisory.com.my</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; Powered by 27 Digital | IRGA Digital Sdn Bhd. <br />2026, All rights reserved. | <Link href="/terms" className="hover:text-white">Terms</Link> | <Link href="/privacy" className="hover:text-white">Privacy</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}