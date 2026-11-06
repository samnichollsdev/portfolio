export const site = {
  name: 'Sam Nicholls',
  role: 'Senior Front-End Engineer',
  location: 'England, UK',
  email: 'contact@samnicholls.email',
  socials: {
    linkedin: 'https://www.linkedin.com/in/sam-nicholls-576253133/',
    github: 'https://github.com/samnichollsdev',
  },
  skills: ['React', 'TypeScript', 'Tailwind CSS', 'Accessibility', 'Design Systems'],
} as const

export type Project = {
  title: string
  description: string
  highlights: readonly string[]
  tags: readonly string[]
  live?: { url: string; label: string }
  sourceUrl: string
}

export const projects: readonly Project[] = [
  {
    title: 'Components',
    description:
      'A library of accessible React components built from scratch. Each one follows the WAI-ARIA Authoring Practices and is tested to WCAG 2.2 AA, with every story doubling as a browser test that drives it by keyboard and runs axe.',
    highlights: ['Accordion', 'Button', 'Combobox', 'Dialog', 'Switch', 'Tabs', 'Toast', 'Tooltip'],
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'Vitest'],
    live: { url: 'https://components.samnicholls.dev/?path=/docs/introduction--docs', label: 'View docs' },
    sourceUrl: 'https://github.com/samnichollsdev/components',
  },
  {
    title: 'Photo Frame Dashboard',
    description:
      'A family dashboard running on a rooted 10.1" Frameo photo frame, built on Wes Bos\'s photo-frame-dashboard project. A Vite page served by a Cloudflare Worker shows our calendar, weather, bin days, birthdays, football and Spotify, and a night mode switches the backlight off.',
    highlights: ['Calendar', 'Weather', 'Bin days', 'Birthdays', 'Football', 'Spotify', 'Night mode'],
    tags: ['JavaScript', 'Vite', 'Cloudflare Workers', 'Android'],
    sourceUrl: 'https://github.com/samnichollsdev/photo-frame-dashboard',
  },
]
