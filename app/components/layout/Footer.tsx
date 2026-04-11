import { UserService } from "@/app/modules/user_public/user.service"

export const Footer = async () => {
    const user = await UserService.getUserPublic()
    return (
        <footer className="w-full bg-white/60 backdrop-blur-md dark:bg-neutral-900/60 shadow-sm">
            <div className="max-w-7xl mx-auto py-3 md:py-5 text-center">
                {user && (
                    <p className="text-sm text-neutral-600 dark:text-neutral-400">
                        © {user.author} {user.year} — Portafolio
                    </p>
                )}
            </div>
        </footer>
    )
}