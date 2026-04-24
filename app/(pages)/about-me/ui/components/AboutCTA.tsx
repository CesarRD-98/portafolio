import Link from "next/link"
import { FaArrowUp } from "react-icons/fa"

export const AboutCTA = () => {
    return (
        <div className="flex justify-center gap-4">
            <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-blue-600/75 px-5 py-2 font-semibold text-white shadow-sm transition-all duration-200 ease-out hover:bg-blue-600 hover:shadow-md"
            >
                Contáctame <FaArrowUp className="rotate-45" />
            </Link>
        </div>
    )
}