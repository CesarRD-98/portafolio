// useHashNavigation.ts
'use client'

import { useCallback } from 'react'

export function useHashNavigation(setActive: (id: string) => void) {

    const scrollTo = useCallback((id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        window.history.replaceState(null, '', `#${id}`)
        setActive(id)
    }, [setActive])

    const handleClick = useCallback(
        (id: string, onDone?: () => void) =>
            (e: React.MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault()
                scrollTo(id)
                onDone?.()
            },
        [scrollTo]
    )

    return { scrollTo, handleClick }
}