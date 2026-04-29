'use client'

import { Section } from "@/app/components/layout/Section"
import { ContactForm } from "./components/ContactForm"

export function ContactView() {
    return (
        <Section id="contact">

            <div className="flex flex-col gap-14">

                {/* BLOQUE 2: FORMULARIO */}
                <div className="flex flex-col gap-6">
                    <h2 className="text-xl font-semibold text-center">
                        Envíame un mensaje
                    </h2>

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