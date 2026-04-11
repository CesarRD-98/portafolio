import { UserService } from "../modules/user_public/user.service";
import { HomeView } from "./HomeView";

export const metadata = {
    title: 'Inicio',
    description: 'Portafolio de César Reyes, desarrollador web fullstack',
}

export const revalidate = 120

export default async function HomePage() {
    const data = await UserService.getUserPublic()
    return <HomeView data={data} />
}