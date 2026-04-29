import { useState } from "react";
import { ContactDto } from "../user.model";

type Status = 'idle' | 'sending' | 'slow' | 'success' | 'error'

export function useContact() {
    const [status, setStatus] = useState<Status>('idle')
    const [error, setError] = useState<string | null>(null)

    const send = async (payload: ContactDto): Promise<boolean> => {
        setStatus('sending')
        setError(null)

        const slowTimer = setTimeout(() => {
            setStatus(prev => (prev === 'sending' ? 'slow' : prev))
        }, 3000)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const result = await response.json()
                setError(result.message)
                setStatus('error')
                clearTimeout(slowTimer)
                return false
            }

            clearTimeout(slowTimer)
            setStatus('success')
            return true

        } catch {
            clearTimeout(slowTimer)
            setError('Parece que algo ha salido mal. Por favor, intenta nuevamente.')
            setStatus('error')
            return false
        }
    }

    return { status, setStatus, error, send }
}