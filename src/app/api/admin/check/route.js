// src/app/api/admin/check/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request) {
  const cookieStore = await cookies();
  const adminAuth = cookieStore.get('adminAuth');
  
  if (adminAuth && adminAuth.value) {
    return NextResponse.json({
      success: true,
      authenticated: true,
    });
  }
  
  return NextResponse.json({
    success: false,
    authenticated: false,
  }, { status: 401 });
}