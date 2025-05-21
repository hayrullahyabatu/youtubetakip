// app/api/auth/sign-out/route.ts
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const supabase = createRouteHandlerClient({ cookies });
  // Sign out the user
  await supabase.auth.signOut();
  return NextResponse.redirect(new URL('/', req.url), {
    status: 302,
  });
}
