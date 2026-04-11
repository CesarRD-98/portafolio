import { UserService } from "@/app/modules/user_public/user.service"
import { AboutMeView } from "./ui/AboutMeView"

export const metadata = {
    title: 'Sobre mí',
    description: 'Conoce más sobre César Reyes, desarrollador fullstack, sus habilidades y tecnologías',
}
export const revalidate = 120

export default async function AboutMePage() {
    const data = await UserService.getUserPublic()
    return <AboutMeView data={data} />
}