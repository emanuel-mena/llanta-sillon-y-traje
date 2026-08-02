import { useEffect, useId, useRef, useState } from 'react'

type FlipbookOptions = {
  webgl?: boolean
  backgroundColor?: string
  sound?: boolean
  download?: boolean
}

type FlipbookProps = FlipbookOptions & {
  src: string
  height?: number | string
}

type DearFlipBook = {
  dispose?: () => void
}

declare global {
  interface Window {
    DFLIP?: { parseBooks?: () => void }
    dFlipLocation?: string
    [key: string]: unknown
  }
}

let dearFlipLoader: Promise<void> | undefined

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`)

    if (existing?.dataset.loaded === 'true') {
      resolve()
      return
    }

    const script = existing ?? document.createElement('script')
    script.src = src
    script.async = false
    script.addEventListener('load', () => {
      script.dataset.loaded = 'true'
      resolve()
    }, { once: true })
    script.addEventListener('error', () => reject(new Error(`No se pudo cargar ${src}`)), { once: true })

    if (!existing) document.body.append(script)
  })
}

function loadDearFlip(): Promise<void> {
  dearFlipLoader ??= (async () => {
    // DearFlip uses these paths to fetch PDF.js, its worker, images and sounds.
    window.dFlipLocation = '/dflip/'
    await loadScript('/dflip/js/libs/jquery.min.js')
    await loadScript('/dflip/js/dflip.min.js')
  })()

  return dearFlipLoader
}

export default function Flipbook({
  src,
  height = '75vh',
  webgl = true,
  backgroundColor = '#ffffff',
  sound = true,
  download = true,
}: FlipbookProps) {
  const reactId = useId()
  const id = `flipbook-${reactId.replace(/[^a-zA-Z0-9_-]/g, '')}`
  const containerRef = useRef<HTMLDivElement>(null)
  const [libraryReady, setLibraryReady] = useState(false)
  const [error, setError] = useState<string>()

  useEffect(() => {
    let cancelled = false

    loadDearFlip()
      .then(() => {
        if (!cancelled) setLibraryReady(true)
      })
      .catch(() => {
        if (!cancelled) setError('No se pudo cargar el visor del libro.')
      })

    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    if (!libraryReady || !containerRef.current) return

    window.DFLIP?.parseBooks?.()

    return () => {
      const book = window[id] as DearFlipBook | undefined
      book?.dispose?.()
      delete window[id]
    }
  }, [id, libraryReady])

  if (error) return <p role="alert">{error}</p>

  return (
    <div
      ref={(element) => {
        containerRef.current = element
        if (!element) return

        element.setAttribute('source', src)
        element.setAttribute('height', String(height))
        element.setAttribute('webgl', String(webgl))
        element.setAttribute('backgroundcolor', backgroundColor)
        element.setAttribute('sound', String(sound))
        element.setAttribute('download', String(download))
      }}
      id={id}
      className="_df_book"
      aria-label="Libro interactivo"
    />
  )
}
