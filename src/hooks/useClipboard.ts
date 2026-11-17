import { useEffect, useRef, useState } from 'react'

export function useClipboard() {
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  useEffect(() => () => clearTimeout(timeout.current), [])
  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setCopyError(false)
      clearTimeout(timeout.current)
      timeout.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
      setCopyError(true)
    }
  }
  return { copied, copyError, copy }
}
