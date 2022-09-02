import React, { Component } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import Estilo from '../estilo'


export default class Mega extends Component {

    render() {
        return (
            <>
                <Text style={Estilo.txtG}>
                    Gerador de Mega-Sena
                </Text>
            </>
        )
    }
}