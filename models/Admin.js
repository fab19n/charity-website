// models/Admin.js
import mongoose from 'mongoose';
import crypto from 'crypto';

const AdminSchema = new mongoose.Schema({
  // Admin credentials
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  
  // Admin info
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ['admin', 'super_admin', 'verifier'],
    default: 'verifier',
  },
  
  // Status
  isActive: {
    type: Boolean,
    default: true,
  },
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
  createdBy: {
    type: String,
  },
});

// Hash password before saving
AdminSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

// Verify password
AdminSchema.methods.validatePassword = function(password) {
  const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
  return this.password === hash;
};

// Generate auth token
AdminSchema.methods.generateToken = function() {
  const tokenData = {
    id: this._id,
    username: this.username,
    role: this.role,
    timestamp: Date.now(),
  };
  return Buffer.from(JSON.stringify(tokenData)).toString('base64');
};

export default mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
