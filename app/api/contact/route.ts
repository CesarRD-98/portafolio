import { isEmail } from "@/app/utils/isEmail";
import { NextRequest, NextResponse } from "next/server";

const WINDOW_MS = 60_000
const MAX_REQUESTS_PER_WINDOW = 10
const MAX_NAME_LENGTH = 120
const MAX_EMAIL_LENGTH = 254
const MAX_MESSAGE_LENGTH = 5000

const rateStore = new Map<string, { count: number; resetAt: number }>()

export async function POST(req: NextRequest) {
    if (isRateLimited(getClientIp(req))) {
        return resp(false, 'Has alcanzado el límite de envíos. Intenta de nuevo más tarde.', 429)
    }

    const body = await readJson(req)
    if (!body) {
        return resp(false, 'Datos de entrada inválidos.', 400)
    }

    const name = typeof body.name === 'string' ? body.name.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim() : ''
    const message = typeof body.message === 'string' ? body.message.trim() : ''
    const company = typeof body.company === 'string' ? body.company.trim() : ''

    if (company) {
        return resp(false, 'No se pudo enviar el mensaje.', 400)
    }

    if (!name || !email || !message) {
        return resp(false, 'Todos los campos son obligatorios', 400)
    }

    if (!isEmail(email)) {
        return resp(false, 'Por favor, introduce una dirección de correo electrónico válida.', 400)
    }

    if (name.length > MAX_NAME_LENGTH) {
        return resp(false, `El nombre no puede superar los ${MAX_NAME_LENGTH} caracteres.`, 400)
    }

    if (email.length > MAX_EMAIL_LENGTH) {
        return resp(false, `El correo no puede superar los ${MAX_EMAIL_LENGTH} caracteres.`, 400)
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
        return resp(false, `El mensaje no puede superar los ${MAX_MESSAGE_LENGTH} caracteres.`, 400)
    }

    let response: Response
    try {
        response = await fetch(`${process.env.API_URL!}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.API_KEY!
            },
            body: JSON.stringify({ name, email, message })
        })
    } catch {
        return resp(false, 'Parece que algo ha salido mal. Por favor, intenta nuevamente.', 500)
    }

    if (!response.ok) {
        const data = await parseJson<{ error?: { message?: string } }>(response)
        if (data) {
            console.error('Error al enviar el mensaje de contacto:', data)
        }

        const status = response.status
        if (status === 401 || status === 500) {
            return resp(false, 'Parece que algo ha salido mal. Por favor, intenta nuevamente.', status)
        }

        if (status === 429) {
            return resp(false, 'Parece que se ha excedido el límite de solicitudes. Por favor, intenta nuevamente más tarde.', status)
        }

        const message = data?.error?.message
        return resp(false, message ?? 'Parece que algo ha salido mal. Por favor, intenta nuevamente.', status)
    }

    return resp(true, 'Tu mensaje ha sido enviado con éxito.', 200)
}

const resp = (success: boolean, message: string, statusCode: number) => {
    return NextResponse.json({ success, message }, { status: statusCode })
}

const getClientIp = (req: NextRequest): string => {
    const forwarded = req.headers.get('x-forwarded-for')
    if (forwarded) return forwarded.split(',')[0].trim()

    const realIp = req.headers.get('x-real-ip')
    if (realIp) return realIp.trim()

    return 'unknown'
}

const isRateLimited = (key: string): boolean => {
    const now = Date.now()
    const entry = rateStore.get(key)

    if (!entry || now >= entry.resetAt) {
        rateStore.set(key, { count: 1, resetAt: now + WINDOW_MS })
        prune()
        return false
    }

    entry.count += 1
    return entry.count > MAX_REQUESTS_PER_WINDOW
}

const prune = () => {
    if (rateStore.size < 1000) return

    const now = Date.now()
    for (const [key, entry] of rateStore) {
        if (now >= entry.resetAt) rateStore.delete(key)
    }
}

const readJson = async (req: NextRequest): Promise<Record<string, unknown> | null> => {
    try {
        const body = await req.json()
        return body && typeof body === 'object' ? body : null
    } catch {
        return null
    }
}

const parseJson = async <T>(response: Response): Promise<T | null> => {
    try {
        return await response.json()
    } catch {
        return null
    }
}