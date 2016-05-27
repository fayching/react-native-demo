import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    Image,
} from 'react-native';
import styles from '../style/GridCell.css';

export default class GridCell extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
      imgType: 'square'
    };
    static propTypes = {
        title: PropTypes.string,
        subText: PropTypes.string,
        rows: PropTypes.number,
        imgType: PropTypes.oneOf(['square','vertical','horizontal']),
        imgRatio: PropTypes.string,
        imgUri: PropTypes.string,
        childrenStyles: PropTypes.object,
    };
    state = {};
    render = () => {
        const {
            title,
            subText,
            imgUri,
            imgType,
            imgRatio,
            gridWidth,
            childrenStyles,
            } = this.props;

    	  gridWidth = gridWidth ? gridWidth : Dimensions.get('window').width;
          let imgWidth = gridWidth /rows;
          if(imgType&&imgType='square'){
            imgRatio = 1;
          }else if (imgType&&imgType='vertical') {
              imgRatio = 7/10;
          }else if (imgType&&imgType='horizontal') {
              imgRatio = 10/7;
          }
          let imgHeight = imgWidth * imgRatio;
        return (
            <View style={styles.gridcell}>
                {imgUri && <Image style={[styles.img,{height:imgHeight},childrenStyles.img]} source = {{uri: imgUri}}/>}
                {title && <Text style={styles.title,childrenStyles.title}>{title}</Text> }
                {subText &&  <Text style={styles.subText,childrenStyles.subText}>{subText}</Text> }
                {this.props.children}
            </View>
        );

    }
}
