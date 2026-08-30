import { Section } from "@/app/components/layout/Section"
import { Project } from "@/app/modules/user_public/user.model"
import { ProjectList } from "./components/ProjectList"

type Props = {
    projects: Project[]
}

export function ProjectsView({ projects }: Props) {
    return (
        <Section
            id="projects"
            title="Proyectos Destacados"
            description="Una selección de proyectos que reflejan mi experiencia">

            {/* GRID */}
            <div className="flex flex-col gap-10">
                <ProjectList projects={projects} />
            </div>

        </Section>
    )
}