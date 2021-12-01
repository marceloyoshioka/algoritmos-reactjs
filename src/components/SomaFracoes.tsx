import { useState } from "react";


export default function SomaFracoes(){
    const inteiros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const [entrada, setEntrada] = useState(0);
    const [resultado, setResultado] = useState(0);
    let acumulador = 0;
    return (
        <form>
            <div>
                <label>Digite um número entre 1 e 20</label>
                <input 
                    value={entrada}
                    onChange={(e) => {
                        setEntrada(Number(e.target.value))
                    }}
                />
            </div>
            <button
                type={'submit'}
                onClick={(e) => {
                    e.preventDefault();
                    inteiros.map((inteiro) => {
                        if(inteiro <= entrada){
                            acumulador = acumulador+(1/inteiro)
                        }
                    })
                    setResultado(acumulador)
                }}
            >
                Calcular
            </button>
            <div>
                {resultado}
            </div>
        </form>

    );
}