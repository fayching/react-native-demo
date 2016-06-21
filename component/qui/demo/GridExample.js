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
import GridView from '../view/GridView';

var Data = [

    [{
        'primaryText': '这是标题',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png",
        'imgType': "square",
    },
    {
        'primaryText': '这是标题2',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe2.png",
        'imgType': "square",
    }],
    [{
        'primaryText': '这是标题',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png",
        'imgType': "square",
    },
    {
        'primaryText': '这是标题2',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe2.png",
        'imgType': "square",
    }],
    [{
        'primaryText': '这是标题',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png",
        'imgType': "square",
    },
    {
        'primaryText': '这是标题2',
        'subText': '这是内容这是内容这是内容这是内容这是内容这是内容这是内容',
        'imgUri': "http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe2.png",
        'imgType': "square",
    }],

];

export default class GridExample extends Component{


    render() {

    	return(
            <View>
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
                <GridView columns={2}  imgType={"square"} data={Data}>
                </GridView>
            </View>
		);
    }
}
