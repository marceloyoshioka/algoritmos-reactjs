import { useState } from "react";


export default function CodigoClassificacaoProduto(){
    
    const [codigo, setCodigo] = useState(0)
    
    return(
        <form>
            <div>
                <label>
                    Insira o código de classificação do produto
                </label>
                <input 
                    value={codigo}
                    onChange={(e) => setCodigo(Number(e.target.value))}
                />
                <div>
                    { codigo === 1 ? "Alimento não perecivel" : 
                        codigo === 2 || codigo === 3 || codigo === 4 ? "Ailmento perecível":
                        codigo === 5 || codigo === 6 ? "Vesturário" :
                        codigo === 7 ? "Higiene pessoal" :
                        codigo >= 8 && codigo <= 15 ? "Limpeza e utensílios domesticos" :
                        "Código inválido"
                     }
                </div>
            </div>
        </form>
    );
}