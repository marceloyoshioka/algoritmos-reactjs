import { useEffect, useState } from "react";


export default function Media10Alunos(){
    let media = 0;
    const notas = [
        { n1: 8, n2: 7,n3: 5, n4: 9},
        { n1: 3, n2: 5,n3: 5, n4: 4},
        { n1: 10, n2: 9,n3: 9, n4: 10},
    ]; 

    return(
        <ul>
            {
                notas.map((nota) => {
                    media = (nota.n1+nota.n2+nota.n3+nota.n4)/4
                    if(media > 7){
                        return ( <li>{`Média anual: ${media} - Aprovado - Parabéns`}</li> )
                    }else{
                        return (<li>{`Média anual: ${media} - Reprovado - Estude mais`}</li>)
                    }
                })
            }
        </ul>
    );
}