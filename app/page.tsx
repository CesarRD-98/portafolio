import { Footer } from "./components/layout/Footer";
import { getUserPublic } from "./modules/user_public/user.service";
import { AboutMeView } from "./(sections)/about-me/about-me.view";
import { ContactView } from "./(sections)/contact/contact.view";
import { ProjectsView } from "./(sections)/projects/projects.view";
import { Header } from "./components/layout/Header";
import { HeroView } from "./(sections)/hero/hero.view";
import { after } from "next/server";
import { SITE_URL } from "./config/site";

export const revalidate = 60

export default async function Page() {
    after(() => {
        if (!process.env.API_URL) return

        void fetch(`${process.env.API_URL}/health`).catch(() => { })
    })

    const user = await getUserPublic();

    if (!user) {
        return (
            <main className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900/50">
                <Header />
                <div className="text-center px-6">
                    <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                        Contenido no disponible
                    </h1>
                    <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                        Intenta de nuevo más tarde.
                    </p>
                </div>
            </main>
        )
    }

    const sameAs = user.contacts
        .filter(c => c.category === 'social' && c.linkUrl)
        .map(c => c.linkUrl!)

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                name: user.author,
                url: SITE_URL,
                jobTitle: user.profession,
                description: user.tagLine,
                sameAs,
            },
            {
                "@type": "WebSite",
                name: user.author,
                url: SITE_URL,
                description: user.tagLine,
            },
        ],
    }

    return (
        <main className="min-h-screen bg-neutral-100 dark:bg-neutral-900/50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Header />
            <HeroView user={user} />
            <ProjectsView projects={user.projects} />
            <AboutMeView user={user} />
            <ContactView />
            <Footer user={user} />
        </main>
    );
}