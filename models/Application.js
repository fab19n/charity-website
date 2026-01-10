// models/Application.js
import mongoose from 'mongoose';

const ApplicationSchema = new mongoose.Schema({
  // Application Type
  applicationType: {
    type: String,
    enum: ['organisation', 'individual'],
    required: true,
  },
  
  // Basic Info
  organisationName: {
    type: String,
    required: true,
  },
  contactPerson: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  icNumber: {
    type: String,
    required: true,
  },
  registrationNumber: String,
  
  // Contact Details
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
  },
  alternatePhone: String,
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  postcode: {
    type: String,
    required: true,
  },
  
  // Need Details
  assistanceType: {
    type: String,
    required: true,
  },
  amountNeeded: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  reasonForHelp: {
    type: String,
    required: true,
  },
  
  // Bank Details
  bankName: {
    type: String,
    required: true,
  },
  accountNumber: {
    type: String,
    required: true,
  },
  accountName: {
    type: String,
    required: true,
  },
  
  // Documents (store file paths/URLs)
  documents: [{
    filename: String,
    originalName: String,
    size: String,
    uploadDate: {
      type: Date,
      default: Date.now,
    },
  }],
  
  // Verification Status
  verificationStatus: {
    type: String,
    enum: ['pending', 'under_review', 'approved', 'rejected'],
    default: 'pending',
  },
  
  verificationNotes: String,
  verifiedBy: String,
  verifiedDate: Date,
  
  // Consent
  consentVerification: {
    type: Boolean,
    required: true,
  },
  consentPublish: {
    type: Boolean,
    required: true,
  },
  
  // Metadata
  submittedDate: {
    type: Date,
    default: Date.now,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  ipAddress: String,
  
  // For published listings
  isPublished: {
    type: Boolean,
    default: false,
  },
  publishedDate: Date,
  
  // Case tracking
  viewCount: {
    type: Number,
    default: 0,
  },
  contactCount: {
    type: Number,
    default: 0,
  },
});

  // Documents (store file info)
  documents: [{
	filename: String,
	originalName: String,
	size: Number,
	path: String,
	uploadDate: {
		type: Date,
		default: Date.now,
	},
}],

// Create indexes for faster queries
ApplicationSchema.index({ email: 1 });
ApplicationSchema.index({ verificationStatus: 1 });
ApplicationSchema.index({ submittedDate: -1 });
ApplicationSchema.index({ category: 1 });

// Update lastUpdated on save
ApplicationSchema.pre('save', function() {
  this.lastUpdated = new Date();
});

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema);