import Link from 'next/link'
import { ElementType } from 'react'
import { SiGithub, SiMailboxdotorg } from 'react-icons/si'
import { FaLinkedin, FaPhone } from 'react-icons/fa6'
import { Contact } from '@/app/modules/user_public/user.model'

const iconMap = {
    email: SiMailboxdotorg,
    phone: FaPhone,
    github: SiGithub,
    linkedin: FaLinkedin
}

type Props = {
    contacts: Contact[]
}

export function ContactCard({ contacts }: Props) {
    if (!contacts.length) {
        return <p className="text-neutral-500 dark:text-neutral-400">No hay información de contacto disponible</p>
    }

    return (
        <>
            {contacts.map(contact => {
                const hasLink = !!contact.linkUrl
                const Icon = iconMap[contact.type as keyof typeof iconMap]

                const CardWrapper: ElementType = hasLink ? Link : 'div'

                return (
                    <CardWrapper
                        key={contact.id}
                        {...(hasLink && {
                            href: contact.linkUrl!,
                            target: '_blank',
                            rel: 'noopener noreferrer',
                        })}
                        className="group flex flex-col items-center text-center gap-3 p-6 rounded-xl border border-neutral-200 dark:border-neutral-800
                                bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md transition-all duration-200 ease-out
                                hover:-translate-y-[2px] hover:shadow-md"
                    >
                        {/* ICON */}
                        <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-neutral-100 dark:bg-neutral-800
                                text-neutral-700 dark:text-neutral-300 group-hover:text-blue-600 transition-colors"
                        >
                            {Icon && <Icon size={20} />}
                        </div>

                        {/* TITLE */}
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">
                            {contact.title}
                        </h4>

                        {/* VALUE */}
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 break-all">
                            {contact.value}
                        </p>
                    </CardWrapper>
                )
            })}
        </>
    )
}