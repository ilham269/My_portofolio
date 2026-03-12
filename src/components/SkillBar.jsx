export default function SkillBar({ skill, visible }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-ink tracking-wide">
          {skill.name}
        </span>
        <span className="text-xs text-gold font-semibold">
          {skill.level}%
        </span>
      </div>

      {/* Track */}
      <div className="h-px bg-cream-300 relative overflow-hidden">
        <div
          className="absolute top-0 left-0 h-full bg-gold transition-all duration-1000 ease-out"
          style={{ width: visible ? `${skill.level}%` : '0%' }}
        />
      </div>

      <p className="text-xs text-ink-hint mt-1 tracking-wider">{skill.category}</p>
    </div>
  )
}