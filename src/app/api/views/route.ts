import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), '.data');
const DATA_FILE = path.join(DATA_DIR, 'view-counts.json');

async function readCounts(): Promise<Record<string, number>> {
  try {
    const raw = await readFile(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeCounts(counts: Record<string, number>): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(DATA_FILE, JSON.stringify(counts), 'utf-8');
}

export async function GET(req: NextRequest) {
  const slug = req.nextUrl.searchParams.get('slug');
  const counts = await readCounts();

  if (slug) {
    return NextResponse.json({ count: counts[slug] ?? 0 });
  }
  return NextResponse.json(counts);
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const slug = body?.slug;

  if (typeof slug !== 'string' || slug.trim().length === 0) {
    return NextResponse.json({ error: 'slug gerekli' }, { status: 400 });
  }

  const counts = await readCounts();
  counts[slug] = (counts[slug] ?? 0) + 1;
  await writeCounts(counts);

  return NextResponse.json({ count: counts[slug] });
}
