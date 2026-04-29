'use client'

import { Alert } from '@/app/components/ui/Alert'
import { Spinner } from '@/app/components/ui/spinner/Spinner'
import { useContact } from '@/app/modules/user_public/hooks/userPublic.hook'
import { X } from 'lucide-react'
import { useState, FormEvent, useEffect } from 'react'

type FormState = {
    name: string
    email: string
    message: string
    company?: string
}

export function ContactForm() {
    const { error, status, setStatus, send } = useContact();

    const [form, setForm] = useState<FormState>({
        name: '',
        email: '',
        message: '',
        company: ''
    })

    const isValid = form.name.trim() && form.email.trim() && form.message.trim();

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
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* HONEYPOT */}
            <input
                id="company"
                type="text"
                name="company"
                value={form.company}
                onChange={handleChange}
                className="hidden"
            />

            {/* NAME */}
            <div className="flex flex-col gap-2">
                <label htmlFor='name' className="text-sm text-neutral-500">
                    <span>Nombre y apellido</span>
                    <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                    id='name'
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* EMAIL */}
            <div className="flex flex-col gap-2">
                <label htmlFor='email' className="text-sm text-neutral-500">
                    <span>Email</span>
                    <span className="ml-1 text-red-500">*</span>
                </label>
                <input
                    id='email'
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* MESSAGE */}
            <div className="flex flex-col gap-2">
                <label htmlFor='message' className="text-sm text-neutral-500">
                    <span>Mensaje</span>
                    <span className="ml-1 text-red-500">*</span>
                </label>
                <textarea
                    id='message'
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="px-4 py-2 rounded-2xl border border-neutral-300 dark:border-neutral-700 
                    bg-white/70 dark:bg-neutral-900/60 focus:outline-none focus:border-blue-500 transition"
                />
            </div>

            {/* BUTTON */}
            <button
                type="submit"
                disabled={status === 'sending' || status === 'slow' || !isValid}
                className="flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 
                bg-white/70 dark:bg-neutral-900/70 px-5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 
                transition hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer 
                disabled:cursor-not-allowed disabled:border-neutral-300/50 disabled:bg-white/50 disabled:text-neutral-500 
                dark:disabled:border-neutral-700/50 dark:disabled:bg-neutral-900/50 dark:disabled:text-neutral-500/70"
            >
                {(status === 'sending' || status === 'slow') ? <Spinner /> : 'Enviar mensaje'}
            </button>

            {/* FEEDBACK */}
            <div className="relative">

                {status === 'sending' && (<Alert type="info" message="Enviando mensaje..." />)}

                {status === 'slow' && (<Alert type="warning" message="El servidor está iniciando, puede tardar unos segundos..." />)}

                {status === 'success' && (<Alert type="success" message="Mensaje enviado exitosamente." />)}

                {status === 'error' && (<Alert type="error" message={error ?? 'Ocurrió un error inesperado'} />)}

                {status !== 'idle' && (
                    <button type='button' className='cursor-pointer' onClick={() => setStatus('idle')}>
                        <span className="absolute top-3 right-3 text-xs text-neutral-500 hover:text-neutral-500/80">
                            <X size={18} />
                        </span>
                    </button>
                )}
            </div>

        </form>
    )
}