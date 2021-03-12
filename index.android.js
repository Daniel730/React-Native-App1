var React = require('react');
var Text = require('react-native').Text;
var AppRegistry = require("react-native").AppRegistry;

const App = () => {
    return ( 
        <Text> Hello World! </Text>
    );
}

AppRegistry.registerComponent('app1', () => {return App});