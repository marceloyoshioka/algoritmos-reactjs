import { useState } from "react";


export default function OrdenacaoDecrescente(){
    
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [num3, setNum3] = useState(0);
    const [maior, setMaior] = useState(0);
    const [meio, setMeio] = useState(0);
    const [menor, setMenor] = useState(0);
    return (
        <>
        <p>
            Escreva um algoritmo que leia três valores inteiros e diferentes            
            e mostre-os em ordem decrescente.
        </p>
        <form>
            <div>
                <label>Primeiro número</label>
                <input 
                    value={num1}
                    onChange={(e) => {
                        setNum1(Number(e.target.value))
                    }}
                />
            </div>
            
            <div>
                <label>Segundo número</label>
                <input 
                    value={num2}
                    onChange={(e) => {
                        setNum2(Number(e.target.value))
                    }}
                />
            </div>
            
            <div>
                <label>Terceiro número</label>
                <input 
                    value={num3}
                    onChange={(e) => {
                        setNum3(Number(e.target.value))
                    }}
                />
            </div>

            <div>
                { `${menor} ${meio} ${maior}` }
            </div>

            <button 
                type={'submit'}
                onClick={(e) => {
                    e.preventDefault()
                    
                    setMaior(num1)
                    setMeio(num2)
                    setMenor(num3)

                    if(num3 > num2){
                        setMeio(num3)
                        setMenor(num2)
                    }

                    //num2 é o maior
                    if(num2 > num1 && num2 > num3){
                        setMaior(num2)
                        //num1 é o do meio
                        if(num1 > num3){
                            setMeio(num1)
                            setMenor(num3)
                        } // num3 é o do meio 
                        else{
                            setMeio(num3)
                            setMenor(num1)
                        }
                    }

                    if(num3 > num2 && num3 > num1){
                        setMaior(num3)
                        if(num1 > num2){
                            setMeio(num1)
                            setMenor(num2)
                        } else{
                            setMeio(num2)
                            setMenor(num1)
                        }
                    }
                }}
            >
                Ordenar
            </button>
        </form>
        </>
    );

}