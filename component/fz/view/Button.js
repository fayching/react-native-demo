import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import TYPO from '../style/Typo.css';
import styles from '../style/Button.css';
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