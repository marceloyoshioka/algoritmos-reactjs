import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';


function App() {
  return (
    <>
      <div>
        <Link to={'/algoritmo1'}> Equação do 2º grau</Link>
      </div>

      <div>
        <Link to={"/algoritmo2"}> CodigoClassificacaoProduto </Link>
      </div>

      <div>
        <Link to={"/algoritmo3"}> Fatorial </Link>
        </div>
      <div>
        <Link to={"/algoritmo4"}> Fibonacci </Link>
      </div>

      <div>
        <Link to={"/algoritmo5"}> Idade </Link>
      </div>

      <div>
        <Link to={"/algoritmo6"}> Media10Alunos </Link>
      </div>

      <div>
        <Link to={"/algoritmo7"}> OrdenacaoDecrescente </Link>
      </div>

      <div>
        <Link to={"/algoritmo8"}> PesoIdeal </Link>
      </div>
      
      <div>
        <Link to={"/algoritmo9"}> RaizAproximacaoInteiro </Link>
      </div>
      
      <div>
        <Link to={"/algoritmo10"}> SomaFracoes </Link>
      </div>

      <div>
        <Link to={"/algoritmo11"}> VerificaPrimo </Link>
      </div>

      <div>
        <Link to={"/algoritmo12"}> Nota média com vetor </Link>
      </div>

      <div>
        <Link to={"/algoritmo13"}> Média de 10 notas com vetor </Link>
      </div>

      <div>
        <Link to={"/algoritmo14"}> Ordenação por posições </Link>
      </div>

      <div>
        <Link to={"/algoritmo15"}> Ordenação por bolha </Link>
      </div>

      <div>
        <Link to={"/algoritmo16"}>Soma de matrizes </Link>
      </div>

      <div>
        <Link to={"/algoritmo17"}>Uma passagem de ônibus</Link>
      </div>

      <div>
        <Link to={"/algoritmo18"}>Array de passagem de ônibus</Link>
      </div>

    </>
  );
}

export default App;
