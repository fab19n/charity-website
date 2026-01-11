// src/app/api/admin/check/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import connectDB from '@/lib/mongodb';
import Admin from '@/models/Admin';

export async function GET(request) {
  try {
    const cookieStore = await cookies();
    const adminAuth = cookieStore.get('adminAuth');
    
    if (!adminAuth || !adminAuth.value) {
      return NextResponse.json({
        success: false,
        authenticated: false,
      }, { status: 401 });
    }

    // Decode and validate token
    try {
      const tokenData = JSON.parse(Buffer.from(adminAuth.value, 'base64').toString());
      
      // Check token age (24 hours)
      const tokenAge = Date.now() - tokenData.timestamp;
      const maxAge = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
      
      if (tokenAge > maxAge) {
        return NextResponse.json({
          success: false,
          authenticated: false,
          message: 'Session expired',
        }, { status: 401 });
      }

      // Verify admin still exists and is active
      await connectDB();
      const admin = await Admin.findById(tokenData.id);
      
      if (!admin || !admin.isActive) {
        return NextResponse.json({
          success: false,
          authenticated: false,
          message: 'Account not found or deactivated',
        }, { status: 401 });
      }

      return NextResponse.json({
        success: true,
        authenticated: true,
        admin: {
          username: admin.username,
          fullName: admin.fullName,
          role: admin.role,
        }
      });

    } catch (decodeError) {
      console.error('Token decode error:', decodeError);
      return NextResponse.json({
        success: false,
        authenticated: false,
        message: 'Invalid token',
      }, { status: 401 });
    }

  } catch (error) {
    console.error('Auth check error:', error);
    return NextResponse.json({
      success: false,
      authenticated: false,
    }, { status: 500 });
  }
}
