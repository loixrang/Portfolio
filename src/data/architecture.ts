import { Database, Monitor, Server } from 'lucide-react'

export const layers = [
  {
    name: 'Frontend',
    icon: Monitor,
    label: 'Interfaces that feel right.',
    tools: 'React · TypeScript · CSS',
    file: 'interface.tsx',
    lines: [
      'const experience = {',
      '  thoughtful: true,',
      '  accessible: true,',
      '  builtFor: "people"',
      '};',
    ],
  },
  {
    name: 'Backend',
    icon: Server,
    label: 'Good systems, under the hood.',
    tools: 'Node.js · NestJS · Spring Boot',
    file: 'service.ts',
    lines: [
      '@Injectable()',
      'export class IdeasService {',
      '  build(idea: Idea) {',
      '    return this.makeItReal(idea);',
      '  }',
      '}',
    ],
  },
  {
    name: 'Database',
    icon: Database,
    label: 'A solid foundation for every idea.',
    tools: 'PostgreSQL · MongoDB · Drizzle',
    file: 'schema.ts',
    lines: [
      'export const ideas = pgTable(',
      '  "ideas", {',
      '    id: serial().primaryKey(),',
      '    possibility: text().notNull()',
      '  }',
      ');',
    ],
  },
]
