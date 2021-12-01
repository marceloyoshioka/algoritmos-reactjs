import { useState } from "react";

export default function Fatorial(){
    const inteiros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const [entrada, setEntrada] = useState(0);
    const [fatorial, setFatorial] = useState(0);
    let acumulador = 1;
    return(
        <form>
            <div>
                <label>Entre com um número entre 1 e 20</label>
                <input 
                    value ={entrada}
                    onChange={(e) => {
                        setEntrada(Number(e.target.value))
                    }}
                />
            </div>
            <div>
                <button
                    type={'submit'}
                    onClick={(e) => {
                        e.preventDefault()
                        inteiros.map((inteiro) => {
                            if(inteiro <= entrada){
                                acumulador = acumulador * inteiro
                            }
                        })
                        setFatorial(acumulador)
                    }}
                >
                    Calcular
                </button>
            </div>
            <div>
                {`O fatorial de ${entrada} é ${fatorial}`}
            </div>
        </form>
    );
}