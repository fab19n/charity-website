// src/app/api/applications/submit/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Application from '@/models/Application';

export async function POST(request) {
  try {
    // Connect to database
    await connectDB();
    
    // Get form data
    const data = await request.json();
    
    // Get IP address (optional)
    const ipAddress = request.headers.get('x-forwarded-for') || 
                      request.headers.get('x-real-ip') || 
                      'unknown';
    
    // Create new application
    const application = new Application({
      ...data,
      ipAddress,
      submittedDate: new Date(),
    });
    
    // Save to database
    await application.save();
    
    // Return success response
    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
      applicationId: application._id,
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error submitting application:', error);
    
    return NextResponse.json({
      success: false,
      message: 'Failed to submit application',
      error: error.message,
    }, { status: 500 });
  }
}

// Handle GET requests (optional - for testing)
export async function GET(request) {
  try {
    await connectDB();
    
    // Get recent applications (for testing)
    const applications = await Application.find()
      .sort({ submittedDate: -1 })
      .limit(10)
      .select('organisationName category verificationStatus submittedDate');
    
    return NextResponse.json({
      success: true,
      count: applications.length,
      applications,
    });
    
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    }, { status: 500 });
  }
}