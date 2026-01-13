import React from 'react';
import Link from 'next/link';
import { HeartHandshake, ShieldCheck, Slash, Users, CheckCircle, ArrowRight, Phone, Mail, HandHeart, ScanEye, BanknoteX, HousePlus, ShieldPlus, GraduationCap, Link as LinkIcon, Handshake } from 'lucide-react';

export default function Home() {
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
      <section className="hero-bg bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Featured Verified Cases</h1>
        </div>
      </section>
	  
      {/* Featured Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sample Listing Card 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                <Users className="w-20 h-20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    NGO / Welfare Home
                  </span>
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Rumah Sejahtera Old Folks Home
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Monthly groceries assistance needed for 28 elderly residents. RM2,800 required.
                </p>
                <Link href="/under-construction" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-center">
                  View Details
                </Link>
              </div>
            </div>

            {/* Sample Listing Card 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                <GraduationCap className="w-20 h-20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-green-100 text-green-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Individual / Education
                  </span>
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Single Mother - School Fees Support
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Help needed for school fees and uniforms for two children. RM1,200 needed.
                </p>
                <Link href="/under-construction" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-center">
                  View Details
                </Link>
              </div>
            </div>

            {/* Sample Listing Card 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white">
                <ShieldPlus className="w-20 h-20" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-3 py-1 rounded-full">
                    Medical / Emergency
                  </span>
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="font-bold text-lg mb-2">
                  Medical Treatment Fund
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Urgent medical treatment assistance for cancer patient. RM15,000 needed.
                </p>
                <Link href="/under-construction" className="block w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-center">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-500">Why Trust This Platform?</h2>
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-gray-700 mb-4 leading-relaxed">
              Check My Charity is a CSR initiative by 27Advisory, dedicated to creating a transparent ecosystem where genuine needs meet caring donors. Every case listed on our platform undergoes rigorous verification to ensure legitimacy and trust.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-500">Every case is thoroughly verified by 27Advisory's CSR team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-500">All documentation is carefully screened and validated</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-500">Zero intermediaries - donate directly to beneficiaries</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-gray-500">No hidden fees or charges - 100% of your help reaches those in need</span>
              </li>
            </ul>
            <Link href="/verification" className="text-blue-600 font-semibold hover:underline flex items-center gap-2">
              Learn about our verification methodology <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
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