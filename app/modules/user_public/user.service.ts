import camelcaseKeys from 'camelcase-keys'
import { getSupabase } from "@/app/lib/supabase/client"
import { Contact, Project, Skill, User } from "./user.model"

export async function getUserPublic(): Promise<User | null> {
    const supabase = getSupabase()

    const [user, projects, skills, contacts] = await Promise.all([
        supabase.from('profiles').select('*').maybeSingle(),
        supabase.from('projects').select('*').order('created_at', { ascending: false }),
        supabase.from('skills').select('*'),
        supabase.from('contacts').select('*')
    ])

    if (user.error) {
        throw new Error(user.error.message)
    }

    if (projects.error) {
        console.error('Error al cargar proyectos:', projects.error.message)
    }

    if (skills.error) {
        console.error('Error al cargar skills:', skills.error.message)
    }

    if (contacts.error) {
        console.error('Error al cargar contactos:', contacts.error.message)
    }

    const userCamel = (user.data
        ? camelcaseKeys(user.data, { deep: true })
        : {}) as Omit<User, 'contacts' | 'projects' | 'skills'>
    const projectsCamel = projects.error
        ? []
        : (camelcaseKeys(projects.data, { deep: true }) as Project[])
    const skillsCamel = skills.error
        ? []
        : (camelcaseKeys(skills.data, { deep: true }) as Skill[])
    const contactsCamel = contacts.error
        ? []
        : (camelcaseKeys(contacts.data, { deep: true }) as Contact[])

    return {
        ...userCamel,
        projects: projectsCamel ?? [],
        skills: skillsCamel ?? [],
        contacts: contactsCamel ?? []
    }
}