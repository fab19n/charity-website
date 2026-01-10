import React from 'react';
import { CheckCircle, FileText, Search, Phone, Upload, UserCheck, ArrowRight,
		 HeartHandshake, ShieldCheck, Slash, Users, 
		 Mail, HandHeart, ScanEye, BanknoteX, HousePlus, ShieldPlus, GraduationCap, Link as LinkIcon, Handshake} from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'How It Works | Check My Charity',
  description: 'Learn how our verification process works for both donors and those seeking help.',
};

export default function HowItWorks() {
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">How It Works</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent, and trusted. We verify every case so you can help with confidence.
          </p>
        </div>
      </section>

      {/* Two Pathways */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* For Donors */}
            <div className="bg-white rounded-xl border-2 border-blue-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">For Donors</h2>
              <p className="text-gray-600 text-center mb-8">Want to help? Here's how to donate safely.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Browse Verified Cases</h3>
                    <p className="text-gray-600 text-sm">Visit our directory and explore cases by category, location, or urgency level.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Review Full Details</h3>
                    <p className="text-gray-600 text-sm">See complete information, supporting documents, and our verification checklist.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Contact Directly</h3>
                    <p className="text-gray-600 text-sm">Reach out to the organization or individual via their contact details provided.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">Donate Your Way</h3>
                    <p className="text-gray-600 text-sm">Send funds, items, or volunteer time directly. You decide how to help.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/directory" className="mt-8 w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Browse Directory <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* For Those Seeking Help */}
            <div className="bg-white rounded-xl border-2 border-green-200 p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Upload className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-center mb-6">For Those Seeking Help</h2>
              <p className="text-gray-600 text-center mb-8">Need assistance? Here's how to apply.</p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                  <div>
                    <h3 className="font-semibold mb-2">Submit Application</h3>
                    <p className="text-gray-600 text-sm">Fill out our simple form with details about your organization or need.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                  <div>
                    <h3 className="font-semibold mb-2">Upload Documents</h3>
                    <p className="text-gray-600 text-sm">Provide registration certificates, bills, or other supporting evidence.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                  <div>
                    <h3 className="font-semibold mb-2">Verification Process</h3>
                    <p className="text-gray-600 text-sm">Our team reviews your case within 5-7 working days.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                  <div>
                    <h3 className="font-semibold mb-2">Get Listed</h3>
                    <p className="text-gray-600 text-sm">Once approved, your case appears in our verified directory.</p>
                  </div>
                </div>
              </div>
              
              <Link href="/apply" className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors">
                Apply for Help <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verification Process Detail */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">Our 6-Step Verification Process</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Document Submission</h3>
                <p className="text-gray-600">Applicants provide proof of need, identity documents, invoices, and supporting evidence.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Preliminary Review</h3>
                <p className="text-gray-600">Our CSR team conducts an initial review to ensure all required information is complete.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Background Check</h3>
                <p className="text-gray-600">We verify registration status, online presence, and legitimacy of the organization or individual.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Verification Call</h3>
                <p className="text-gray-600">We conduct a phone interview to confirm details and assess the genuine nature of the need.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Evidence Review</h3>
                <p className="text-gray-600">Photos, bills, and letters are authenticated. Site visits may be conducted for larger cases.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-6 flex gap-4 items-start shadow-sm">
              <div className="w-12 h-12 bg-green-600 text-white rounded-lg flex items-center justify-center font-bold flex-shrink-0">6</div>
              <div>
                <h3 className="font-bold text-lg mb-2">Approval & Publish</h3>
                <p className="text-gray-600">Approved cases receive a "Verified by 27Advisory" badge and are published to our directory.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Verify */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">What We Verify</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-bold mb-2">Identity & Registration</h3>
              <p className="text-gray-600 text-sm">Valid IC, registration certificates, and organizational credentials</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Financial Need</h3>
              <p className="text-gray-600 text-sm">Invoices, bills, quotations, and proof of hardship</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="font-bold mb-2">Legitimacy</h3>
              <p className="text-gray-600 text-sm">Background checks, phone verification, and site visits when needed</p>
            </div>
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
              <p className="text-gray-400 text-sm">
                A 27Advisory CSR Initiative
              </p>
              <p className="text-gray-400 text-sm">
                Policy, Disclaimer & Verification Statement
              </p>       
            </div>
            <div>
              <div className="flex items-center gap-2 mb-4">
                <LinkIcon className="w-6 h-6" />
                <span className="font-bold">Quick Links</span>
              </div>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white">How It Works</Link></li>
                <li><Link href="/verification" className="hover:text-white">Verification Process</Link></li>
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
            <p>&copy; Powered by 27 Digital | IRGA Digital Sdn Bhd. <br />2025, All rights reserved. | <Link href="/terms" className="hover:text-white">Terms</Link> | <Link href="/privacy" className="hover:text-white">Privacy</Link></p>
          </div>
        </div>
      </footer>
    </div>
  );
}