// src/app/api/admin/login/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// IMPORTANT: Change this password in production!
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

export async function POST(request) {
  try {
    const { password } = await request.json();
    
    if (password === ADMIN_PASSWORD) {
      // Generate simple token (timestamp-based)
      const token = Buffer.from(`admin:${Date.now()}`).toString('base64');
      
      // Set cookie (expires in 24 hours) - MUST AWAIT
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
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Invalid password',
      }, { status: 401 });
    }
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({
      success: false,
      message: 'Login failed',
    }, { status: 500 });
  }
}