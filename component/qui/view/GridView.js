'use strict';
import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    StyleSheet,
    Dimensions,
} from 'react-native';

import styles from '../style/Grid.css';
import Grid from './Grid';
import Col from './Col';
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
export default class GridView extends React.Component {

    constructor(props) {
        super(props);
        console.log(Data);
        this._renderRow = this._renderRow.bind(this);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            })
        };


    }
    static defaultProps = {
        spacing: 0,
        width: Dimensions.get('window').width,
    };
    static propTypes = {
        elementStyles: PropTypes.object,
    };
    state = {
    };
    _renderRow(rowData: string, rowID: string) {

        return (
            <View rowID={rowID}>
            {
                rowData.map((item, index) =>{
                    return (
                        <Item {...item} key={index}>
                        </Item>
                    )
                })}
            }

            </View>

        );
    }
    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }
}

class Item extends React.Component{
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        imgType: 'square',
        primaryTextLines: 1,
        subTextLines: 1,
    };
    static propTypes = {
        elementStyles: PropTypes.object,
        width: PropTypes.string,
        spacing: PropTypes.string,
        imgType: PropTypes.oneOf(['square','vertical','horizontal']),
        imgRatio: PropTypes.number,
        imgUri: PropTypes.string,
        primaryText: PropTypes.string,
        primaryTextLines: PropTypes.number,
        subText: PropTypes.string,
        subTextLines: PropTypes.number,

    };
    render = () => {
        const {
            style,
            width,
            imgUri,
            primaryText,
            primaryTextLines,
            subText,
            subTextLines,
            spacing,
            imgType,
            imgRatio,
            elementStyles,
        } = this.props;
        let imgHeight;
        let ratio = imgRatio;
        if(imgType=='square'){
            ratio = 1;
        }else if (imgType&&imgType=='vertical') {
            ratio = 7/10;
        }else if (imgType&&imgType=='horizontal') {
            ratio = 10/7;
        }
        imgHeight = width * ratio;
        return (
            <View>
                {imgUri && <Image style={[styles.img,{width: width}, {height: imgHeight}, elementStyles && elementStyles.img]} source = {{uri: imgUri}}/>}
                {primaryText && <Text style={styles.primaryText, elementStyles && elementStyles.primaryText} numberOfLines={primaryTextLines}>{primaryText}</Text> }
                {subText &&  <Text style={styles.subText, elementStyles && elementStyles.subText} numberOfLines={subTextLines}>{subText}</Text> }
                {this.props.children}
            </View>
        )
    }
}
