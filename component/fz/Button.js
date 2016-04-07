import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import TYPO from './Typo.css';
export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        disabled: false
    };
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        onPress: PropTypes.func
    };
    state = {};
    render = () => {
        const {
            value,
            disabled,
            onPress
            } = this.props;
        return (
            <TouchableOpacity onPress={!disabled ? onPress : undefined} style={styles.button}>
                <Text style={[TYPO.base]}>{value}</Text>
            </TouchableOpacity>
        );
        
    }
}
const styles = {
    button: {
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 16,
        paddingRight: 16,
        margin: 4,
        borderRadius: 2,
    }
};