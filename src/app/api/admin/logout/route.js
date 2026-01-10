// src/app/api/admin/logout/route.js
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request) {
  const cookieStore = await cookies();
  cookieStore.delete('adminAuth');
  
  return NextResponse.json({
    success: true,
    message: 'Logged out',
  });
}