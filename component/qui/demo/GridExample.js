/**
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import Subheader from '../view/Subheader';
import Grid from '../view/Grid';
import Col from '../view/Col';

export default class GridExample extends Component{

    render() {
    	return(

        <Grid style={{paddingTop:40,width: 200}}>
            <Col span={50}>
                <Text>box-1</Text>
            </Col>
            <Col span={50}>
                <Text>box-2</Text>
            </Col>
            <Col span={33.333}>
                <Text>box-1</Text>
            </Col>
            <Col span={33.333}>
                <Text>box-2</Text>
            </Col>
            <Col span={33.333}>
                <Text>box-1</Text>
            </Col>
            <Col span={33.333}>
                <Text>box-2</Text>
            </Col>

        </Grid>

		);
    }
}
