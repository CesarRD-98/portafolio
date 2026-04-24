import { getSupabase } from "@/app/lib/supabase/client"
import { toCamelCase } from "@/app/utils/caseConvert"
import { Contact, Project, Skill, User } from "./user.model"

export const UserService = {
    getUserPublic: async (): Promise<User | null> => {
        const supabase = getSupabase()

        const [user, projects, skills, contacts] = await Promise.all([
            supabase.from('profiles').select('*').maybeSingle(),
            supabase.from('projects').select('*').order('id', { ascending: true }),
            supabase.from('skills').select('*'),
            supabase.from('contacts').select('*')
        ])

        if (user.error) {
            throw new Error(user.error.message)
        }

        const userCamel = toCamelCase(user.data) as Omit<User, 'contacts' | 'projects' | 'skills'>
        const projectsCamel = toCamelCase(projects.data) as Project[]
        const skillsCamel = toCamelCase(skills.data) as Skill[]
        const contactsCamel = toCamelCase(contacts.data) as Contact[]

        return {
            ...userCamel,
            projects: projectsCamel ?? [],
            skills: skillsCamel ?? [],
            contacts: contactsCamel ?? []
        }
    }
}