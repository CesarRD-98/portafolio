import { Section } from "@/app/components/layout/Section"
import { Project } from "@/app/modules/user_public/user.model"
import { ProjectCard } from "./components/ProjectCard"

type Props = {
    data: Project[]
}

export function ProjectsView({ data }: Props) {
    return (
        <Section
            id="projects"
            title="Proyectos Destacados"
            description="Una selección de proyectos que reflejan mi experiencia"
            className="flex flex-col gap-10">

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2">
                <ProjectCard projects={data} />
            </div>

        </Section>
    )
}