// config.ts
import { Contact, Folder, House, User } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type NavLink = {
    id: string
    label: string
    icon?: LucideIcon
}

export const navLinks: NavLink[] = [
    { id: 'home', label: 'Inicio', icon: House },
    { id: 'projects', label: 'Proyectos', icon: Folder },
    { id: 'about-me', label: 'Sobre mí', icon: User },
    { id: 'contact', label: 'Contacto', icon: Contact },
]