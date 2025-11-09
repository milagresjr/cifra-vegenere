


const ARRAY_ALFABETO = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

export function CifrarMensagem(texto: string, chave: string): string {

    const textoSemEspacos = texto.replace(/ /g, '');
    const chaveExpandida = chave.repeat(Math.ceil(textoSemEspacos.length / chave.length)).slice(0, textoSemEspacos.length);

    let resultado = "";

    for (let i = 0; i < textoSemEspacos.length; i++) {
        const letraTexto = textoSemEspacos.charAt(i);
        const letraChave = chaveExpandida.charAt(i);
        const numLetraTexto = ARRAY_ALFABETO.indexOf(letraTexto) + 1;
        const numLetraChave = ARRAY_ALFABETO.indexOf(letraChave) + 1;
        const somaNumeros = numLetraTexto + numLetraChave;
        let letraCifrada = '';
        let numFinal = 0;
        if (somaNumeros > 26) {
            numFinal = somaNumeros % 26;
        } else {
            numFinal = somaNumeros;
        }
        letraCifrada = ARRAY_ALFABETO[numFinal - 1];
        resultado += letraCifrada;
    }

    return resultado;
}

export function DecifrarMensagem(textoCifrado: string, chave: string): string {

    const chaveExpandida = chave.repeat(Math.ceil(textoCifrado.length / chave.length)).slice(0, textoCifrado.length);

    let resultado = "";

    for (let i = 0; i < textoCifrado.length; i++) {
        const letraCifrada = textoCifrado.charAt(i);
        const letraChave = chaveExpandida.charAt(i);
        const numLetraCifrada = ARRAY_ALFABETO.indexOf(letraCifrada) + 1;
        const numLetraChave = ARRAY_ALFABETO.indexOf(letraChave) + 1;
        let diferencaNumeros = numLetraCifrada - numLetraChave;
        let letraDecifrada = '';
        if (diferencaNumeros <= 0) {
            diferencaNumeros += 26;
        }
        letraDecifrada = ARRAY_ALFABETO[diferencaNumeros - 1];
        resultado += letraDecifrada;
    }

    return resultado;
}