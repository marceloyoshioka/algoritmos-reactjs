import { useState } from "react";


export default function NotaMediaVetor(){

    const [nota, setNota] = useState(0);
    
    return (
        <form>
            <div>
                <input 
                    placeholder={'Insira uma nota'}    
                    onChange={(e) => {
                        setNota(Number(e.target.value))
                    }}
                />
                <button 
                    type={'submit'}
                    onClick={(e) => {
                        e.preventDefault();
                        
                    }}
                >
                    Inserir nota
                </button>
            </div>

        </form>

    );
}