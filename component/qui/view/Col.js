
'use strict';
import React, {
    Component,
    View,
    Text,
    StyleSheet,
    PropTypes,
} from 'react-native';

import styles from '../style/Grid.css';

export default class Col extends Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
    };
    static propTypes = {
        style: View.propTypes.style,
        span: PropTypes.number,
    };
    state = {};
	render = () => {
        const {
            style,
            span,
        } = this.props;
		return (
			<View style={[styles.col, { flex: span }, style]}>
                {this.props.children}
            </View>
		)
	}
}
