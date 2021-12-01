import { useState } from "react";

export default function EquacaoSegundoGrau(){
    const [a,setA] = useState(0);
    const [b,setB] = useState(0);
    const [c,setC] = useState(0);
    const [delta,setDelta] = useState(0);
    const [resultado1,setResultado1] = useState(0);
    const [resultado2,setResultado2] = useState(0);
    return (
        <>
            <p>
                Desenvolva um algoritmo que calcule as raízes de uma equação do 2º grau
                na forma Ax2 + Bx + C, levando em consideração a existência de 
                raízes reais 
            </p>
            <form>
                <div>
                    <label>Valor de a: </label>
                    <input 
                        type={'number'}
                        value={a}
                        onChange={(e) => {
                            setA(Number(e.target.value))
                        }}
                    />
                </div>

                <div>
                    <label>Valor de b: </label>
                    <input 
                        type={'number'}
                        value={b}
                        onChange={(e) => {
                            setB(Number(e.target.value))
                        }}
                    />
                </div>

                <div>
                    <label>Valor de c: </label>
                    <input 
                            type={'number'}
                            value={c}
                            onChange={(e) => {
                                setC(Number(e.target.value))
                            }}
                    />
                </div>

                <div>
                    { delta < 0 
                        ? "Não existem raízes para delta menor que 0"
                        : `Raízes x1 = ${resultado1} e x2 = ${resultado2}`
                    }
                </div>
                <button 
                    type={'submit'}
                    onClick={(e) => {
                        e.preventDefault()
                        setDelta(Math.pow(b,2) - 4*a*c)
                            if(delta < 0){
                                
                            } else{
                                setResultado1((-b+Math.sqrt((Math.pow(b,2) - 4*a*c)))/(2*a))
                                setResultado2((-b-Math.sqrt((Math.pow(b,2) - 4*a*c)))/(2*a))
                            }
                    }}
                >
                    Calcular
                </button>
            </form>
        </>

    );
}