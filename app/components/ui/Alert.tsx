import { Check, CircleX, Info, LucideIcon, TriangleAlert } from "lucide-react"

type AlertProps = {
    type: 'info' | 'success' | 'error' | 'warning'
    message: string
}

export function Alert({ type = 'info', message }: AlertProps) {
    const styles = {
        info: 'border-2 border-blue-500/10 text-blue-500/80',
        success: 'border-2 border-green-500/10 text-green-500/80',
        error: 'border-2 border-red-500/10 text-red-500/80',
        warning: 'border-2 border-yellow-500/10 text-yellow-500/80',
    }

    const Icon: Record<AlertProps['type'], LucideIcon> = {
        info: Info,
        success: Check,
        error: CircleX,
        warning: TriangleAlert,
    }

    const IconComponent = Icon[type];

    return (
        <div className={`py-4 rounded-2xl flex flex-col items-center justify-center gap-2 ${styles[type]}`}>
            <IconComponent className="mr-2" />
            {message}
        </div>
    )
}