import { User } from "@/app/modules/user_public/user.model"
import { SkillCard } from "./components/SkillCard"
import { Section } from "@/app/components/layout/Section"
import { Brain, Code2, User as UserIcon } from "lucide-react"
import { CvView } from "./components/CvView"
import { FaArrowUp } from "react-icons/fa6"
import Link from 'next/link'

type Props = {
    data: User | null
}

export function AboutMeView({ data }: Props) {
    return (
        <Section id="about" className="flex flex-col gap-12">

            {/* HEADER */}
            <div className="max-w-2xl mb-4">
                <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                    Quién soy
                </h1>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                    Un poco sobre mi camino, habilidades y en qué estoy enfocado actualmente.
                </p>
            </div>

            {/* GRID */}
            <div className="grid gap-6 md:grid-cols-2">

                {/* BIO */}
                <article className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                        <UserIcon size={18} />
                        <h2 className="font-semibold">Sobre mí</h2>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        {data?.fullBio}
                    </p>

                    <CvView cvUrl={data?.cvUrl ?? ''} />
                </article>

                {/* SKILLS */}
                <section className="p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                        <Code2 size={18} />
                        <h2 className="font-semibold">Tecnologías</h2>
                    </div>

                    <div className="flex flex-wrap gap-6 items-start">
                        <SkillCard skills={data?.skills ?? []} />
                    </div>
                </section>

                {/* INTERESES */}
                <section className="md:col-span-2 p-6 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md flex flex-col gap-4">
                    <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                        <Brain size={18} />
                        <h2 className="font-semibold">Aprendiendo actualmente</h2>
                    </div>

                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl">
                        {data?.learningFocus}
                    </p>
                </section>

            </div>

            {/* CTA */}
            <div className="flex justify-start mt-4">
                <Link
                    href={'/contacts'}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-md bg-blue-600/75 text-white hover:bg-blue-600
                        transition-all duration-200 ease-out cursor-pointer shadow-sm hover:shadow-md"
                >
                    Contáctame
                    <FaArrowUp className="rotate-45" />
                </Link>
            </div>

        </Section>
    )
}