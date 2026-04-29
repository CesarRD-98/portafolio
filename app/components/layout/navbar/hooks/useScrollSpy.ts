// useScrollSpy.ts
'use client'

import { useEffect, useState } from 'react'

export function useScrollSpy(ids: string[]) {
    const [active, setActive] = useState<string | null>(null)

    useEffect(() => {
        if (!ids.length) return

        const elements = ids
            .map(id => document.getElementById(id))
            .filter((el): el is HTMLElement => Boolean(el))

        if (!elements.length) return

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries.filter(e => e.isIntersecting)
                if (!visible.length) return

                const mostVisible = visible.reduce((prev, curr) =>
                    curr.intersectionRatio > prev.intersectionRatio ? curr : prev
                )

                setActive(mostVisible.target.id)
            },
            {
                rootMargin: '-35% 0px -55% 0px',
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        )

        elements.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [ids])

    return active
}