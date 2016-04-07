/**
 * https://github.com/facebook/react-native
 */
'use strict';

import Slider from '../common/Slider';
import HomeMenu from './HomeMenu';
import React, {
    Component,
    View,
} from 'react-native';

export default class Home extends Component{

    render() {
        return (
            <View>
                <Slider />
                <HomeMenu />
            </View>
        );
    }
}

