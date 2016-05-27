'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import styles from '../style/Grid.css';
import Grid from './Grid';
import Col from './Col';

export default class GridView extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        spacing: 0,
        width: Dimensions.get('window').width,
        imgRatio: 1,
    };
    static propTypes = {
        style: View.PropTypes.style,
        elementStyles: PropTypes.object,
        elements: PropTypes.object,
    };
    state = {};
	render = () => {
        const {
            style,
            elementStyles,
            width,
            elements,
            columns,
            spacing,
            imgType,
            imgRatio,
        } = this.props;
        let imgHeight;
        if(imgUri){
            let colWidth = (width + spacing) * span/100;
            let ratio = imgRatio;
            if(imgType&&imgType=='square'){
                ratio = 1;
            }else if (imgType&&imgType=='vertical') {
                ratio = 7/10;
            }else if (imgType&&imgType=='horizontal') {
                ratio = 10/7;
            }
            imgHeight = colWidth * ratio;
        }
        return (
            <Grid style={[{marginRight: -spacing}],style}>
            {elements.map((element) =>
                <Col style={[styles.col,{ flex: 100/columns },spacing && {marginRight: spacing}, elementStyles && elementStyles.col]}>
                    {element.imgUri && <Image style={[styles.img, {height: imgHeight}, elementStyles && elementStyles.img]} source = {{uri: element.imgUri}}/>}
                    {element.title && <Text style={styles.title, elementStyles && elementStyles.title}>{element.title}</Text> }
                    {element.subText &&  <Text style={styles.subText, elementStyles && elementStyles.subText}>{element.subText}</Text> }
                    {element.children && {element.children}}
                </Col>
            )}
            </Grid>
        )
	}
}
