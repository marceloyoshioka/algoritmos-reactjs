

export default function OrdenaBolha(vetor){
    
    const array = [...vetor];

    for (let indice = 0; indice < array.length; indice++){
       
        for(let outroIndice = 0; outroIndice < array.length - indice - 1; outroIndice++){
            if(array[outroIndice] > array[outroIndice+1]){
                let variavelTemporaria = array[outroIndice];
                array[outroIndice] = array[outroIndice+1];
                array[outroIndice+1] = variavelTemporaria;
            }
        }
       
    }

    return array;
}