import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'


export default class Mega extends Component {

	state = {
		qtdeNumeros: this.props.qtdeNumeros,
	}

	alterarQtdeNumero(qtde) {
		this.setState({ qtdeNumeros: qtde })
	}

	// Outra forma de alterar estado

	// constructor(props) {
	// 	super(props)

	// 	this.state = {
	// 		qtdeNumeros: props.qtdeNumeros + 1000
	// 	}
	// }

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
					Gerador de Mega-Sena	
					{this.state.qtdeNumeros}
				</Text>
				<TextInput
					placeholder="Qtde de Números"
					value={this.state.qtdeNumeros}
					onChangeText={this.alterarQtdeNumero(qtde)}
				/>
            </>
        )
    }
}