import { useState } from "react";


export default function PesoIdeal(){
    
    const [sexo,setSexo] = useState("masculino");
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    return (
        <div>
            <p>
                Tendo como entrada  a altura e o sexo de uma pessoa, calcule um algoritmo
                que calcule o seu peso ideal, utilizando as seguintes formulas:
                para homens: (72.7*h)-58, para mulheres: (62.1*h) - 44.7 
            </p>

            <form>
                <div>
                    <label>Sexo: </label>
                    <select value={sexo} onChange={e => setSexo(e.target.value)} >
                        <option value="masculino">masculino</option>
                        <option value="feminino">feminino</option>
                    </select>
                </div>
                <div>
                    <label>Altura: </label>
                    <input 
                        value={altura}
                        onChange={e => setAltura(Number(e.target.value))}
                    />
                </div>
                <div>
                    {`${resultado}`}
                </div>

                <div>
                    <button

                        type={'submit'}
                        onClick={(e) => {
                            e.preventDefault();
                            if(sexo === 'masculino'){
                                setResultado((72.7*altura)-58)
                            } else{
                                setResultado((62.1*altura)-44.7)                               
                            }
                        }
                            
                        }
                    >
                        Calcular
                    </button>
                </div>
            </form>
        </div>
    );
}