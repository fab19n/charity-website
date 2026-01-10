// src/app/api/applications/list/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Application from '@/models/Application';

export const dynamic = 'force-dynamic';

export async function GET(request) {
  try {
    await connectDB();
    
    const applications = await Application.find()
      .sort({ submittedDate: -1 })
      .lean();
    
    return NextResponse.json({
      success: true,
      count: applications.length,
      applications,
    });
    
  } catch (error) {
    console.error('List applications error:', error);
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}