// src/app/api/attorneys/route.ts
import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Attorney from '@/models/Attorney';

export async function GET() {
  try {
    await connectDB();
    // Fetch only active attorneys, just like your Django filter
    const attorneys = await Attorney.find({ isActive: true });
    return NextResponse.json(attorneys);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch attorneys' }, { status: 500 });
  }
}