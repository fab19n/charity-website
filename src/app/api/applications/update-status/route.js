// src/app/api/applications/update-status/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Application from '@/models/Application';

export async function POST(request) {
  try {
    await connectDB();
    
    const { applicationId, status, notes } = await request.json();
    
    // Validate status
    const validStatuses = ['pending', 'under_review', 'approved', 'rejected'];
    if (!validStatuses.includes(status)) {
      return NextResponse.json({
        success: false,
        message: 'Invalid status',
      }, { status: 400 });
    }
    
    // Find and update application
    const application = await Application.findById(applicationId);
    
    if (!application) {
      return NextResponse.json({
        success: false,
        message: 'Application not found',
      }, { status: 404 });
    }
    
    // Update fields
    application.verificationStatus = status;
    if (notes) {
      application.verificationNotes = notes;
    }
    
    // If approved, set publish date
    if (status === 'approved') {
      application.isPublished = true;
      application.publishedDate = new Date();
    } else {
      application.isPublished = false;
    }
    
    application.verifiedDate = new Date();
    
    await application.save();
    
    return NextResponse.json({
      success: true,
      message: 'Application status updated',
      application: {
        id: application._id,
        status: application.verificationStatus,
        isPublished: application.isPublished,
      },
    });
    
  } catch (error) {
    console.error('Update status error:', error);
    return NextResponse.json({
      success: false,
      message: 'Failed to update status',
      error: error.message,
    }, { status: 500 });
  }
}