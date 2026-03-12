import { useState } from 'react'
import { SKILLS, TOOLS } from '../data'
import { useInView } from '../hooks/useInView'
import SkillBar from './SkillBar'

const CATEGORIES = ['All', ...new Set(SKILLS.map((s) => s.category))]

export default function SkillsSection() {
  const { ref, inView } = useInView()
  const [active, setActive] = useState('All')

  const filtered = active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active)

  const fade = (delay = 0) =>
    `transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`

  return (
    <section id="skills" className="bg-cream-100 py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div ref={ref} className="mb-16">
          <p className={`${fade()} text-gold text-sm tracking-[0.3em] uppercase mb-4`}
            style={{ transitionDelay: '0ms' }}>
            — What I Work With
          </p>
          <h2 className={`${fade()} font-serif text-4xl md:text-5xl font-light text-ink`}
            style={{ transitionDelay: '100ms' }}>
            Skills &amp; <em className="font-semibold not-italic">Expertise</em>
          </h2>
        </div>

        {/* Filter buttons */}
        <div className={`${fade()} flex flex-wrap gap-3 mb-12`} style={{ transitionDelay: '200ms' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-xs tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                active === cat
                  ? 'bg-ink text-cream-50 border-ink'
                  : 'text-ink-muted border-cream-400 hover:border-gold hover:text-gold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill bars */}
        <div className={`${fade()} grid sm:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8`}
          style={{ transitionDelay: '300ms' }}>
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} visible={inView} />
          ))}
        </div>

        {/* Tools */}
        <div className={`${fade()} mt-20 pt-12 border-t border-cream-400`}
          style={{ transitionDelay: '400ms' }}>
          <p className="text-xs tracking-[0.3em] uppercase text-ink-hint mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-3">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 text-xs tracking-wide text-ink-muted bg-cream-50 border border-cream-300 hover:border-gold hover:text-gold transition-colors duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}