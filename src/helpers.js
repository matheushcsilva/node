function filtraOcorrencias(paragrafo){
    return Object.keys(paragrafo).filter(chave =>paragrafo[chave] > 1)
}

function montaSaidaArquivo(listaPalavras){
    let textoFinal = '';
    listaPalavras.forEach((paragrafos,indice) => {
        const duplicadadas = filtraOcorrencias(paragrafos).join(', ');
        if (duplicadadas) textoFinal += `Palavras duplicadas no parágrafo ${indice+1}: ${duplicadadas} \n`;
    })
    return textoFinal;
}
export {montaSaidaArquivo};