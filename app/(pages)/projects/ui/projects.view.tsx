import { Section } from "@/app/components/layout/Section"
import { Project } from "@/app/modules/user_public/user.model"
import { ProjectCard } from "./components/ProjectCard"

type Props = {
    data: Project[]
}

export function ProjectsView({ data }: Props) {
    return (
        <Section id="projects" className="flex flex-col gap-10">

            {/* HEADER */}
            <div className="max-w-2xl mb-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Proyectos Destacados
                </h1>

                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Una selección de proyectos que reflejan mi experiencia en el desarrollo web y móvil.
                </p>
            </div>

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2">
                <ProjectCard projects={data} />
            </div>

        </Section>
    )
}