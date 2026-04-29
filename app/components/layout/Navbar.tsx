'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import { Folder, House, LucideIcon, User, Contact } from 'lucide-react'

type NavLink = {
    href: string
    label: string
    icon?: LucideIcon
}

const navLinks: NavLink[] = [
    { href: '#home', label: 'Inicio', icon: House },
    { href: '#projects', label: 'Proyectos', icon: Folder },
    { href: '#about-me', label: 'Sobre mí', icon: User },
    { href: '#contact', label: 'Contacto', icon: Contact },
]

export function Navbar() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState<string>('home')

    const toggleMenu = () => setOpen(prev => !prev)

    const handleScrollToSection = (href: string, closeMenu?: () => void) => {
        return (e: React.MouseEvent) => {
            e.preventDefault()

            const id = href.replace('#', '')
            const el = document.getElementById(id)

            if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
                window.history.replaceState(null, '', `#${id}`)
            }

            if (closeMenu) closeMenu()
        }
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setOpen(false)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])


    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id)
                    }
                })
            },
            {
                rootMargin: '-40% 0px -50% 0px',
                threshold: 0
            }
        )

        sections.forEach((section) => observer.observe(section))

        return () => {
            sections.forEach((section) => observer.unobserve(section))
        }
    }, [])

    return (
        <>
            <nav className="border-b border-neutral-300 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                <div className="h-16 mx-auto max-w-7xl px-6 md:px-8 flex items-center justify-between">

                    {/* LOGO */}
                    <Link href="#home" className="flex items-center gap-2">
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
                    </Link>

                    {/* DESKTOP */}
                    <ul className="hidden md:flex items-center gap-2">
                        {navLinks.map(link => {
                            const isActive = active === link.href.replace('#', '')
                            const Icon = link.icon

                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={handleScrollToSection(link.href)}
                                    className={`inline-flex items-center px-5 py-2 rounded-full text-sm transition-all duration-200
                                            ${isActive
                                            ? 'text-blue-500 hover:bg-blue-500/25'
                                            : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800'}`}
                                >
                                    {Icon && <Icon size={18} className="mr-2" />}
                                    {link.label}
                                </Link>
                            )
                        })}
                    </ul>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden p-2 rounded-full border border-transparent hover:border-neutral-300 dark:hover:border-neutral-700 
                        hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 cursor-pointer"
                    >
                        <FaBars size={18} className="text-neutral-700 dark:text-neutral-300" />
                    </button>
                </div>
            </nav>

            {/* OVERLAY */}
            <div
                onClick={() => setOpen(false)}
                className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300
                    ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
            />

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md z-50 border-r border-neutral-200 dark:border-neutral-800
                    transform transition-transform duration-300 ease-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <div className="p-6 border-b border-neutral-200 dark:border-neutral-800">
                    <h2 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Menú
                    </h2>
                </div>

                <ul className="flex flex-col gap-2 p-2">
                    {navLinks.map(link => {
                        const isActive = active === link.href.replace('#', '')
                        const Icon = link.icon

                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={handleScrollToSection(link.href, () => setOpen(false))}
                                className={`inline-flex w-full items-center px-5 py-3 rounded-full text-sm transition-all duration-200
                                        ${isActive
                                        ? 'text-blue-500'
                                        : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800'}`}
                            >
                                {Icon && <Icon size={18} className="mr-2" />}
                                {link.label}
                            </Link>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}