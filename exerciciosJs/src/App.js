import React from 'react'
import { View, StyleSheet } from 'react-native'

import Contador from './components/Contador'
// import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import CompPadrao, { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (
	<View>
		<Contador inicial={100} passo={13}/>
		<Contador />
        {/*
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
    </View>
)

const styles = StyleSheet.create({
	App: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})