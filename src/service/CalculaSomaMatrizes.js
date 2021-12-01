

export default function CalculaSomaMatrizes(matrizA, matrizB){
    //Referência
    //https://medium.com/swlh/learning-multidimensional-array-addition-in-javascript-890a75bc2c29
    
    let resultado = [[],[]];
    for(let i = 0; i < matrizA.length; i++){
        for(let j=0; j < matrizA[i].length; j++){
            resultado[i][j] = matrizA[i][j]+matrizB[i][j];

        }
    }
    return resultado;
}