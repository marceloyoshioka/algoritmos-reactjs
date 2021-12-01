import { useState } from "react";
import OrdenaVetor from "../service/OrdenaArray";


//Usa o ordenação por seleção
export default function Ordenacao20Posicoes(){
    
    const [elemento, setElmento] = useState<number>(0);
    const [vetorOrdenado, setVetorOrdenado ] = useState<number[]>([]);
    
    const lista = [1,2,3]
    // vetorOrdenado.map((e) => {
    //     <li>{e}</li>
    // })
    //tem que criar um vetor dentro de um vetor
    //primeiro verifica qual é o menor valor 
    // coloca ele no primeiro elemento
    //depois procura o segundo menor valor
    //coloca no segundo elemento
    //e assim por diante
    return (
        <>

            <form>
                <input 
                    placeholder={'insira um valor'} 
                    value={elemento}
                    onChange={(item) => {
                        setElmento(Number(item.target.value))
                    }}    
                />
                <button 
                    type={'button'} 
                    onClick={( (e) => {
                        e.preventDefault();
                        setVetorOrdenado([...vetorOrdenado, elemento]);
                        
                    })}
                >
                    Inserir elemento
                </button>

                
                <button 
                    type={'button'} 
                    onClick={( (e) => {
                        e.preventDefault();
                        setVetorOrdenado([...OrdenaVetor(vetorOrdenado)]);
                    })}
                >
                    Ordenar elementos
                </button>
                
            </form>
            <ul>
               {vetorOrdenado.toString()} 
            </ul>
        </>
    );
}