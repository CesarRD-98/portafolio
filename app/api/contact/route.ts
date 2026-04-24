import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { name, email, message } = await req.json()

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
        return resp(false, 'Todos los campos son obligatorios', 400)
    }

    const response = await fetch(`${process.env.API_URL!}/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': process.env.API_KEY!
        },
        body: JSON.stringify({ name, email, message })
    })

    if (!response.ok) {
        const status = response.status;
        if (status === 401 || status === 500) {
            return resp(false, 'Parece que algo ha salido mal. Por favor, intenta nuevamente.', status)
        }

        if (status === 429) {
            return resp(false, "Parece que se ha excedido el límite de solicitudes. Por favor, intenta nuevamente más tarde.", status)
        }

        const result = await response.json()
        return resp(false, result.error.message, status)
    }

    return resp(true, 'Tu mensaje ha sido enviado con éxito.', 200)
}

const resp = (success: boolean, message: string, statusCode: number) => {
    return NextResponse.json({ success, message }, { status: statusCode })
}