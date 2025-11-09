import { motion } from 'framer-motion'


export const Sobre = () => {
    return (
        <div className="max-w-3xl mx-auto space-y-6">
            {/* <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Sobre o Criador</motion.h2> */}

            <div className="flex flex-col md:flex-row items-center md:justify-start  gap-3 md:gap-6 md:items-start">
                <div className="w-28 h-28 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-2xl font-bold">MB</div>

                <div className="text-center md:text-left space-y-2">
                    <p className="text-sm text-slate-700 dark:text-slate-300">Nome: <strong>Milagres Bartolomeu</strong></p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Email: <strong>milagresmarquees@gmail.com</strong></p>
                    <p className="text-sm text-slate-700 dark:text-slate-300">Descrição: Desenvolvedor(a) full-stack com interesse em criptografia aplicada e UX.</p>


                    <div className="mt-3 flex justify-center text-center gap-2">
                        <a className="text-indigo-600 underline" href='https://www.linkedin.com/in/milagres-bartolomeu-068925221/' target='_blank'>LinkedIn</a>
                        <a className="text-indigo-600 underline" href='https://github.com/milagresjr' target='_blank'>GitHub</a>
                        <a className="text-indigo-600 underline" href='https://www.instagram.com/milagresjr7/' target='_blank'>Instagram</a>
                    </div>
                </div>
            </div>

        </div>
    )
}