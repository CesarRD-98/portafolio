'use client'

import { Alert } from '@/app/components/ui/Alert'
import { Spinner } from '@/app/components/ui/spinner/Spinner'
import { useContact } from '@/app/modules/user_public/hooks/userPublic.hook'
import { useState, FormEvent, useEffect } from 'react'

type FormState = {
    name: string
    email: string
    message: string
    company?: string
}

export function ContactForm() {
    const { error, status, send } = useContact();

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: '',
        company: ''
    })

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL!}/health`).catch(() => { })
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()

        const success = await send(form)
        if (success) {
            setForm({ name: '', email: '', message: '', company: '' })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

            {/* HONEYPOT */}
            <input
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="hidden"
            />

            {/* NAME */}
            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral-500">Nombre</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral-500">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-1">
                <label className="text-sm text-neutral-500">Mensaje</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="px-4 py-3 rounded-md border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={status === 'sending' || status === 'slow'}
                className="mt-2 px-6 py-3 rounded-md bg-blue-600/75 text-white hover:bg-blue-600 transition disabled:opacity-50 cursor-pointer"
            >
                {(status === 'sending' || status === 'slow') ? <Spinner /> : 'Enviar mensaje'}
            </button>

            {/* FEEDBACK */}
            <div className="mt-2">

                {status === 'sending' && (<Alert type="info" message="Enviando mensaje..." />)}

                {status === 'slow' && (<Alert type="warning" message="El servidor está iniciando, puede tardar unos segundos..." />)}

                {status === 'success' && (<Alert type="success" message="Mensaje enviado exitosamente." />)}

                {status === 'error' && (<Alert type="error" message={error ?? 'Ocurrió un error inesperado'} />)}

            </div>

        </form>
    )
}