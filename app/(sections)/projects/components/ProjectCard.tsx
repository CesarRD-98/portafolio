'use client'

import { Alert } from '@/app/components/ui/Alert'
import { Project } from '@/app/modules/user_public/user.model'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { FaArrowUp } from 'react-icons/fa6'

type Props = {
    projects: Project[]
}

export function ProjectCard({ projects }: Props) {

    const [showMore, setShowMore] = useState<boolean>(false)
    const projectsToShow = showMore ? projects : projects.slice(0, 2)

    const handleShowMore = () => {
        setTimeout(() => {
            setShowMore(prev => !prev)
        }, 300)
    }

    return (
        <>
            {!projects.length ? (
                <Alert type="info" message='Aún no hay proyectos para mostrar' />
            ) : (
                projectsToShow.map((project => (
                    <div
                        key={project.id}
                        className="group flex flex-col md:grid md:grid-cols-3 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800
                            bg-white dark:bg-neutral-900 transition-all duration-200 ease-out hover:-translate-y-[3px] hover:shadow-lg"
                    >

                        {/* IMAGE */}
                        <div className="relative h-40 w-full md:size-full overflow-hidden">
                            <Image
                                src={project.imgUrl}
                                alt={project.title}
                                fill
                                sizes='140px'
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="md:col-span-2 p-5 flex flex-col gap-4">

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">
                                {project.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-4">
                                {project.description}
                            </p>

                            {/* STACK */}
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="
                                            text-xs px-2 py-1 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300">
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* ROLE */}
                            <p className="text-xs text-neutral-500">
                                Rol: {project.role}
                            </p>

                            {/* CTA */}
                            {project.link && (
                                <div className="mt-2">
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 hover:underline">
                                        Ver proyecto
                                        <FaArrowUp className="rotate-45" />
                                    </Link>
                                </div>
                            )}

                        </div>

                    </div>
                )))
            )}

            {projects.length > 2 && (
                <div className="flex justify-center mt-4">
                    <button
                        onClick={handleShowMore}
                        className="flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 
                        dark:bg-neutral-900/70 px-5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition hover:border-blue-500/40 
                        hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
                    >
                        {showMore ? 'Mostrar menos' : 'Mostrar todos'}
                    </button>
                </div>
            )}
        </>
    )
}