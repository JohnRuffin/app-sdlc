import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <nav>
        <Link href="/">app-sdlc</Link>
      </nav>
      <section>
        <h2>Ship faster with spec-driven development</h2>
        <p>Write a GitHub issue. An agent implements it, verifies it, and merges it. Two commands.</p>
      </section>
      <h1>Welcome to the homepage</h1>
      <p>Issue-first delivery, powered by agents.</p>
      <footer>
        Built with agentic-sdlc
      </footer>
    </main>
  );
}
