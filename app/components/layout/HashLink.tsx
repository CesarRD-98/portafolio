'use client'

import { MouseEvent, ReactNode } from 'react'

type Props = {
    href: string
    children: ReactNode
    className?: string
}

export function HashLink({ href, children, className }: Props) {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (!el) return

        e.preventDefault()

        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })

        window.history.replaceState(null, '', href)
    }

    return (
        <a href={href} onClick={handleClick} className={className}>
            {children}
        </a>
    )
}