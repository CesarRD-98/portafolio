import { UserService } from "@/app/modules/user_public/user.service"
import { ContactsView } from "./ContacsView"

export const metadata = {
    title: 'Contacto',
    description: 'Medios de contacto para comunicarte con César Reyes, desarrollador web',
}

export const revalidate = 120

export default async function ContactsPage() {
    const data = await UserService.getUserPublic()
    return <ContactsView contacts={data?.contacts ?? []} />
}