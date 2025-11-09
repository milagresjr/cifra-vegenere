import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Lock, Unlock } from 'lucide-react'

export const Home = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <section className="space-y-6">
                <motion.h2
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-extrabold"
                >
                    Cifra de Vigenère — Um toque clássico para privacidade moderna
                </motion.h2>


                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-600 dark:text-slate-300 max-w-xl"
                >
                    Experimente cifrar e decifrar mensagens ou textos com uma interface simples e elegante. <br />
                    <span className='text-lg font-semibold'> Selecione uma ação abaixo para começar.</span>
                </motion.p>


                <div className="flex gap-3 mt-4">
                    <Link to="/cifrar" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-indigo-600 text-white hover:scale-[1.02] transition">
                        <Lock size={18} /> Cifrar
                    </Link>


                    <Link to="/decifrar" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-indigo-600 text-indigo-600 hover:bg-indigo-50 transition">
                        <Unlock size={18} /> Decifrar
                    </Link>
                </div>


                <div className="mt-6 text-sm">
                    <Link to="/sobre" className="text-indigo-600 underline">Sobre o criador</Link>
                </div>
            </section>


            <aside className="rounded-lg p-6 bg-white/80 dark:bg-slate-900/70 shadow-md">
                <motion.h3 initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="text-lg font-semibold mb-3">Como funciona (visão)</motion.h3>
                <ol className="list-decimal pl-5 text-slate-600 dark:text-slate-300 space-y-2">
                    <li>Forneça um texto e uma chave.</li>
                    <li>Clique em Cifrar para gerar o texto cifrado.</li>
                    <li>Use Decifrar com a chave correta para recuperar o texto original.</li>
                </ol>
            </aside>
        </div>
    )
}