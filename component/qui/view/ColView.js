import React from 'react-native';

const {
  StyleSheet,
  View,
  Component,
  Image,
  Text,
  PropTypes,
  Dimensions,
} = React;
import styles from '../style/Grid.css';

export default class Col extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
    };
    static propTypes = {
        elementStyle: PropTypes.object,
        style: View.PropTypes.style,
    };
    state = {};
	render = () => {
        const {
            style,
            elementStyle,
            title,
            subText,
            imgUri,
            imgType,
            imgRatio,
            gridWidth,
            spacing,
            span,
            } = this.props;
            let imgHeight;
            if(imgUri){
                let colWidth = gridWidth ? (gridWidth + spacing) * span/100 : (Dimensions.get('window').width + spacing ) * span/100;
                let ratio = imgRatio ? imgRatio : 1;
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
			<View style={[styles.col, { flex: span },spacing && {marginRight: spacing}, this.props.style]}>
                {imgUri && <Image style={[styles.img, {height: imgHeight}, elementStyle && elementStyle.img]} source = {{uri: imgUri}}/>}
                {title && <Text style={styles.title, elementStyle && elementStyle.title}>{title}</Text> }
                {subText &&  <Text style={styles.subText, elementStyle && elementStyle.subText}>{subText}</Text> }
                {this.props.children}
            </View>
		)
	}
}
