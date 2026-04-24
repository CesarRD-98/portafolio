import { UserService } from "@/app/modules/user_public/user.service"
import { ContactView } from "./ui/contact.view"

export const metadata = {
    title: 'Contacto',
    description: 'Comunicate con César Reyes, desarrollador web fullstack',
}

export default async function ContactPage() {
    const user = await UserService.getUserPublic()
    return <ContactView contacts={user?.contacts ?? []} />
}