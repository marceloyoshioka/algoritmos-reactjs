import { useState } from "react";


export default function VerificaPrimo(){
    const [entrada, setEntrada] = useState(0);
    const [primo, setPrimo] = useState(true)
    const inteiros = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    return (
        <form>
            <div>
                <label>
                    Digite um número
                </label>
                <input
                    value={entrada}
                    onChange={(e) => {
                        setEntrada(Number(e.target.value))
                    }}
                />
                
                <div>
                    <button
                        type={'submit'}
                        onClick={(e) => {
                            e.preventDefault();
                            setPrimo(true)
                            inteiros.map((inteiro) => {
                                if(inteiro < entrada && entrada % inteiro === 0){
                                    setPrimo(false)
                                }
                            })
                        }}
                    >
                        Calcular
                    </button>
                </div>

                <div>
                    {primo 
                        ? "É primo"
                        : "Não é primo"
                    }
                </div>
            </div>
        </form>
    );
}