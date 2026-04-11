import { UserService } from "@/app/modules/user_public/user.service"
import { ProjectsView } from "./ui/projects.view"

export const metadata = {
    title: 'Proyectos',
    description: 'Una selección de proyectos que reflejan mi experiencia en el desarrollo web y móvil',
}

export const revalidate = 120

export default async function ProjectsPage() {
    const data = await UserService.getUserPublic()
    return <ProjectsView data={data?.projects ?? []} />
}