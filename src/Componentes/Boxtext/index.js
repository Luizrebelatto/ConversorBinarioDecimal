import React,{Component} from 'react';
import {
    View,
    TextInput,
    Text
    } from './style.js';
    
export default class Boxtext extends Component{

    constructor(props){
        super(props);
        this.state = {
            numero:' ',
        };
        this.setNumberDecimal = this.setNumberDecimal.bind(this);
    }


    setNumberDecimal(n){
        this.setState({numero: this.convertBinaryToDecimal(n)});
    }

    convertBinaryToDecimal(bin){
        let dec=0;
        for (let c = bin.length - 1, i = 0; c >= 0; c--, i++) {
            dec += bin[c] * Math.pow(2, i);
          }
        
          return dec;
    }

    render(){
        return(
            <View>
               <TextInput
               placeholder="Binario"
               onChangeText={this.setNumberDecimal}
               maxLength={8}
               />
    
                <Text>{this.state.numero}</Text>

            </View>
            );
    }
    
}