var React = require('react');

var {Text, View, Button, AppRegistry } = require("react-native");

const geraNumeroAleatorio = () => {
    var numero_aleatorio = Math.random();
    numero_aleatorio = Math.floor(numero_aleatorio * 10);
    alert(numero_aleatorio);
}

const geraNumeroAleatorio = () => {
    var numero_aleatorio = Math.random();
    numero_aleatorio = Math.floor(numero_aleatorio * 10);
    alert(numero_aleatorio);
}

const App = () => {
    return ( 
        <View>
            <Text> Hello World! </Text>
            <Text> Eu sou um gerador de números! </Text>
            <Button title="Clique em mim para gerar um número aleatório!" onPress={geraNumeroAleatorio}/>
        </View>
    );
}

AppRegistry.registerComponent('app1', () =>  App);