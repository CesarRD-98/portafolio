import { metaItems } from "./config"

export function AboutMeta() {
    return (
        <div className="w-full max-w-5xl">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                {metaItems.map((item) => {
                    const Icon = item.icon

                    return (
                        <div
                            key={item.id}
                            className="flex flex-col items-center gap-2 rounded-md border border-neutral-200 bg-white/60 p-4 text-center transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-500 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60"
                        >
                            <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500">
                                <Icon size={18} />
                            </div>

                            <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-white">
                                {item.title}
                            </p>

                            <p className="mt-1 text-sm leading-relaxed text-neutral-500">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}