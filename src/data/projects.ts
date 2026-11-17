
import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    id: 'craftlink',
    name: 'Craftlink',
    category: 'Web',
    tagline: 'Connecting skilled hands with opportunities.',
    description:
      'A platform that connects customers with skilled artisans, making it easier to discover service providers, explore their work, and find the right people for different jobs.',
    stack: [
      'React',
      'TypeScript',
      'Vite',
      'Tailwind CSS',
      'TanStack Query',
      'Node.js',
      'Express',
      'Prisma',
      'PostgreSQL',
      'Cloudinary',
    ],
    color: 'lavender',
    url: 'https://craftlink.loixrang.com',
    features: [
      'Artisan discovery and service listings',
      'User authentication and profile management',
      'Image uploads and media management with Cloudinary',
      'Typed API integration and efficient server-state management',
    ],
  },
  {
    id: 'everybuy',
    name: 'Everybuy',
    category: 'Web',
    tagline: 'Simplifying everyday retail operations.',
    description:
      'A retail management system designed to digitize shop operations, bringing product management, inventory tracking, stocktaking, sales processing, and business reporting into one platform.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'NestJS',
      'Bun',
      'PostgreSQL',
      'Drizzle ORM',
      'Better Auth',
    ],
    color: 'green',
    url: 'https://everybuy.loixrang.com',
    features: [
      'Product and inventory management with stock movement tracking',
      'Dedicated stocktaking and inventory reconciliation',
      'Sales processing with flexible pricing and payment options',
      'Business reports and daily sales summaries',
      'Role-based access control for owners and staff',
      'Secure authentication with two-factor authentication support',
    ],
  },
  {
    id: 'loixrang-bank',
    name: 'Loixrang Bank',
    category: 'Web',
    tagline: 'Banking, with a modern digital experience.',
    description:
      'A frontend banking application concept focused on delivering a clean, intuitive, and responsive digital banking experience through thoughtfully designed interfaces and interactive user experiences.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
    ],
    color: 'peach',
    url: 'https://bank.loixrang.com',
    features: [
      'Modern banking dashboard and account overview',
      'Transaction history and activity views',
      'Responsive layouts for desktop and mobile',
      'Reusable UI components and consistent design patterns',
    ],
  },
]
