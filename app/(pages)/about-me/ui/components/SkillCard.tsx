'use client'

import { Skill } from "@/app/modules/user_public/user.model"
import Image from "next/image"
import { useMemo, useState } from "react"

type Props = {
    skills: Skill[]
}

type SkillFilter = "all" | string

export function SkillCard({ skills }: Props) {
    const [filter, setFilter] = useState<SkillFilter>("all")

    const filters = useMemo<SkillFilter[]>(() => {
        if (!skills.length) return ["all"]
        const categories = Array.from(new Set(skills.map((skill) => skill.category)))
        return ["all", ...categories]
    }, [skills])

    const skillsMap = useMemo(() => {
        if (!skills.length) return []
        if (filter === "all") return skills
        return skills.filter((skill) => skill.category === filter)
    }, [filter, skills])

    return (
        <div className="p-4 md:p-6">
            <div className="flex flex-wrap justify-center gap-2">
                {filters.map((value) => {
                    const isActive = filter === value

                    return (
                        <button
                            key={value}
                            type="button"
                            onClick={() => setFilter(value)}
                            className={[
                                "rounded-md px-3 py-1.5 text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-blue-600/75 text-white"
                                    : "text-neutral-600 hover:bg-neutral-100 dark:text-neutral-400 dark:hover:bg-neutral-800",
                            ].join(" ")}
                        >
                            {value === "all" ? "Todos" : value.charAt(0).toUpperCase() + value.slice(1)}
                        </button>
                    )
                })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {skillsMap.map((skill) => (
                    <div
                        key={skill.id}
                        className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white/60 p-4 text-center shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
                    >
                        <Image
                            width={36}
                            height={36}
                            src={skill.logoUrl}
                            alt={skill.title}
                            className="object-contain"
                        />
                        <p className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                            {skill.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}