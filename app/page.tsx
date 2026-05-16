import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <nav>
        <Link href="/">app-sdlc</Link>
      </nav>
      <h1>Welcome to the homepage</h1>
      <p>Issue-first delivery, powered by agents.</p>
      <footer>
        Built with agentic-sdlc
      </footer>
    </main>
  );
}
