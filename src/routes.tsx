import { Route, Switch } from "react-router-dom";
import App from "./App";

import EquacaoSegundoGrau from './components/EquacaoSegundoGrau';
import CodigoClassificacaoProduto from './components/CodigoClassificacaoProduto';
import Fatorial from './components/Fatorial';
import Fibonacci from './components/Fibonacci';
import Idade from './components/Idade';
import Media10Alunos from './components/Media10Alunos';
import OrdenacaoDecrescente from './components/OrdenacaoDescrescente';
import PesoIdeal from './components/PesoIdeal';
import RaizAproximacaoInteiro from './components/RaizAproximacaoInteiro';
import SomaFracoes from './components/SomaFracoes';
import VerificaPrimo from './components/VerificaPrimo';
import NotaMediaVetor from "./components/NotaMediaVetor";
import MediaDe10Notas from "./components/MediaDe10Notas";
import Ordenacao20Posicoes from "./components/Ordenacao20Posicoes";
import OrdenacaoBolha from "./components/OrdenacaoBolha";
import SomaDeMatrizes from "./components/SomaDeMatrizes";
import PassagemDeOnibus from "./components/PassagemDeOnibus";
import PassagemDeOnibusArray from "./components/PassagemDeOnibusArray";


export default function Routes(){
    return (
        <Switch>
            <Route path={"/"} exact component={App} />
            <Route path={"/algoritmo1"} exact component={EquacaoSegundoGrau} />
            <Route path={"/algoritmo2"} exact component={CodigoClassificacaoProduto} />
            <Route path={"/algoritmo3"} exact component={Fatorial} />
            <Route path={"/algoritmo4"} exact component={Fibonacci} />
            <Route path={"/algoritmo5"} exact component={Idade} />
            <Route path={"/algoritmo6"} exact component={Media10Alunos} />
            <Route path={"/algoritmo7"} exact component={OrdenacaoDecrescente} />
            <Route path={"/algoritmo8"} exact component={PesoIdeal} />
            <Route path={"/algoritmo9"} exact component={RaizAproximacaoInteiro} />
            <Route path={"/algoritmo10"} exact component={SomaFracoes} />
            <Route path={"/algoritmo11"} exact component={VerificaPrimo} />
            <Route path={"/algoritmo12"} exact component={NotaMediaVetor} />
            <Route path={"/algoritmo13"} exact component={MediaDe10Notas} />
            <Route path={"/algoritmo14"} exact component={Ordenacao20Posicoes} />
            <Route path={"/algoritmo15"} exact component={OrdenacaoBolha} />
            <Route path={"/algoritmo16"} exact component={SomaDeMatrizes} />
            <Route path={"/algoritmo17"} exact component={PassagemDeOnibus} />
            <Route path={"/algoritmo18"} exact component={PassagemDeOnibusArray} />
        </Switch>

    );
}