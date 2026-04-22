'use client'

import { Skill } from "@/app/modules/user_public/user.model"
import { ChevronDown, ChevronUp, Layers3 } from "lucide-react"
import { useState } from "react"
import { SkillCard } from "./SkillCard"
import Image from "next/image"

interface Props {
    skills: Skill[]
}

export function AboutStack({ skills }: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const primary = skills.filter((skill) => skill.isPrimary)

    return (
        <div className="w-full max-w-5xl space-y-6">
            <div className="text-center">
                <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.22em] text-neutral-500">
                    <Layers3 className="h-4 w-4 text-blue-500" />
                    Stack principal
                </p>
            </div>

            {!isOpen ? (
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    {primary.map((skill) => (
                        <div
                            key={skill.id}
                            className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white/60 p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
                        >
                            <Image
                                src={skill.logoUrl}
                                alt={skill.title}
                                width={36}
                                height={36}
                                className="h-8 w-8 object-contain"
                            />
                            <span className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
                                {skill.title}
                            </span>
                        </div>
                    ))}
                </div>
            ) : (
                <SkillCard skills={skills} />
            )}

            <div className="flex justify-center">
                <button
                    type="button"
                    onClick={() => setIsOpen((value) => !value)}
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-500 transition-colors hover:text-blue-600"
                >
                    {isOpen ? (
                        <>
                            <ChevronUp className="h-4 w-4" />
                            Ver stack principal
                        </>
                    ) : (
                        <>
                            <ChevronDown className="h-4 w-4" />
                            Ver stack completo
                        </>
                    )}
                </button>
            </div>
        </div>
    )
}