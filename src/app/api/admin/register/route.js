// src/app/api/admin/register/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

// Secret registration key - change this in production!
// This adds an extra layer of security so random people can't register
const REGISTRATION_KEY = process.env.ADMIN_REGISTRATION_KEY || 'CMC-INTERNAL-2024';

export async function POST(request) {
  try {
    const { 
      username, 
      email, 
      password, 
      confirmPassword, 
      fullName, 
      registrationKey 
    } = await request.json();

    // Validate registration key
    if (registrationKey !== REGISTRATION_KEY) {
      return NextResponse.json({
        success: false,
        message: 'Invalid registration key. Contact your administrator.',
      }, { status: 403 });
    }

    // Validate required fields
    if (!username || !email || !password || !fullName) {
      return NextResponse.json({
        success: false,
        message: 'All fields are required',
      }, { status: 400 });
    }

    // Validate password match
    if (password !== confirmPassword) {
      return NextResponse.json({
        success: false,
        message: 'Passwords do not match',
      }, { status: 400 });
    }

    // Validate password strength
    if (password.length < 8) {
      return NextResponse.json({
        success: false,
        message: 'Password must be at least 8 characters long',
      }, { status: 400 });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid email format',
      }, { status: 400 });
    }

    // Validate username format
    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(username)) {
      return NextResponse.json({
        success: false,
        message: 'Username can only contain letters, numbers, and underscores',
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Check if username already exists
    const existingUsername = await Admin.findOne({ username: username.toLowerCase() });
    if (existingUsername) {
      return NextResponse.json({
        success: false,
        message: 'Username already exists',
      }, { status: 400 });
    }

    // Check if email already exists
    const existingEmail = await Admin.findOne({ email: email.toLowerCase() });
    if (existingEmail) {
      return NextResponse.json({
        success: false,
        message: 'Email already registered',
      }, { status: 400 });
    }

    // Create new admin
    const newAdmin = new Admin({
      username: username.toLowerCase(),
      email: email.toLowerCase(),
      fullName,
      role: 'verifier', // Default role
    });

    // Hash and set password
    newAdmin.setPassword(password);

    // Save to database
    await newAdmin.save();

    return NextResponse.json({
      success: true,
      message: 'Admin account created successfully! You can now login.',
    });

  } catch (error) {
    console.error('Registration error:', error);
    
    // Handle duplicate key error
    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        message: 'Username or email already exists',
      }, { status: 400 });
    }

    return NextResponse.json({
      success: false,
      message: 'Registration failed. Please try again.',
    }, { status: 500 });
  }
}
