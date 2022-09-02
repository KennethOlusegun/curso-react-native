import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'

import Mega from './components/mega/Mega'
// import FlexBoxV4 from './components/layout/FlexBoxV4'
// import FlexBoxV3 from './components/layout/FlexBoxV3'
// import FlexBoxV2 from './components/layout/FlexBoxV2'
// import FlexBoxV1 from './components/layout/FlexBoxV1'
// import DigiteSeuNome from './components/DigiteSeuNome'
// import ListaProdutosV2 from './components/produtos/ListaProdutosV2'
// import ListaProdutos from './components/produtos/ListaProdutos'
// import UsuarioLogado from './components/UsuarioLogado'
// import Familia from './components/relacao/Familia'
// import Membro from './components/relacao/Membro'
// import ParImpar from './components/ParImpar'
// import Diferenciar from './components/Diferenciar'
//  import ContadorV2 from './components/contador/ContadorV2'
// import Pai from './components/indireta/Pai'
// import Pai from './components/direta/Pai'
// import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
	<SafeAreaView>
		<Mega qtdeNumeros={7} />
        {/*
		<FlexBoxV4 />
		<FlexBoxV3 />
		<FlexBoxV2 />
		<FlexBoxV1 />
		<DigiteSeuNome />
		<ListaProdutosV2 />
		<UsuarioLogado usuario={{nome: 'Kenneth Olusegun', email: 'kennetholusegun@gmail.com'}} />
		<Familia>
			<Membro nome="Kenneth" sobrenome="Dornelles" />
			<Membro nome="Obafemi" sobrenome="Dornelles" />
		</Familia>
		<Familia>
			<Membro nome="Ana" sobrenome="Jesus" />
			<Membro nome="Paulo" sobrenome="Jesus" />
		</Familia>
		<ParImpar num={3} />
		<Diferenciar />
		<ContadorV2/>
		<Pai />
		<Pai />
		<Contador inicial={100} passo={13}/>
		<Contador />
		<Botao />
        <Titulo principal="Cadastro Produto"
            segundario="Tela de Cadastro do Produto" />
		 <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <Aleatorio min={1} max={60} />
        <MinMax min={3} max={20} />
        <MinMax min={1} max={94} />
        <CompPadrao />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </SafeAreaView>
)

const styles = StyleSheet.create({
	App: {
		flexGrow: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20
	}
})