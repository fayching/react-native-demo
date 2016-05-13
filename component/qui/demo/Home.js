/**
 * https://github.com/facebook/react-native
 */
'use strict';
var {
  
  ScrollView,
} = React

import Slider from '../common/Slider';
import HomeMenu from './HomeMenu';
import ButtonExample from '../../fz/demo/ButtonExample';
import TypeExample from '../../fz/demo/TypeExample';
import ListExample from '../../fz/demo/ListExample';
import LayoutExample from '../../fz/demo/LayoutExample';

import React, {
    Component,
    View,
} from 'react-native';

export default class Home extends Component{

    render() {
        return (
        	
            <ScrollView>
                <ButtonExample />
                <TypeExample />
                <ListExample />
                <LayoutExample />
            </ScrollView>
        );
    }
}

