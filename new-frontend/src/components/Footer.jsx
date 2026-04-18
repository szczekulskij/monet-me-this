export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--color-dark)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8 text-sm text-gray-400 sm:flex-row sm:justify-between sm:px-6">
        <p>© 2022–{new Date().getFullYear()} Jan Szczekulski</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/szczekulskij/monet-me-this"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-gold)]"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jan-szczekulski-272ab615a/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--color-gold)]"
          >
            LinkedIn
          </a>
          <a
            href="mailto:szczekulskij@gmail.com"
            className="transition-colors hover:text-[var(--color-gold)]"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
