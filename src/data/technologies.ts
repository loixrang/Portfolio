import { Database, Monitor, Server, Smartphone } from 'lucide-react'
import {
  SiCss,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiJetpackcompose,
  SiKotlin,
  SiLinux,
  SiMongodb,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiRender,
  SiSpringboot,
  SiTypeorm,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa6'

export const techGroups = [
  {
    title: 'The frontend',
    description: 'Where the experience comes to life.',
    icon: Monitor,
    tech: [
      { name: 'HTML', Icon: SiHtml5 },
      { name: 'CSS', Icon: SiCss },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'ReactJS', Icon: SiReact },
    ],
  },
  {
    title: 'Behind the scenes',
    description: 'The logic that holds it all together.',
    icon: Server,
    tech: [
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'ExpressJS', Icon: SiExpress },
      { name: 'NestJS', Icon: SiNestjs },
      { name: 'Java', Icon: FaJava },
      { name: 'Spring Boot', Icon: SiSpringboot },
    ],
  },
  {
    title: 'Data & persistence',
    description: 'Structured, connected, dependable.',
    icon: Database,
    tech: [
      { name: 'PostgreSQL', Icon: SiPostgresql },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'Drizzle ORM', Icon: SiDrizzle },
      { name: 'TypeORM', Icon: SiTypeorm },
    ],
  },
  {
    title: 'Beyond the browser',
    description: 'Native experiences. Reliable delivery.',
    icon: Smartphone,
    tech: [
      { name: 'Kotlin', Icon: SiKotlin },
      { name: 'Jetpack Compose', Icon: SiJetpackcompose },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Git', Icon: SiGit },
      { name: 'GitHub', Icon: SiGithub },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Render', Icon: SiRender },
    ],
  },
]
