'use client'

import { useEffect } from 'react'
import { TriangleAlert } from 'lucide-react'

export default function Error({ error, unstable_retry }: {
    error: Error & { digest?: string }
    unstable_retry: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <main className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900/50 px-6">
            <div className="flex flex-col items-center gap-4 max-w-md text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-500/10 text-red-500">
                    <TriangleAlert size={26} />
                </div>

                <h1 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                    Algo salió mal
                </h1>

                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    Ocurrió un error inesperado al cargar la página. Puedes intentarlo de nuevo.
                </p>

                <button
                    onClick={() => unstable_retry()}
                    className="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-600/75 text-white text-sm font-medium transition"
                >
                    Reintentar
                </button>
            </div>
        </main>
    )
}