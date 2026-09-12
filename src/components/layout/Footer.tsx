export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-crimson/20 px-6 py-8 md:px-12">
      <div className="flex flex-col items-start justify-between gap-4 font-mono text-xs text-steel md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} — Built with Next.js</span>
        <div className="flex gap-6">
          <a href="mailto:rahulnanda9899@gmail.com" className="hover:text-crimson">
            EMAIL
          </a>
          <a href="https://github.com" className="hover:text-crimson">
            GITHUB
          </a>
          <a href="https://linkedin.com" className="hover:text-crimson">
            LINKEDIN
          </a>
        </div>
      </div>
    </footer>
  );
}
