import { useState } from "react";
import CalculaSomaMatrizes from "../service/CalculaSomaMatrizes";

export default function SomaDeMatrizes(){
    
    const [vendas, setVendas] = useState([[],[]])
    const [jan2020, setJan2020] = useState(0);
    const [fev2020, setFev2020] = useState(0);
    const [mar2020, setMar2020] = useState(0);
    const [abr2020, setAbr2020] = useState(0);

    const [jan2021, setJan2021] = useState(0);
    const [fev2021, setFev2021] = useState(0);
    const [mar2021, setMar2021] = useState(0);
    const [abr2021, setAbr2021] = useState(0);

    return(
        <>
            <div>Soma matriz duas dimensões</div>
            <form>
                <div>
                    <label>Venda Jan 2020</label>
                    <input 
                        onChange={(e) => {
                            setJan2020(Number(e.target.value))
                        }}
                        value={jan2020}
                    />
                    <label>Venda Fev 2020</label>
                    <input 
                        onChange={(e) => {
                            setFev2020(Number(e.target.value))
                        }}
                        value={fev2020}
                    />
                </div>
                <div>
                    <label>Venda Mar 2020</label>
                    <input 
                        onChange={(e) => {
                            setMar2020(Number(e.target.value))
                        }}
                        value={mar2020}
                    />
                    <label>Venda Abr 2020</label>
                    <input 
                        onChange={(e) => {
                            setAbr2020(Number(e.target.value))
                        }}
                        value={abr2020}
                    />
                </div>

                <div>
                    <label>Venda Jan 2021</label>
                    <input 
                        onChange={(e) => {
                            setJan2021(Number(e.target.value))
                        }}
                        value={jan2021}
                    />
                    <label>Venda Fev 2021</label>
                    <input 
                        onChange={(e) => {
                            setFev2021(Number(e.target.value))
                        }}
                        value={fev2021}
                    />
                </div>
                <div>
                    <label>Venda Mar 2020</label>
                    <input 
                        onChange={(e) => {
                            setMar2021(Number(e.target.value))
                        }}
                        value={mar2021}
                    />
                    <label>Venda Abr 2021</label>
                    <input 
                        onChange={(e) => {
                            setAbr2021(Number(e.target.value))
                        }}
                        value={abr2021}
                    />
                </div>

                <button 
                    type={'submit'}
                    onClick={(e)=>{
                        e.preventDefault();
                        setVendas(CalculaSomaMatrizes(
                                [[jan2020,fev2020],[mar2020,abr2020]],
                                [[jan2021,fev2021],[mar2021,abr2021]]
                            ));
                    }}
                >
                    Somar 
                </button>
            </form>
            <table>
                <tr>
                    <td>{vendas[0][0]}</td>
                    <td>{vendas[0][1]}</td>
                </tr>
                <tr>
                    <td>{vendas[1][0]}</td>
                    <td>{vendas[1][1]}</td>
                </tr>
            </table>
        </>
    );
}