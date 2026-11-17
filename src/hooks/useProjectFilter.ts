import { useEffect, useState } from 'react'
import { categories, type ProjectFilter } from '../data/projectCategories'

function readFilter(): ProjectFilter {
  const value = new URLSearchParams(window.location.search).get('category')
  return categories.find((category) => category === value) ?? 'All projects'
}
export function useProjectFilter() {
  const [filter, setFilter] = useState<ProjectFilter>(readFilter)
  useEffect(() => {
    const sync = () => setFilter(readFilter())
    window.addEventListener('popstate', sync)
    return () => window.removeEventListener('popstate', sync)
  }, [])
  function changeFilter(next: ProjectFilter) {
    if (next === filter) return
    setFilter(next)
    const url = new URL(window.location.href)
    if (next === 'All projects') url.searchParams.delete('category')
    else url.searchParams.set('category', next)
    window.history.pushState({}, '', url)
  }
  return { filter, changeFilter }
}
