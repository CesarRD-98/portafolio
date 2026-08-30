import Image from 'next/image'
import { Spinner } from '@/app/components/ui/spinner/Spinner'

export default function Loading() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-5 bg-neutral-100 dark:bg-neutral-900/50 loader-fade">
            <div className="relative w-16 h-16">
                <Image
                    src="https://rekydsbimkpqukrlqkbi.supabase.co/storage/v1/object/public/assets/logos/logo-nav.png"
                    alt="César Reyes — cargando"
                    fill
                    sizes="64px"
                    className="object-contain"
                />
            </div>

            <span className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-white">
                CesarDev
            </span>

            <Spinner size={28} />
        </div>
    )
}