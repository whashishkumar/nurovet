import { NextResponse } from 'next/server';

/** GET /api/health - no API calls, use to verify Next.js is running */
export async function GET() {
  return NextResponse.json({
    ok: true,
    app: 'nurovet-frontend',
    env: process.env.NODE_ENV,
    apiUrl: process.env.NEXT_PUBLIC_API_URL || '(not set)',
  });
}
