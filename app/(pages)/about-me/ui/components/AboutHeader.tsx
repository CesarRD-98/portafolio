import { User } from "@/app/modules/user_public/user.model"

interface Props {
    user: User
}

export function AboutHeader({ user }: Props) {
    return (
        <div className="w-full max-w-3xl text-center">
            <p className="text-sm md:text-base uppercase font-medium tracking-[0.14em] text-blue-500/90">
                {user.profession}
            </p>

            <h1 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                {user.author}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base md:text-lg leading-relaxed text-neutral-600 dark:text-neutral-400">
                {user.shortBio}
            </p>
        </div>
    )
}