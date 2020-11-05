import React from 'react';
import {Text,Wrapper,ContainerText} from './style.js';
import { StatusBar } from 'expo-status-bar';
import Boxtext from '../Componentes/Boxtext';


export default function Screen(){
    return(
        <Wrapper>
            <StatusBar hidden />
            <ContainerText>
                <Text>Conversor De Binario para Decimal</Text>
            </ContainerText>
            <Boxtext/>
        </Wrapper>
    );
}