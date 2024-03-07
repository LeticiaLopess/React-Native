import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Platform, TouchableOpacityProps } from 'react-native';

interface ButtonProps extends TouchableOpacityProps { // que coisa mais linda mano, meu Deus
    title: string,
}
/* aqui, eu criando um componente que é TouchableOpacity, eu posso criar uma interface que além de herdar as propriedades de TouchableOpacityProps, eu posso incluir as minhas, e, após isso, seto-as no parâmetro da função */

/* TouchableOpacityProps é uma interface em React Native que define as propriedades que podem ser passadas para um componente TouchableOpacity. O TouchableOpacity é um componente que pode ser pressionado como um botão, fornecendo feedback visual ao usuário. Essas propriedades incluem coisas como onPress, disabled, style, entre outras. */


export function Button({ title, ...rest }: ButtonProps) { // onPress é uma propriedade de TouchableOpacity | ...rest pega todas as propriedades de um TouchableOpacity, passando o {...rest} ali embaixo, você pode acessar qualquer propriedade dele quando for usar esse componente em algum lugar. Então, lá, em home, eu posso usar o onPress e o activeOpacity pois são propriedades capturadas por rest.
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#a370f7',
        padding: Platform.OS === 'ios' ? 15 : 10,
        borderRadius: 7,
        marginTop: 20,
        alignItems: 'center'
    },
    buttonText: {
        color: '#fff'
    },
});

