

export default function OrdenaVetor(vetor){
    
    const array = [...vetor];

    for (let indice = 0; indice < array.length; indice++){
        
        let indiceMinimo = indice;
        
        //encontra o menor numero no subarray
        for(let outroIndice = indice+1; outroIndice < array.length; outroIndice++){
            if(array[outroIndice] < array[indiceMinimo]){
                indiceMinimo = outroIndice;
            }
        }
        //troca de variáveis
        if(indiceMinimo != indice){
            let variavelTemporaria = array[indice];
            array[indice] = array[indiceMinimo];
            array[indiceMinimo] = variavelTemporaria;
        }
    }

    return array;
}