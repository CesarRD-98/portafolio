type AlertProps = {
    type: 'info' | 'success' | 'error' | 'warning'
    message: string
}

export function Alert({ type, message }: AlertProps) {
    const styles = {
        info: 'bg-blue-500/10 text-blue-500',
        success: 'bg-green-500/10 text-green-500',
        error: 'bg-red-500/10 text-red-500',
        warning: 'bg-yellow-500/10 text-yellow-500',
    }

    return (
        <div className={`px-4 py-3 rounded-md text-sm ${styles[type]}`}>
            {message}
        </div>
    )
}