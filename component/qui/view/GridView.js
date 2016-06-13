'use strict';
import React, {
    Component,
    PropTypes,
} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
} from 'react-native';

import styles from '../style/Grid.css';
import Grid from './Grid';
import Col from './Col';

export default class GridView extends React.Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        spacing: 0,
        width: Dimensions.get('window').width,
    };
    static propTypes = {
        elementStyles: PropTypes.object,
    };
    state = {};
	render = () => {
        const {
            style,
            elementStyles,
            width,
            columns,
            spacing,
        } = this.props;

        let colWidth = columns?(width + spacing)/columns;

		let _children = Array.isArray(this.props.children)?this.props.children:[this.props.children];
        let children = _children.map((o, i)=>{
            return React.cloneElement(o,{ style: {height: 100}, key: i });
        });

        return (
            <Grid>
                { this.props.children }
            </Grid>
        )
	}
}
class Item extends React.Component{
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        imgRatio: 1,
        primaryTextLines: 1,
        subTextLines: 1,
    };
    static propTypes = {
        elementStyles: PropTypes.object,
        width: PropTypes.string,
        imgUri: PropTypes.string,
        primaryText: PropTypes.string,
        primaryTextLines: PropTypes.number,
        subText: PropTypes.string,
        subTextLines: PropTypes.number,
        columns: PropTypes.number,
        spacing: PropTypes.string,
        imgType: PropTypes.oneOf(['square','vertical','horizontal']),
        imgRatio: PropTypes.number,
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
        if(imgType&&imgType=='square'){
            ratio = 1;
        }else if (imgType&&imgType=='vertical') {
            ratio = 7/10;
        }else if (imgType&&imgType=='horizontal') {
            ratio = 10/7;
        }
        imgHeight = width * ratio;
        return (
            <Col>
                {imgUri && <Image style={[styles.img,{width: width}, {height: imgHeight}, elementStyles && elementStyles.img]} source = {{uri: imgUri}}/>}
                {primaryText && <Text style={styles.primaryText, elementStyles && elementStyles.primaryText} numberOfLines={primaryTextLines}>{primaryText}</Text> }
                {subText &&  <Text style={styles.subText, elementStyles && elementStyles.subText} numberOfLines={subTextLines}>{subText}</Text> }
                {this.props.children}
            </Col>
        )
    }
}
GridView.Item = Item;
