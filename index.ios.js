/**
 * Tmall 3c APP
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    View,
} from 'react-native';
import Home from './component/home/Home';


export default class App extends Component{

    render() {

        return(
            <Home />
        );
      
    }
}


AppRegistry.registerComponent('read', () => App);
