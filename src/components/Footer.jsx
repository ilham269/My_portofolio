export default function Footer() {
  return (
    <footer className="bg-ink py-10 px-6 text-center">
      <p className="font-serif text-ink-hint text-sm tracking-[0.2em]">
        © {new Date().getFullYear()} — Crafted with care by{' '}
        <span className="text-gold">Muhamad ilham</span>
      </p>
    </footer>
  )
}