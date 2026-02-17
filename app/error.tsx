'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        We couldn’t load this page. This can happen when the site is starting up or the connection
        to the server is temporarily unavailable.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-5 py-2.5 bg-[#00603A] text-white rounded-lg font-medium hover:opacity-90"
        >
          Try again
        </button>
        <Link
          href="/"
          className="px-5 py-2.5 border border-gray-300 rounded-lg font-medium hover:bg-gray-50"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
