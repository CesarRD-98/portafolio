'use client'

import { Section } from "@/app/components/layout/Section"
import { ContactForm } from "./components/ContactForm"
import { ContactCard } from "./components/ContactCard"
import { Contact } from "@/app/modules/user_public/user.model"

type Props = {
    contacts: Contact[]
}

export function ContactView({ contacts }: Props) {
    return (
        <Section id="contact">

            <div className="flex flex-col gap-14">

                {/* BLOQUE 1: CONTACTO DIRECTO */}
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
                        Contáctame directamente
                    </h1>

                    <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                        Puedes comunicarte conmigo a través de cualquiera de estos medios.
                    </p>

                    <div className="w-full max-w-5xl mx-auto my-3">
                        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                            <ContactCard contacts={contacts} />
                        </div>
                    </div>
                </div>

                {/* DIVISOR VISUAL */}
                <div className="flex items-center gap-4">
                    <div className="flex-1 h-px bg-neutral-300 dark:bg-neutral-700" />
                    <span className="text-sm text-neutral-500">o</span>
                    <div className="flex-1 h-px bg-neutral-300 dark:bg-neutral-700" />
                </div>

                {/* BLOQUE 2: FORMULARIO */}
                <div className="flex flex-col gap-6 text-center">
                    <h3 className="text-xl font-semibold">
                        Envíame un mensaje
                    </h3>

                    <p className="text-neutral-500 max-w-xl mx-auto">
                        Completa el formulario y te responderé lo antes posible.
                    </p>

                    <div className="max-w-xl mx-auto w-full">
                        <ContactForm />
                    </div>
                </div>

            </div>
        </Section>
    )
}