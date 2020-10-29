import React, { Component, useState} from 'react';
import { View, FlatList} from 'react-native';

import Historico from './historico.js';

const ListaHistorico = () => {
    
    const [historico, setHistorico] = useState([
        {
            id: '1',
            nome: 'Yuri Christian',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Av. Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 3,
            metodoPagamento: 'dinheiro',
        },
        {
            id: '2',
            nome: 'Ericleiton Macedo',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'R. Sebastiana Antônia Gomes',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 5,
            metodoPagamento: '51222323',
        },
        {
            id: '3',
            nome: 'Najla Menezes',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'R. Geraldo Gonzaga Ribeiro',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 4,
            metodoPagamento: 'dinheiro',
        },
        {
            id: '4',
            nome: 'Diego Christenson',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'R. Estudante Edmar Francisco Feliciano',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 1,
            metodoPagamento: '52325465',
        },
        {
            id: '5',
            nome: 'João Costa',
            ranking: 'O melhor',
            recolhimento: 'R. Libério Moreira da Silva',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 3,
            metodoPagamento: '53251435',
        },
        {
            id: '6',
            nome: 'Namikoka',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 3,
            metodoPagamento: '41282589',
        },
        {
            id: '7',
            nome: 'Namikoka',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 5,
            metodoPagamento: '54983216',
        },
        {
            id: '8',
            nome: 'Namikoka',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 5,
            metodoPagamento: 'dinheiro',
        },
        {
            id: '9',
            nome: 'Namikoka',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 4,
            metodoPagamento: '55766616',
        },
        {
            id: '10',
            nome: 'Namikoka',
            ranking: 'O melhor',
            recolhimento: 'Rua dos Alfeneiros',
            entrega: 'Plataforma 9/3 quartos',
            dataPedido: 'Sex, 18 setembro 2020',
            horaRec: '13:20',
            horaEntr: '13:50',
            valor: 'R$13,50',
            avaliacao: 5,
            metodoPagamento: 'dinheiro',

        },
    ]);
        return(
            <View>
                <FlatList
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                data={historico}
                renderItem={
                    ({item}) => <Historico data={item}/>}
               />
            </View>
    );
}

export default ListaHistorico;