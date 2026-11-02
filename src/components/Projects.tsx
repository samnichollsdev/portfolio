import { SectionHeading } from './SectionHeading'

const ComingSoonCard = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border border-white/10 border-dashed p-8 text-center sm:p-12">
      <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 font-semibold text-accent text-xs uppercase tracking-wide">
        Coming soon
      </span>
      <h3 className="mt-5 font-display font-semibold text-white text-xl">Projects on the way</h3>
      <p className="mt-3 text-neutral-400 text-sm leading-relaxed">
        I'm working on some projects to showcase here. Check back soon.
      </p>
    </div>
  )
}

export const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading index="01 / Projects" title="Selected work" description="Things I've built will appear here." />

        <div className="mt-10">
          <ComingSoonCard />
        </div>
      </div>
    </section>
  )
}
