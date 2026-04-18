import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-6xl font-bold text-[var(--color-gold)]">404</h1>
      <p className="mt-4 text-lg text-gray-400">This page doesn't exist.</p>
      <Link
        to="/"
        className="mt-8 rounded-xl bg-[var(--color-gold)] px-6 py-3 font-semibold text-[var(--color-dark)] transition-transform hover:scale-105"
      >
        Back to Game
      </Link>
    </div>
  );
}
