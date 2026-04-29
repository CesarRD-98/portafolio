import { Section } from "@/app/components/layout/Section"
import { Project } from "@/app/modules/user_public/user.model"
import { ProjectCard } from "./components/ProjectCard"

type Props = {
    user: Project[]
}

export function ProjectsView({ user }: Props) {
    return (
        <Section
            id="projects"
            title="Proyectos Destacados"
            description="Una selección de proyectos que reflejan mi experiencia">

            {/* GRID */}
            <div className="flex flex-col gap-10">
                <ProjectCard projects={user} />
            </div>

        </Section>
    )
}