import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { prompt } = await req.json();

  // TODO: Implement actual AI generation using Anthropic API
  const response = `AI response to: "${prompt}"`;

  return NextResponse.json({ response });
}