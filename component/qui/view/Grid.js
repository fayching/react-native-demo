import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    Image,
    Dimensions,
} from 'react-native';
import styles from '../style/Grid.css';

export default class Grid extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
    };
    static propTypes = {
        primaryText: PropTypes.string,
        subText: PropTypes.string,
        rows: PropTypes.number,
        imgRatio: PropTypes.string,
        imgType: PropTypes.string,
        imgUri: PropTypes.string,
    };
    state = {};
    render = () => {
        const {
            primaryText,
            subText,
            imgUri,
            imgRatio,
            rows,
            imgType,
            } = this.props;
        let imgWidth = Dimensions.get('window').width/rows;
        let imgHeight = imgWidth * imgRatio;

        return (
            <View style={styles.grid}>
                {imgUri && <Image style={[styles.img,{height:imgHeight}]} source = {{uri: imgUri}}/>}
                {primaryText && <Text style={styles.primaryText}>{primaryText}</Text> }
                {subText &&  <Text style={styles.subText}>{subText}</Text> }
            </View>
        );
        
    }
}