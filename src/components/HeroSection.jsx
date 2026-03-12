import { HERO_STATS } from '../data'
import profile from "../assets/profile.jpg";

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center bg-cream-50 overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute top-0 right-0 w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] rounded-full bg-cream-200 opacity-50 translate-x-1/3 -translate-y-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 border border-cream-300 rounded-full -translate-x-1/2 translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-24 left-16 w-32 h-32 border border-cream-400 rounded-full pointer-events-none" />

      {/* Gold vertical line */}
      <div className="absolute left-8 top-1/4 h-48 w-px bg-gradient-to-b from-transparent via-gold to-transparent hidden lg:block" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-12 py-32 grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div className="order-2 md:order-1">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-6 animate-fade-in-up">
            — Frontend Developer
          </p>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-ink leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Crafting
            <br />
            <em className="font-semibold not-italic">Beautiful</em>
            <br />
            Interfaces
          </h1>

          <p className="text-ink-muted text-base leading-relaxed max-w-md mb-10 animate-fade-in-up animation-delay-200">
            I'm a passionate Frontend Developer focused on building elegant,
            performant, and accessible web experiences. I turn ideas into
            pixel-perfect, interactive realities.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-300">
            <a
              href="#contact"
              className="bg-ink text-cream-50 text-sm tracking-[0.15em] uppercase px-8 py-4 hover:bg-gold transition-colors duration-300"
            >
              Get In Touch
            </a>
            <a
              href="#skills"
              className="border border-ink text-ink text-sm tracking-[0.15em] uppercase px-8 py-4 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              View Skills
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-10 mt-14 pt-10 border-t border-cream-300 animate-fade-in-up animation-delay-400">
            {HERO_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-3xl font-semibold text-ink">{stat.value}</p>
                <p className="text-xs text-ink-hint tracking-wider uppercase mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo */}
        <div className="order-1 md:order-2 flex justify-center md:justify-end animate-fade-in-up animation-delay-300">
          <div className="relative">
            <div className="w-72 h-80 md:w-80 md:h-96 bg-cream-200 overflow-hidden">
              {/* Profile photo */
               <img src={profile} alt="Your Name" className="w-full h-full object-cover" />
               
               }
              <div className="w-full h-full flex flex-col items-center justify-center text-ink-hint gap-3">
                <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <p className="text-xs tracking-widest uppercase">Your Photo</p>
              </div>
            </div>
            {/* Gold frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold pointer-events-none" />
            {/* Corner dot */}
            <div className="absolute -top-3 -left-3 w-6 h-6 bg-gold opacity-70" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-hint animate-bounce">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-8 bg-gold" />
      </div>
    </section>
  )
}