/**
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
    Component,
    View,
    ListView,
    Text,
    StyleSheet,
    PixelRatio,
    Dimensions,
} from 'react-native';

import Data from './gridDataSource';
import Subheader from '../view/Subheader';
import Grid from '../view/Grid';
import Col from '../view/Col';
import LayoutStyles from '../style/Layout.css';
import GridCell from '../view/GridCell';


export default class GridExample extends Component {
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
    componentDidMount() {
        this.appInit();
    }

    appInit(){
        var that = this;
        that.setState({
            dataSource: that.state.dataSource.cloneWithRows(Data)
        });
    }


    _renderRow(rowData: string, sectionID: number, rowID: string) {
        let width = Dimensions.get('window').width/3;
        return (

            <GridCell
                imgUri={rowData.imgUri}
                imgType ={'vertical'}
                width = {width - 4}
                spacing = {(rowID+1)%3 == 0 ?  0 :   4}

                primaryText={rowData.primaryText}
                primaryTextLines={1}
                subText={rowData.subText}
                subTextLines={2}
                rowID={rowID}
                total={this.state.dataSource._cachedRowCount}
            />
        );
    }


    render = () => {
        return (
            <ListView contentContainerStyle={LayoutStyles.flexWrap}
                dataSource={this.state.dataSource}
                renderRow={this._renderRow}
            />
        )
    }
}
