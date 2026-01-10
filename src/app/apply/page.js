'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Upload, CheckCircle, AlertCircle, FileText, Phone, Mail, MapPin, DollarSign, Building, User, ArrowRight, X } from 'lucide-react';

export default function ApplyPage() {
	  const [formData, setFormData] = useState({
		// Organisation/Individual Info
		applicationType: 'organisation', // organisation or individual
		organisationName: '',
		contactPerson: '',
		category: '',
		icNumber: '',
		registrationNumber: '',
		
		// Contact Details
		email: '',
		phone: '',
		alternatePhone: '',
		address: '',
		city: '',
		state: '',
		postcode: '',
		
		// Need Details
		assistanceType: '',
		amountNeeded: '',
		description: '',
		reasonForHelp: '',
		
		// Bank Details
		bankName: '',
		accountNumber: '',
		accountName: '',
		
		// Consent
		consentVerification: false,
		consentPublish: false,
	  });

	  const [uploadedFiles, setUploadedFiles] = useState([]);
	  const [isSubmitting, setIsSubmitting] = useState(false);
	  const [submitStatus, setSubmitStatus] = useState(null);

	  const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData(prev => ({
		  ...prev,
		  [name]: type === 'checkbox' ? checked : value
		}));
	  };

	  const handleFileUpload = (e) => {
		const files = Array.from(e.target.files);
		const newFiles = files.map(file => ({
		  name: file.name,
		  size: (file.size / 1024).toFixed(2) + ' KB',
		  file: file
		}));
		setUploadedFiles(prev => [...prev, ...newFiles]);
	  };

	  const removeFile = (index) => {
		setUploadedFiles(prev => prev.filter((_, i) => i !== index));
	  };

	 const handleSubmit = async (e) => {
	 e.preventDefault();
	 setIsSubmitting(true);
	  
	 try {
	   // Step 1: Upload files first (if any)
	   let uploadedDocuments = [];
		
	   if (uploadedFiles.length > 0) {
	     const fileFormData = new FormData();
		  
		 // Add all files to FormData
		 uploadedFiles.forEach((fileObj) => {
			fileFormData.append('files', fileObj.file);
		 });
		  
		 // Upload files
		 const uploadResponse = await fetch('/api/upload', {
			method: 'POST',
			body: fileFormData,
		 });
		  
		 const uploadResult = await uploadResponse.json();
		  
		 if (!uploadResult.success) {
			throw new Error('Failed to upload files');
		 }
		  
		  uploadedDocuments = uploadResult.files;
	    }
		
	    // Step 2: Prepare application data
	    const submitData = {
		  applicationType: formData.applicationType,
		  organisationName: formData.organisationName,
		  contactPerson: formData.contactPerson,
		  category: formData.category,
		  icNumber: formData.icNumber,
		  registrationNumber: formData.registrationNumber,
		  email: formData.email,
		  phone: formData.phone,
		  alternatePhone: formData.alternatePhone,
		  address: formData.address,
		  city: formData.city,
		  state: formData.state,
		  postcode: formData.postcode,
		  assistanceType: formData.assistanceType,
		  amountNeeded: formData.amountNeeded,
		  description: formData.description,
		  reasonForHelp: formData.reasonForHelp,
		  bankName: formData.bankName,
		  accountNumber: formData.accountNumber,
		  accountName: formData.accountName,
		  consentVerification: formData.consentVerification,
		  consentPublish: formData.consentPublish,
		  documents: uploadedDocuments, // Add uploaded files info
		};
		
		// Step 3: Submit application with file references
		const response = await fetch('/api/applications/submit', {
		  method: 'POST',
		  headers: {
			'Content-Type': 'application/json',
		  },
		  body: JSON.stringify(submitData),
		});
		
		const result = await response.json();
		
		if (result.success) {
		  setIsSubmitting(false);
		  setSubmitStatus('success');
		  window.scrollTo({ top: 0, behavior: 'smooth' });
		} else {
		  throw new Error(result.message || 'Submission failed');
		}
		
	  } catch (error) {
		console.error('Submission error:', error);
		setIsSubmitting(false);
		alert('Failed to submit application: ' + error.message);
	  }
	};
	
  if (submitStatus === 'success') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b bg-white">
          <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="font-bold text-xl text-gray-600">Check My Charity</span>
            </Link>
          </nav>
        </header>

        {/* Success Message */}
        <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Application Submitted Successfully!</h1>
          <p className="text-lg text-gray-600 mb-8">
            Thank you for submitting your application. Our verification team will review your case within 5-7 working days.
          </p>
          <div className="bg-blue-50 rounded-lg p-6 mb-8 text-left">
            <h3 className="font-bold text-lg mb-3">What Happens Next?</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">1.</span>
                <span>Our team will review your application and supporting documents</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">2.</span>
                <span>We may contact you for additional information or verification</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">3.</span>
                <span>Once approved, your case will be listed in our directory</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600 font-bold">4.</span>
                <span>Donors can then contact you directly to provide assistance</span>
              </li>
            </ul>
          </div>
          <p className="text-gray-600 mb-8">
            We will send updates to: <strong>{formData.email}</strong>
          </p>
          <Link href="/" className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b bg-white">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">C</span>
            </div>
            <span className="font-bold text-xl text-gray-600">Check My Charity</span>
          </Link>
          <Link href="/" className="text-gray-600 hover:text-blue-600">
            ← Back to Home
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-bg bg-gradient-to-br from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Apply for Help</h1>
          <p className="text-lg text-gray-600">
            Fill out this form to submit your case for verification. Our team will review your application within 5-7 working days.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            
            {/* Application Type */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Building className="w-6 h-6 text-blue-600" />
                Application Type
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.applicationType === 'organisation' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                  <input
                    type="radio"
                    name="applicationType"
                    value="organisation"
                    checked={formData.applicationType === 'organisation'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <span className="font-semibold">Organisation / NGO</span>
                  <p className="text-sm text-gray-600 ml-6 mt-1">Registered charity, welfare home, temple, school, etc.</p>
                </label>
                
                <label className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${formData.applicationType === 'individual' ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                  <input
                    type="radio"
                    name="applicationType"
                    value="individual"
                    checked={formData.applicationType === 'individual'}
                    onChange={handleInputChange}
                    className="mr-3"
                  />
                  <span className="font-semibold">Individual / Family</span>
                  <p className="text-sm text-gray-600 ml-6 mt-1">Personal hardship, medical need, education support, etc.</p>
                </label>
              </div>
            </div>

            <hr className="my-8" />

            {/* Basic Information */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-6 h-6 text-blue-600" />
                Basic Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {formData.applicationType === 'organisation' ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Organisation Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="organisationName"
                        value={formData.organisationName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., Rumah Sejahtera Old Folks Home"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Registration Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="registrationNumber"
                        value={formData.registrationNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="e.g., PPM-XXX-XXXX"
                      />
                    </div>
                  </>
                ) : (
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organisationName"
                      value={formData.organisationName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                )}
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Contact Person <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Name of primary contact"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    IC Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="icNumber"
                    value={formData.icNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="XXXXXX-XX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select category</option>
                    <option value="ngo">NGO / Welfare Home</option>
                    <option value="education">Education / School</option>
                    <option value="medical">Medical / Healthcare</option>
                    <option value="religious">Religious Organisation</option>
                    <option value="individual-medical">Individual - Medical</option>
                    <option value="individual-education">Individual - Education</option>
                    <option value="individual-hardship">Individual - Financial Hardship</option>
                    <option value="community">Community Project</option>
                    <option value="emergency">Emergency / Disaster Relief</option>
                  </select>
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* Contact Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="w-6 h-6 text-blue-600" />
                Contact Details
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="01X-XXX XXXX"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    rows="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Full address"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Kuala Lumpur"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    State <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select state</option>
                    <option value="Johor">Johor</option>
                    <option value="Kedah">Kedah</option>
                    <option value="Kelantan">Kelantan</option>
                    <option value="Melaka">Melaka</option>
                    <option value="Negeri Sembilan">Negeri Sembilan</option>
                    <option value="Pahang">Pahang</option>
                    <option value="Penang">Penang</option>
                    <option value="Perak">Perak</option>
                    <option value="Perlis">Perlis</option>
                    <option value="Sabah">Sabah</option>
                    <option value="Sarawak">Sarawak</option>
                    <option value="Selangor">Selangor</option>
                    <option value="Terengganu">Terengganu</option>
                    <option value="WP Kuala Lumpur">WP Kuala Lumpur</option>
                    <option value="WP Labuan">WP Labuan</option>
                    <option value="WP Putrajaya">WP Putrajaya</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Postcode <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="postcode"
                    value={formData.postcode}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="XXXXX"
                  />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* Need Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Details of Need
              </h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Type of Assistance Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="assistanceType"
                    value={formData.assistanceType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select type</option>
                    <option value="financial">Financial / Money</option>
                    <option value="food">Food / Groceries</option>
                    <option value="medical">Medical Treatment / Equipment</option>
                    <option value="education">Education Fees / Supplies</option>
                    <option value="housing">Housing / Accommodation</option>
                    <option value="items">Items / Goods</option>
                    <option value="services">Services / Volunteer Time</option>
                    <option value="multiple">Multiple Types</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Amount / Value Needed <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">RM</span>
                    <input
                      type="text"
                      name="amountNeeded"
                      value={formData.amountNeeded}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="0.00"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-1">If not financial, provide estimated value of items/services needed</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Description of Need <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Describe what you need help with. Be specific about the type and amount of assistance required."
                  />
                  <p className="text-sm text-gray-500 mt-1">Provide a clear, detailed description of your situation and needs</p>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Reason for Seeking Help <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="reasonForHelp"
                    value={formData.reasonForHelp}
                    onChange={handleInputChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Explain why you are seeking help and how it will be used."
                  />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* Bank Details */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-blue-600" />
                Bank Account Details (For Direct Donations)
              </h2>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-yellow-800 flex gap-2">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>This information will be shared with donors so they can transfer funds directly to you. Please ensure accuracy.</span>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Bank Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="bankName"
                    value={formData.bankName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., Maybank"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountNumber"
                    value={formData.accountNumber}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="XXXXXXXXXX"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Account Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="accountName"
                    value={formData.accountName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Account holder name (must match bank records)"
                  />
                </div>
              </div>
            </div>

            <hr className="my-8" />

            {/* Document Upload */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Upload className="w-6 h-6 text-blue-600" />
                Supporting Documents
              </h2>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-blue-800 font-semibold mb-2">Please upload the following:</p>
                <ul className="text-sm text-blue-700 space-y-1 ml-4">
                  <li>• Copy of IC / Registration certificate</li>
                  <li>• Proof of need (bills, invoices, quotations, medical reports)</li>
                  <li>• Photos of your organization/situation</li>
                  <li>• Any other supporting documents</li>
                </ul>
              </div>
              
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-blue-400 transition-colors">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <label className="cursor-pointer">
                  <span className="text-blue-600 hover:text-blue-700 font-semibold">Click to upload files</span>
                  <span className="text-gray-600"> or drag and drop</span>
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">PDF, JPG, PNG, DOC up to 10MB each</p>
              </div>
              
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-2">
                  <p className="font-semibold text-gray-700">Uploaded Files:</p>
                  {uploadedFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <hr className="my-8" />

            {/* Consent */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consent & Agreement</h2>
              
              <div className="space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consentPublish"
                    checked={formData.consentPublish}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">
                    I consent to my case being published on the Check My Charity directory if verified. I understand that my contact details and bank information will be shared with potential donors. <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
			</div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                //disabled={isSubmitting || !formData.consentVerification || !formData.consentPublish}
                className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-12 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 transition-colors shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Application
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-4">
              By submitting this form, you agree to our verification process and terms of service.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 Check My Charity - A 27Advisory CSR Initiative</p>
        </div>
      </footer>
    </div>
  );
}	