import { FaRegFilePdf } from "react-icons/fa6";
import Link from 'next/link'

type Props = {
    cvUrl: string
}

export function CvView({ cvUrl }: Props) {
    if (cvUrl.trim() === '') {
        return <p className="text-sm text-neutral-500 dark:text-neutral-400">CV no disponible</p>
    }

    return (
        <Link
            href={cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium
                    border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300
                    hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all duration-200 ease-out"
        >
            <FaRegFilePdf className="text-red-500" />
            Ver CV
        </Link>
    );
}