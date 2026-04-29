'use client'

import Link from 'next/link'
import { SiGithub, SiMailboxdotorg } from 'react-icons/si'
import { FaLinkedin, FaPhone } from 'react-icons/fa6'
import { User } from '@/app/modules/user_public/user.model'

const iconMap = {
    email: SiMailboxdotorg,
    phone: FaPhone,
    github: SiGithub,
    linkedin: FaLinkedin
}

type Props = {
    user: User
}

export function Footer({ user }: Props) {
    const { contacts } = user

    const contactInfo = contacts.filter(c => c.type === 'email' || c.type === 'phone')
    const socialInfo = contacts.filter(c => c.type === 'github' || c.type === 'linkedin')

    return (
        <footer className="w-full border-t border-neutral-200/60 dark:border-neutral-800/60 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md">

            <div className="max-w-7xl mx-auto px-6 md:px-8 py-16 grid gap-12 md:grid-cols-3">

                {/* BRAND */}
                <div className="flex flex-col gap-3">
                    <h3 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                        CésarDev
                    </h3>

                    <p className="text-sm italic text-neutral-500 dark:text-neutral-400 max-w-xs">
                        &quot;Construyendo aplicaciones web modernas con tecnologías de vanguardia.&quot;
                    </p>

                    <div className="flex flex-col gap-1 text-sm text-neutral-500 dark:text-neutral-400">
                        <span>Tegucigalpa, Honduras</span>
                    </div>
                </div>

                {/* CONTACTO */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Contacto
                    </h4>

                    <ul className="flex flex-col gap-3 text-sm">
                        {contactInfo.map(contact => {
                            const Icon = iconMap[contact.type as keyof typeof iconMap]

                            const href =
                                contact.type === 'email'
                                    ? `mailto:${contact.value}`
                                    : contact.type === 'phone'
                                        ? `tel:${contact.value.replace(/\s+/g, '')}`
                                        : undefined

                            return (
                                <li key={contact.id} className="flex items-start gap-3">
                                    <div className="flex gap-3">
                                        <span className="text-neutral-500 dark:text-neutral-400">
                                            {Icon && <Icon size={16} />}
                                        </span>

                                        {href ? (
                                            <Link
                                                href={href}
                                                className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                            >
                                                {contact.value}
                                            </Link>
                                        ) : (
                                            <span className="text-neutral-500 dark:text-neutral-400">
                                                {contact.value}
                                            </span>
                                        )}
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

                {/* REDES */}
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Redes
                    </h4>

                    <ul className="flex flex-col gap-3 text-sm">
                        {socialInfo.map(contact => {
                            const Icon = iconMap[contact.type as keyof typeof iconMap]

                            return (
                                <li key={contact.id} className="flex items-start gap-3">
                                    <div className="flex gap-3">
                                        <span className="text-neutral-500 dark:text-neutral-400">
                                            {Icon && <Icon size={16} />}
                                        </span>

                                        <Link
                                            href={contact.linkUrl || '#'}
                                            target="_blank"
                                            className="text-neutral-500 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
                                        >
                                            {contact.value}
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>

            </div>

            {/* BOTTOM */}
            <div className="border-t border-neutral-200 dark:border-neutral-800 py-5 flex justify-center">
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    &copy; {user.author} {user.year} {" "} &bull; Desarrollador &bull; Portafolio
                </p>
            </div>

        </footer>
    )
}