
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Copy, Key } from 'lucide-react'
import { CifrarMensagem } from '../service/service'


export const Cifrar = () => {
    const [texto, setTexto] = useState('')
    const [chave, setChave] = useState('')
    const [resultado, setResultado] = useState<string | null>(null);

    const [copying, setCopying] = useState(false);

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

    const onCifrar = () => {
        const txtCifrado = CifrarMensagem(texto, chave);
        // lógica ficará por implementar - por agora apenas mostraremos um mock estilizado
        setResultado(texto ? `🔒 ${txtCifrado}` : '');
    }

    function handleCopy() {
        if (resultado) {
            setCopying(true);
            navigator.clipboard.writeText(resultado);
            setTimeout(() => setCopying(false), 2000);
        }
    }

    return (
        <div className="max-w-3xl mx-auto space-y-6">
            <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-2xl font-semibold">Cifrar Mensagem</motion.h2>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 space-y-3">
                    <label className="block text-sm font-medium">Texto em claro</label>
                    <textarea value={texto} onChange={handleChangeTexto} rows={6} className="w-full rounded-md border p-3 resize-none" placeholder="Escreva aqui o texto..." />


                    <label className="block text-sm font-medium">Chave</label>
                    <div className="flex gap-2">
                        <input value={chave} onChange={handleChangeChave} className="flex-1 rounded-md border p-2" placeholder="Ex: MINHA_CHAVE" />
                        <button className="px-3 py-2 rounded-md border border-slate-300" title="Gerar chave">
                            <Key size={16} />
                        </button>
                    </div>


                    <div className="mt-4">
                        <button onClick={onCifrar} className="px-5 py-2 rounded-md bg-indigo-600 text-white">Cifrar</button>
                    </div>
                </div>


                <div className="col-span-1">
                    <label className="block text-sm font-medium mb-2">Resultado</label>


                    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: resultado ? 1 : 0.6, y: resultado ? 0 : 8 }} className="output-card min-h-[180px] flex flex-col justify-between">
                        <div>
                            {resultado ? (
                                <pre className="whitespace-pre-wrap break-words text-sm">{resultado}</pre>
                            ) : (
                                <p className="text-sm text-slate-500">O texto cifrado aparecerá aqui depois de clicar em <strong>Cifrar</strong>.</p>
                            )}
                        </div>


                        <div className="flex justify-end mt-4">
                            <button
                                onClick={handleCopy}
                                className="inline-flex cursor-pointer items-center gap-2 px-3 py-2 rounded-md border" title="Copiar">
                                <Copy size={16} /> 
                                {copying ? 'Copiado!' : 'Copiar'}
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}