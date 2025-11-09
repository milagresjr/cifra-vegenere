import { motion } from 'framer-motion'


export const Sobre = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Sobre o Criador</motion.h2>


            <div className="flex gap-6 items-start">
                <div className="w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold">MM</div>


                <div className="space-y-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300">Nome: <strong>Milagres Marques</strong></p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Email: <strong>seu-email@exemplo.com</strong></p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Descrição: Desenvolvedor(a) full-stack com interesse em criptografia aplicada e UX.</p>


                    <div className="mt-3 flex gap-2">
                        <a className="text-indigo-600 underline">LinkedIn</a>
                        <a className="text-indigo-600 underline">GitHub</a>
                    </div>
                </div>
            </div>
        </div>
    )
}