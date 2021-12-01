import { useState } from "react";

export default function PassagemDeOnibusArray(){
    

    const [numeroPassagem, setNumeroPassagem] = useState("");
    const [data, setData] = useState("");
    const [origem, setOrigem] = useState("");
    const [destino, setDestino] = useState("");
    const [horario, setHorario] = useState("");
    const [poltrona, setPoltrona] = useState(1);
    const [idade, setIdade] = useState(1);
    const [nome, setNome] = useState("");
    const [todasAsPassagems, setTodasAsPassagems] = useState([{}]);

    function cadastrar(){
        const passagem = {
            numeroPassagem: numeroPassagem,
            data: data,
            origem: origem,
            destino: destino,
            horario: horario,
            poltrona: poltrona,
            idade: idade,
            nome: nome,
        }
        setTodasAsPassagems([...todasAsPassagems, passagem]);
    }

    function mostrar(){
        console.log(todasAsPassagems);
    }
    
    return (
        <form>
            <div>
                <label>número da passagem</label>
                <input 
                    onChange={(e) => {
                        setNumeroPassagem(e.target.value)
                    }}
                    value={numeroPassagem}
                />
                <label>data</label>
                <input 
                    type={'date'}
                    onChange={(e) => {
                        setData(e.target.value)
                    }}
                    value={data}
                />
            </div>
            <div>
                <label>origem</label>
                <input 
                    onChange={(e) => {
                        setOrigem(e.target.value)
                    }}
                    value={origem}
                />
                <label>destino</label>
                <input 
                    onChange={(e) => {
                        setDestino(e.target.value)
                    }}
                    value={destino}
                />
            </div>

            <div>
                <label>horário</label>
                <input type={'time'} 
                    onChange={(e) => {
                        setHorario(e.target.value)
                    }}
                    value={horario}
                />
                <label>potrona</label>
                <input type={'number'} 
                    onChange={(e) => {
                        setPoltrona(Number(e.target.value))
                    }}
                    value={poltrona}
                />
                <label>idade</label>
                <input type={'number'} 
                    onChange={(e) => {
                        setIdade(Number(e.target.value))
                    }}
                    value={idade}
                />
            </div>

            <div>
                <label>nome do passageiro</label>
                <input
                    onChange={(e) => {
                        setNome(e.target.value)
                    }}
                    value={nome}
                />
            </div>
            
            <button
                type={'button'}
                onClick={cadastrar}
            >
                cadastrar
            </button>
            <button
                type={'button'}
                onClick={mostrar}
            >
                mostrar
            </button>
        </form>
    );
}