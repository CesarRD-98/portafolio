import { highlights } from "./config"

export function AboutHighlights() {
    return (
        <div className="w-full max-w-3xl">
            <div className="flex flex-col items-center gap-7">
                {highlights.map((item, index) => {
                    const Icon = item.icon

                    return (
                        <div key={item.id} className="flex flex-col items-center group">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-neutral-300 bg-white/70 text-neutral-700 shadow-sm transition-colors duration-200 group-hover:border-blue-500 group-hover:text-blue-500 dark:border-neutral-700 dark:bg-neutral-900/60 dark:text-neutral-300">
                                <Icon size={18} />
                            </div>

                            <p className="mt-3 text-sm md:text-base text-neutral-500 transition-colors duration-200 group-hover:text-blue-500">
                                {item.title}
                            </p>

                            {index !== highlights.length - 1 && (
                                <div className="mt-4 h-10 w-px bg-neutral-300 transition-colors duration-200 group-hover:bg-blue-500 dark:bg-neutral-700" />
                            )}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}