// src/app/api/admin/login/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Validate input
    if (!username || !password) {
      return NextResponse.json({
        success: false,
        message: 'Username and password are required',
      }, { status: 400 });
    }

    // Connect to database
    await connectDB();

    // Find admin by username or email
    const admin = await Admin.findOne({
      $or: [
        { username: username.toLowerCase() },
        { email: username.toLowerCase() }
      ]
    });

    // Check if admin exists
    if (!admin) {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials',
      }, { status: 401 });
    }

    // Check if account is active
    if (!admin.isActive) {
      return NextResponse.json({
        success: false,
        message: 'Account is deactivated. Contact your administrator.',
      }, { status: 401 });
    }

    // Validate password
    const isValidPassword = admin.validatePassword(password);
    if (!isValidPassword) {
      return NextResponse.json({
        success: false,
        message: 'Invalid credentials',
      }, { status: 401 });
    }

    // Update last login
    admin.lastLogin = new Date();
    await admin.save();

    // Generate token
    const token = admin.generateToken();

    // Set cookie
    const cookieStore = await cookies();
    cookieStore.set('adminAuth', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24, // 24 hours
      path: '/',
    });

    return NextResponse.json({
      success: true,
      token,
      message: 'Login successful',
      admin: {
        username: admin.username,
        fullName: admin.fullName,
        role: admin.role,
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({
      success: false,
      message: 'Login failed. Please try again.',
    }, { status: 500 });
  }
}
