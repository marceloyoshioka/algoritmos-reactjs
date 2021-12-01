import { useState } from "react";

export default function MediaDe10Notas(){
    const [notas, setNotas] = useState<number[]>([]);
    const [notaAtual, setNotaAtual] = useState<number>(0);
    const [media, setMedia] = useState<number>(0);
    let soma = 0;
    let contador = 0;

    return (
        <>
        <form>
            <input 
                placeholder="insira um valor" 
                value={notaAtual}
                onChange={(e) => {
                    setNotaAtual(Number(e.target.value))
                }}
            />
            
            <button 
                type={'submit'}
                onClick={(e) => {
                    e.preventDefault();
                    setNotas([...notas, notaAtual]);
                    
                }}
            >
                Add
            </button>

            <button
                type={'submit'}
                onClick={(e) => {
                    e.preventDefault();
                    notas.map((nota) => {
                        soma =  soma + nota ;
                        contador = contador + 1 ;
                        setMedia(soma/contador)
                    })
                    
                }}
            >
                Média
            </button>
            
        </form>
        <p>
            {notas}
        </p>
        <p>
            {`A média de notas é ${media}`}
        </p>
            
        </>
    );
}