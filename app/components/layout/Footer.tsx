import { UserService } from "@/app/modules/user_public/user.service"

export const Footer = async () => {
    const user = await UserService.getUserPublic()

    return (
        <footer className="w-full border-t border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md">
            <div className="py-4 flex justify-center">
                <p className="text-sm text-neutral-500">
                    &copy; {user?.author} {user?.year} - Portafolio
                </p>
            </div>
        </footer>
    )
}