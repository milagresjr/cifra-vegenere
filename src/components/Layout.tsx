import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Inicializa com o tema salvo no localStorage ou padrão 'light'
        if (typeof window !== 'undefined') {
            return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light'
        }
        return 'light'
    });

    // Atualiza a classe do body e salva no localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
    }

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-sky-100 to-indigo-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100 transition-colors duration-500">
            
            {/* Header */}
            <header className="container mx-auto p-4 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-3">
                    <div className="rounded-md bg-indigo-600 text-white w-12 h-12 flex items-center justify-center font-bold text-xl">V</div>
                    <div>
                        <h1 className="text-lg font-semibold">Cifra Vigenère</h1>
                        <p className="text-sm text-slate-600 dark:text-slate-400">Ferramenta visual de cifrar/decifrar</p>
                    </div>
                </Link>
                <div className="flex gap-2 items-center">
                    {/* Botões de troca de tema */}
                    <button
                        onClick={() => toggleTheme('light')}
                        className={`p-2 rounded-full transition ${theme === 'light' ? 'bg-white text-yellow-500' : 'hover:bg-white/30 dark:hover:bg-slate-700'}`}
                    >
                        <Sun size={20} />
                    </button>
                    <button
                        onClick={() => toggleTheme('dark')}
                        className={`p-2 rounded-full transition ${theme === 'dark' ? 'bg-slate-700 text-white' : 'hover:bg-white/30 dark:hover:bg-slate-700'}`}
                    >
                        <Moon size={20} />
                    </button>
                </div>
            </header>

            {/* Área central de ação */}
            <main className="flex flex-col items-center justify-center flex-1 container mx-auto p-6 gap-6">

                {/* Conteúdo principal abaixo dos botões */}
                <div className="w-full mt-8">
                    {children}
                </div>
            </main>

            {/* Footer */}
            <footer className="container mx-auto p-6 text-center text-sm text-slate-500 dark:text-slate-400">
                © {new Date().getFullYear()} — Ferramenta de demonstração (design-only)
            </footer>
        </div>
    )
}
