import { useState } from "react";


export default function Idade(){
    const ano = 2021;
    const [nascimento, setNascimento] = useState(0);
    const [idade, setIdade] = useState(0)
    return(
        <form>
            <div>
                <label>Digite ano de nascimento: </label>
                <input 
                    value={nascimento}
                    onChange={e => setNascimento(Number(e.target.value))}
                />
            </div>
            <div>
                {`Sua idade é ${idade}`}
            </div>
            <div>
                {idade >= 16 
                    ? "Já tem idade para votar"
                    : "Ainda não tem idade para votar"}
            </div>
            <div>
                {idade >= 18
                    ? "Você já pode ter habilitação de motorista"
                    : "Você ainda não pode ter habilitação de motorista"}
            </div>
            <div>
                <button
                    type={'submit'}
                    onClick={(e) => {
                        e.preventDefault()
                        setIdade(ano - nascimento)
                    }}
                >
                    Verificar
                </button>
            </div>
        </form>
    );
}