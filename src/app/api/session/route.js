import { getIronSession } from 'iron-session';
import { NextResponse } from 'next/server';
import { sessionOptions } from '@/lib/session';


export async function GET(req) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);
  console.log('Session:', session);
  if (!session.user){
    return NextResponse.json({ user: null }, { status: 401 });
  }
  return NextResponse.json({ user: session.user });
}



export async function POST(req) {
  const { user,api_token	 } = await req.json();
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);
  session.user = user;
  session.api_token = api_token	;
  await session.save(); 
  return res;
}


export async function DELETE(req) {
  const res = NextResponse.next();
  const session = await getIronSession(req, res, sessionOptions);
  session.destroy();
  return res;
}
