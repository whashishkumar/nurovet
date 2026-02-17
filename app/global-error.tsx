'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body>
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
            textAlign: 'center',
            fontFamily: 'system-ui, sans-serif',
          }}
        >
          <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>
            Something went wrong
          </h1>
          <p style={{ color: '#4b5563', marginBottom: '1.5rem', maxWidth: '28rem' }}>
            The site encountered an error. Please try again or go back to the home page.
          </p>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button
              onClick={reset}
              style={{
                padding: '0.625rem 1.25rem',
                background: '#00603A',
                color: 'white',
                border: 'none',
                borderRadius: '0.5rem',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Try again
            </button>
            <a
              href="/"
              style={{
                padding: '0.625rem 1.25rem',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                fontWeight: 500,
                textDecoration: 'none',
                color: '#111',
              }}
            >
              Go home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}
