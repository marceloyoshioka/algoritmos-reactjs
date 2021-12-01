import { useState } from "react";
import OrdenaBolha from "../service/OrdenaBolha";


//Usa o ordenação por seleção
export default function OrdenacaoBolha(){
    
    const [elemento, setElmento] = useState<number>(0);
    const [vetorOrdenado, setVetorOrdenado ] = useState<number[]>([]);
    
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
                        setVetorOrdenado([...OrdenaBolha(vetorOrdenado)]);
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