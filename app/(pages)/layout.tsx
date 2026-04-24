import { ReactNode } from "react";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function PagesLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Navbar />
            <main className="flex-1 flex dark:bg-neutral-900/60">
                {children}
            </main>
            <Footer />
        </>
    )
}