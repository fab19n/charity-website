import React from 'react';
import { Wrench, CheckCircle, FileText, Search, Phone, Upload, UserCheck, ArrowRight,
		 HeartHandshake, ShieldCheck, Slash, Users, 
		 Mail, HandHeart, ScanEye, BanknoteX, HousePlus, ShieldPlus, GraduationCap, Link as LinkIcon, Handshake} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About | Check My Charity',
  description: 'Learn how our verification process works for both donors and those seeking help.',
};

export default function About() {
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
			      <Link href="/apply" className="text-gray-600 hover:text-blue-600">Apply for Help</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-bg bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
            <Wrench className="w-16 h-16 text-yellow-600 mx-auto mb-6" />
        </div>
      </section>

      {/* Under Construction Message */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Under Construction</h2>
          <p className="text-2xl mb-8 opacity-90">This page is currently under development.</p>
        </div>
        <div className="container mx-auto px-4 text-center">
          <a href="/" className="text-xl text-gray-600 hover:text-blue-600">
            ← Back to Home
          </a>
        </div>        
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Whether you want to help or need assistance, we're here for you.</p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/directory" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Browse Cases
            </Link>
            <Link href="/apply" className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-800 transition-colors border-2 border-white">
              Apply for Help
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 pt-8 bg-gray-900 text-white py-12">
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
                {/*<li><Link href="/verification" className="hover:text-white">Verification Process</Link></li>*/}
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