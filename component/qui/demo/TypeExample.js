import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Platform,
    Text
} from 'react-native';
import Type from '../style/Typo.css';

export default class TypeExample extends Component {
    constructor(props) {
        super(props);
        // Operations usually carried out in componentWillMount go here
    }

    static defaultProps = {};
    static propTypes = {};
    state = {};

    render = () => {
        return (
            <View style={styles.content}>
                <Text style={[Type.default]}>默认字体</Text>
                <Text style={[Type.fontSizeH1]}>标题h1</Text>
                <Text style={[Type.fontSizeH2]}>栏目h2</Text>
                <Text style={[Type.fontSizeH3]}>导航，正文段落h3</Text>
                <Text style={[Type.fontSizeH4]}>人名歌名标题等h4</Text>
                <Text style={[Type.fontSizeH5]}>副内文h5</Text>
                <Text style={[Type.fontSizeH6]}>辅助文字h6</Text>
                <Text style={[Type.uiTxtDefault]}>主要内容色</Text>
                <Text style={[Type.uiTxtWhite]}>主要内容反色</Text>
                <Text style={[Type.uiTxtInfo]}>辅助次要内容色</Text>
                <Text style={[Type.uiTxtMuted]}>时间，输入框，不可点击状态文本色</Text>
                <Text style={[Type.uiTxtWarning]}>警示，会员红名，搜索热词</Text>
                <Text style={[Type.uiTxtHighlight]}>关键词高亮</Text>
                <Text style={[Type.a]}>链接颜色</Text>
                <Text style={[Type.uiTxtFeeds]}>feeds链接</Text>
                <Text style={[Type.uiTxtJustifyOne]}>两端对齐：一行文本</Text>
                <Text style={[Type.uiTxtJustify]}>两端对齐：在首个《进击的巨人》预热视频中只是描述了一个巨人恰好拿起一人准备放进嘴巴里面，而另个场景则是超大型巨人附着浓重的烟雾将巨手拍下来。将于今年8月1日上映。</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    content: {
        padding: 16,
    }
});
