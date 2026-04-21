import { FaArrowUp, FaUser, } from "react-icons/fa6"
import { Section } from "@/app/components/layout/Section"
import { User } from "@/app/modules/user_public/user.model"
import Image from 'next/image'
import Link from 'next/link'

type Props = {
    data: User | null
}

export function HomeView({ data }: Props) {
    if (!data) {
        return <p className="p-3 w-x-full text-center">Cargando datos...</p>
    }

    return (
        <Section id="home" className="mt-0 md:mt-5">
            <div className="grid gap-12 md:grid-cols-2 items-center">

                {/* LEFT */}
                <div className="flex flex-col gap-6">

                    {/* EYEBROW */}
                    <span className="text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                        Portafolio profesional
                    </span>

                    {/* TITLE */}
                    <h1 className="text-3xl md:text-5xl font-medium text-neutral-500 dark:text-neutral-300">
                        Hola, soy{' '}
                        <span className="text-neutral-900 dark:text-white font-semibold leading-tight tracking-tight">
                            {data.author}
                        </span>
                    </h1>

                    {/* SUBTITLE (PROTAGONISTA) */}
                    <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
                        Desarrollador Web & Software
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-xl">
                        {data.shortBio}
                    </p>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 mt-2">
                        {/* PRIMARY */}
                        <Link
                            href={'/projects'}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-md text-white font-semibold bg-blue-600/75 hover:bg-blue-600
                                transition-all duration-200 ease-out shadow-sm hover:shadow-md cursor-pointer"
                        >
                            Ver proyectos
                            <FaArrowUp className="rotate-45" />
                        </Link>

                        {/* SECONDARY */}
                        <Link
                            href={'/about-me'}
                            className="inline-flex items-center gap-2 px-5 py-2 rounded-md border-2 border-neutral-300 dark:border-neutral-700
                                text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer transition-all 
                                duration-200 ease-out"
                        >
                            Sobre mí
                            <FaUser />
                        </Link>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="flex justify-center md:justify-end relative">
                    <div className="relative w-full h-[170px] md:h-[300px] overflow-hidden">
                        <Image
                            src="https://rekydsbimkpqukrlqkbi.supabase.co/storage/v1/object/public/assets/banners/web-developer.webp"
                            alt="Ilustración de desarrollador web"
                            fill
                            sizes="140px"
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>
            </div>
        </Section>
    )
}