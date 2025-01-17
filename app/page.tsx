import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-primary">AI SaaS</span>
        </h1>
        <p className="mt-3 text-2xl">
          Get started by exploring our AI-powered features
        </p>
        <div className="mt-6">
          <Link href="/dashboard" passHref>
            <Button>Go to Dashboard</Button>
          </Link>
        </div>
      </main>
    </div>
  );
}