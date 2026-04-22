export interface Contact {
    id: number
    userId: number
    title: string
    type: string
    value: string
    linkUrl?: string
    isPrimary: boolean
}

export interface Project {
    id: number
    userId: number
    title: string
    description: string
    imgUrl: string
    stack: string[]
    role: string
    link: string
}

export interface Skill {
    id: number
    userId: number
    title: string
    logoUrl: string
    category: string
    isPrimary: boolean
}

export interface User {
    author: string
    tagLine: string
    profession: string
    shortBio: string
    cvUrl: string
    focus: string
    year: number
    contacts: Contact[]
    projects: Project[]
    skills: Skill[]
}