/*IMPORT*/
import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';
import Axios from 'axios';
import Itens from './Itens';

/*RENDER*/
export default class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    Axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => { this.setState({ listaItens: response.data }); })
    .catch(() => { console.log('Erro ao recuperar os dados'); });
  }

  render() {
    return (
        <ScrollView style={{ backgroundColor: '#DDD' }}>
          <View style={{ marginBottom: 6, marginTop: 8 }}>
            { this.state.listaItens.map(item => (<Itens key={item.titulo} item={item} />))}
          </View>

        </ScrollView>
    );
  }
}
