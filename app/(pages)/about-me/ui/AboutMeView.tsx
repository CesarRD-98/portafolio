import { User } from "@/app/modules/user_public/user.model"
import { Section } from "@/app/components/layout/Section"
import { AboutHeader } from "./components/AboutHeader"
import { AboutHighlights } from "./components/AboutHighlights"
import { AboutMeta } from "./components/AboutMeta"
import { AboutStack } from "./components/AboutStack"
import { AboutCTA } from "./components/AboutCTA"

type Props = {
    user: User
}

export function AboutMeView({ user }: Props) {
    return (
        <Section id="about">
            <div className="flex flex-col items-center gap-14 md:gap-16">
                <AboutHeader user={user} />
                <AboutMeta />
                <AboutHighlights />
                <AboutStack skills={user.skills} />
                <AboutCTA />
            </div>
        </Section>
    )
}