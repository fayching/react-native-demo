import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    Image,
} from 'react-native';
import styles from '../style/Grid.css';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
    };
    static propTypes = {
        imgHeight: PropTypes.number,
        title: PropTypes.string,
        text: PropTypes.string,
        imgUri: PropTypes.string,
    };
    state = {};
    render = () => {
        const {
            title,
            text,
            imgUri,
            imgHeight,
            } = this.props;
        return (
            <View style={styles.grid}>
                {imgUri && <Image style={[styles.img,{height:imgHeight}]} source = {{uri: imgUri}}/>}
                {title && <Text style={styles.title}>{title}</Text> }
                {text &&  <Text style={styles.text}>{text}</Text> }
            </View>
        );
        
    }
}