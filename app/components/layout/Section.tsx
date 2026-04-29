import { ReactNode } from "react"
import { Container } from "./Container"

type SectionProps = {
    children: ReactNode
    title?: string
    id?: string
    description?: string
    className?: string
}

export const Section = ({
    children,
    title,
    id,
    description,
    className = ''
}: SectionProps) => {
    return (
        <section
            id={id}
            className={`w-full flex items-center justify-center py-24 md:py-32 scroll-mt-32 ${className}`}
        >
            <Container>

                {(title || description) && (
                    <div className="mb-10 md:mb-12 max-w-3xl">

                        {title && (
                            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                                {title}
                            </h2>
                        )}

                        {description && (
                            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
                                {description}
                            </p>
                        )}

                    </div>
                )}

                {children}

            </Container>
        </section>
    )
}