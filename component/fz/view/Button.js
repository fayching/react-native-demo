import React, {
    Component,
    StyleSheet,
    PropTypes,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { THEME_NAME, SITE_NAME, STYLES } from '../style/Button.css';
export default class Button extends React.Component {
    /**
     * 使用案例：
     * <Button theme="primary" size="large" value="确定" onPress={func} />
     * 组件参数说明：
     * @param props.value ------- 按钮文本
     * @param disabled={true} ------- 为true时，禁止点击状态
     * @param props.theme ------- 按钮主题样式，三个可选参数：default(默认)、primary、danger
     * @param props.size ------- 按钮大小，两个可选参数：small(默认)、large
     * @param props.style ------- 自定义按钮样式
     * @param props.styleText ------- 自定义按钮文本样式
     * @param props.activeOpacity ------- 自定义按压态按钮的透明度（一般只有自定义的按钮才需要用到）
     * @param props.onPress ------- 按钮触摸回调执行函数
     * @param props.onPressIn ------- 按钮触碰回调执行函数
     * @param props.onPressOut ------- 按钮触摸离开时回调执行函数
     * @param props.onLongPress ------- 按钮长按回调执行函数
     */
    constructor(props) {
        super(props);
    }
    static defaultProps = {
        disabled: false,
        theme: 'default',
        size: 'small',
        activeOpacity: 1,
    };
    static propTypes = {
        value: PropTypes.string.isRequired,
        disabled: PropTypes.bool,
        theme: PropTypes.oneOf(THEME_NAME),
        size: PropTypes.oneOf(SITE_NAME),
        style: Text.propTypes.style,
        styleText: Text.propTypes.style,
        activeOpacity: PropTypes.number,
        onPress: PropTypes.func,
        onPressIn: PropTypes.func,
        onPressOut: PropTypes.func,
        onLongPress: PropTypes.func,
    };
    state = { buttonState: 'normal' };

    render = () => {
        const {
            value,
            disabled,
            theme,
            size,
            style,
            styleText,
            activeOpacity,
            onPress,
            onPressIn,
            onPressOut,
            onLongPress,
        } = this.props;
        const {
            buttonState
            } = this.state;

        _onPress = (callback) => {
            if (this.props.onPress){
                this.props.onPress();
            }
        }
        _onPressIn = () => {
            this.setState({ buttonState: 'active' })
            if (this.props.onPressIn){
                this.props.onPressIn();
            }
        }
        _onPressOut = () => {
            this.setState({ buttonState: 'normal' })
            if (this.props.onPressOut){
                this.props.onPressOut();
            }
        }
        _onLongPress = () => {
            if (this.props.onLongPress){
                this.props.onLongPress();
            }
        }

        // style
        let type = disabled ? 'disabled' : this.state.buttonState;
        this.buttonStyleMap = STYLES;
        let themeStyle = this.buttonStyleMap[theme+'Theme'][type];
        let themeStyleText = this.buttonStyleMap[theme+'ThemeText'][type];

        let sizeStyle = this.buttonStyleMap[size+'Size'];
        let sizeStyleText = this.buttonStyleMap[size+'SizeText'];

        // touch
        let touchableProps = {
          activeOpacity: Number(this.props.activeOpacity)
        }
        if (!this.props.disabled){
            touchableProps.onPress = _onPress;
            touchableProps.onPressIn = _onPressIn;
            touchableProps.onPressOut = _onPressOut;
            touchableProps.onLongPress = _onLongPress;
        }
        
        return (
            <TouchableOpacity
                {...touchableProps}
                style={[STYLES.default,themeStyle,sizeStyle,style]}
            >
                <Text
                    style={[STYLES.defaultText,themeStyleText,sizeStyleText,styleText]} 
                >{value}</Text>
            </TouchableOpacity>
        )
    }
}