/**
 *  APP
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    AppRegistry,
    Component,
    View,
} from 'react-native';
// import Home from './component/view/home/Home';
import LayoutExample from './component/fz/demo/LayoutExample';

export default class App extends Component{

    render() {

        return(
            <LayoutExample />
        );
      
    }
}


AppRegistry.registerComponent('read', () => App);
