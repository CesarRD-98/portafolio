import { ButtonHTMLAttributes, ReactNode } from "react";

type buttonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    action?: ReactNode
}

export function Button({ action, className = '', ...props }: buttonProps) {
    return (
        <button
            className={`flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 bg-white/70 
                        dark:bg-neutral-900/70 px-5 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-200 transition hover:border-blue-500/40 
                        hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer ${className}`}
            {...props}
        >
            {action && action}
        </button>
    );
}