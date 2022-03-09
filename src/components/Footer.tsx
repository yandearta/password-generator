import DarkModeToggler from "./DarkModeToggler"

export default function Footer() {
    return (
        <footer className="mt-3 flex justify-between">
            <DarkModeToggler />
            <div className="text-slate-700 dark:text-slate-400">
                made with <span className="text-red-600">&#10084;</span> by{" "}
                <a href="https://web.facebook.com/yande.cc/" target="_blank" rel="noreferrer" className="font-bold">
                    Yande Arta
                </a>
            </div>
        </footer>
    )
}
