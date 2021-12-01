import { useState } from "react";


export default function RaizAproximacaoInteiro(){
    const [numero, setNumero] = useState(0);
    const [resultado, setResultado] = useState(0);
    const inteiros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return (
        <form>
            <div>
                <label>Digite um número entre 1 e 400: </label>
                <input 
                    value={numero}
                    onChange={(e) => {
                        setNumero(Number(e.target.value))
                    }}
                />
            </div>
            <div>
                {`O menor inteiro aproximado da raiz quadrada de ${numero} é ${resultado}`}
            </div>
            <div>
                <button
                    type={'submit'}
                    onClick={(e) => {
                        e.preventDefault()
                        inteiros.map((inteiro) => {
                            if(inteiro * inteiro <= numero){
                                setResultado(inteiro)
                            }
                        })
                    }}
                >
                    Calcular
                </button>
            </div>
        </form>
    );
}