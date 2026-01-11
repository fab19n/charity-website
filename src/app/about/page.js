import React from 'react';
import { CheckCircle, FileText, Search, Phone, Upload, UserCheck, ArrowRight,
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
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About</h1>
        </div>
      </section>
	  
	  {/* Foreword */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-smbold mb-12 text-gray-800">Why We Care</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">At 27Advisory, we have always believed that meaningful impact begins with clarity, integrity, and action. Over the years, we have met many people and organisations who genuinely want to help—individual donors, corporate CSR teams, 
            and compassionate Malaysians who simply wish to make a difference. Yet one common concern continues to surface: 
            "I want to help, but I don't know where to start… and I don't know which cases are genuine."</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">In today's world, countless individuals and community groups are silently struggling—single mothers, small welfare homes, rural communities, and grassroots 
            organisations with limited visibility. Many lack platforms to tell their stories or channels to reach those who can offer support. At the same time, donors often 
            hesitate because they cannot easily verify the legitimacy of these appeals.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">This is where we believe 27Advisory can contribute.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">As a management consulting firm grounded in structure, due diligence, and responsible governance, we saw an opportunity to use our strengths for social good. 
            Our CSR initiative aims to bridge the gap between those who want to help and those who genuinely need help—through a transparent, verified, and accessible platform.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">This platform does not collect funds and does not act as an intermediary for donations. Instead, it serves as a trusted connector. 
            We conduct independent verification to validate the authenticity, background, and needs of every organisation or individual before they are listed. 
            Once a case is verified, donors can reach out directly to provide support—whether monetary assistance, goods, services, or other forms of help.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">Our role is simple:<br />
            We verify. We connect. The community supports.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">Through this initiative, we hope to give donors confidence, give beneficiaries visibility, and give communities a reliable space where compassion meets accountability.
            This CSR programme reflects our belief that every organisation—regardless of size or industry—has a part to play in uplifting society. By creating a platform that 
            enables genuine giving, we aspire to make the act of helping easier, safer, and more immediate for everyone.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">Together, we can build a more connected and caring Malaysia.</p>
            
            <p className="text-gray-700 mb-4 leading-relaxed">27Advisory</p>
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