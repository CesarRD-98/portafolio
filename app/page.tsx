import { Footer } from "./components/layout/Footer";
import { getUserPublic } from "./modules/user_public/user.service";
import { AboutMeView } from "./(sections)/about-me/AboutMeView";
import { ContactView } from "./(sections)/contact/contact.view";
import { ProjectsView } from "./(sections)/projects/projects.view";
import { Header } from "./components/layout/Header";
import { HeroView } from "./(sections)/hero/hero.view";

export const metadata = {
    title: 'Portafolio - César Reyes',
    description: 'Portafolio de César Reyes, desarrollador web fullstack',
}

export const revalidate = 0

export default async function Page() {
    const data = await getUserPublic();
    if (!data) return null

    return (
        <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900/50">
            <Header />
            <HeroView user={data} />
            <ProjectsView user={data.projects} />
            <AboutMeView user={data} />
            <ContactView />
            <Footer user={data} />
        </main>
    );
}