/*IMPORT*/
import React, { Component } from 'react';
import {
  AppRegistry,
  View
} from 'react-native';
import ListaItens from './src/components/ListaItens';

/*RENDER*/
export default class app04 extends Component {

  render() {
    return (
      <View>
        <ListaItens />
      </View>
    );
  }
}

/*REGISTRY*/
AppRegistry.registerComponent('app04', () => app04);

/*componentWillMount(){}
componentDidMount(){}*/

/*Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
.then((response) => { console.log(response); })
.catch(() => { console.log('Erro ao recuperar os dados'); });*/
