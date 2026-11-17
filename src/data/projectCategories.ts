export const categories = ['All projects', 'Web', 'Backend', 'Mobile'] as const
export type ProjectFilter = (typeof categories)[number]
