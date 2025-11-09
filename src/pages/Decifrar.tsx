import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDownCircle } from 'lucide-react'
import { DecifrarMensagem } from '../service/service'


export const Decifrar: React.FC = () => {
    const [texto, setTexto] = useState('')
    const [chave, setChave] = useState('')
    const [resultado, setResultado] = useState<string | null>(null)

    const handleChangeTexto = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        // Remove tudo que não for letra e transforma em maiúscula
        const onlyLettersAndSpaces = e.target.value.replace(/[^a-zA-Z ]/g, '').toUpperCase()
        setTexto(onlyLettersAndSpaces)
    }

    const handleChangeChave = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove tudo que não for letra e transforma em maiúscula
        const onlyLetters = e.target.value.replace(/[^a-zA-Z]/g, '').toUpperCase();
        setChave(onlyLetters)
    }

    const onDecifrar = () => {
        const txtDecifrado = DecifrarMensagem(texto, chave);
        // Lógica ficará por implementar. Aqui mostramos um mock estilizado.
        setResultado(texto ? `🔓 ${txtDecifrado}` : null)
    }


    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Decifrar Mensagem</motion.h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 space-y-3">
                    <label className="block text-sm font-medium">Texto cifrado</label>
                    <textarea value={texto} onChange={handleChangeTexto} rows={6} className="w-full rounded-md border p-3 resize-none" placeholder="Cole aqui o texto cifrado..." />


                    <label className="block text-sm font-medium">Chave</label>
                    <input value={chave} onChange={handleChangeChave} className="w-full rounded-md border p-2" placeholder="Chave usada para cifrar" />


                    <div className="mt-4">
                        <button onClick={onDecifrar} className="px-5 py-2 rounded-md bg-emerald-600 text-white inline-flex items-center gap-2"><ArrowDownCircle /> Decifrar</button>
                    </div>
                </div>


                <div className="col-span-1">
                    <label className="block text-sm font-medium mb-2">Resultado</label>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: resultado ? 1 : 0.6 }} className="output-card min-h-[180px] flex flex-col justify-between">
                        <div>
                            {resultado ? (
                                <pre className="whitespace-pre-wrap break-words text-sm">{resultado}</pre>
                            ) : (
                                <p className="text-sm text-slate-500">O texto decifrado aparecerá aqui depois de clicar em <strong>Decifrar</strong>.</p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}