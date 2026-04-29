'use client'

import Image from 'next/image'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { navLinks } from './config'
import { useScrollSpy } from './hooks/useScrollSpy'
import { useHashNavigation } from './hooks/useHashNavigation'

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [manualActive, setManualActive] = useState<string>('')

    const sectionIds = useMemo(() => navLinks.map(n => n.id), [])
    const active = useScrollSpy(sectionIds)
    const currentActive = manualActive || active
    const closeMenu = useCallback(() => setOpen(false), [])

    const { handleClick } = useHashNavigation((id) => {
        setManualActive(id)
    })

    useEffect(() => {
        if (!active) return

        const timeout = window.setTimeout(() => {
            setManualActive('')
        }, 0)

        return () => window.clearTimeout(timeout)
    }, [active])

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }

        window.addEventListener('resize', onResize)
        return () => window.removeEventListener('resize', onResize)
    }, [])

    return (
        <>
            <nav className="border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="h-16 mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">

                    {/* LOGO */}
                    <a href="#home" onClick={handleClick('home')} className="flex items-center gap-2">
                        <div className="relative w-12 h-12">
                            <Image
                                src="https://rekydsbimkpqukrlqkbi.supabase.co/storage/v1/object/public/assets/logos/logo-nav.png"
                                alt="Logo Developer"
                                fill
                                sizes="40px"
                                className="object-contain"
                                priority
                            />
                        </div>

                        <span className="font-semibold text-md md:text-lg tracking-tight text-neutral-900 dark:text-white">
                            CesarDev
                        </span>
                    </a>

                    {/* DESKTOP */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map(({ id, label, icon: Icon }) => {
                            const isActive = currentActive === id

                            return (
                                <a
                                    key={id}
                                    href={`#${id}`}
                                    onClick={handleClick(id)}
                                    className={`inline-flex items-center px-5 py-2 rounded-full text-sm transition-all duration-200 
                                        ${isActive
                                            ? 'text-blue-500 hover:bg-blue-500/25'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                                >
                                    {Icon && <Icon size={18} className="mr-2" />}
                                    {label}
                                </a>
                            )
                        })}
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800"
                    >
                        <FaBars size={18} />
                    </button>
                </div>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition 
                    ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            />

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white/95 dark:bg-neutral-900/95 z-50 border-r 
                    border-neutral-200 dark:border-neutral-800 transform transition 
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6 border-b border-neutral-300 dark:border-neutral-800">
                    <h2 className="text-sm font-semibold">Menú</h2>
                </div>

                <ul className="flex flex-col gap-2 p-2">
                    {navLinks.map(({ id, label, icon: Icon }) => {
                        const isActive = currentActive === id

                        return (
                            <a
                                key={id}
                                href={`#${id}`}
                                onClick={handleClick(id, closeMenu)}
                                className={`inline-flex items-center px-5 py-3 rounded-full text-sm transition 
                                    ${isActive
                                        ? 'text-blue-500'
                                        : 'hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                            >
                                {Icon && <Icon size={18} className="mr-2" />}
                                {label}
                            </a>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}