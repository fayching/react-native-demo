'use strict';

// var TimerMixin = require('react-timer-mixin');
import Dimensions from 'Dimensions';
import styles from '../../style/common/Slider.css';

import React, {
    Component,
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

//获取可视窗口的宽高
var { width, height, scale } = Dimensions.get('window');

var itemHeight = 250,
    itemHeight = width * 0.666;

var MockData = [{
  img : 'http://wfqqreader.3g.qq.com/cover/topic/newad_64059506_1450681562459.jpg',
  text : '手机圈儿',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://wfqqreader.3g.qq.com/cover/topic/newad_63297698_1447728375687.jpg',
  text : '发现好玩',
  link : 'http://3c.m.tmall.com'                      
},{
  img : 'http://wfqqreader.3g.qq.com/cover/topic/newad_63296871_1447641754245.jpg',
  text : '我爱我家',
  link : 'http://3c.m.tmall.com'                      
}];


export default class Slider extends Component{

    // mixins: [TimerMixin],


   
    static defaultProps = {
        width: width,
        indicatorColor: 'rgba(0,0,0,0.3)',
        activeIndicatorColor: 'rgba(255,255,255,1)',
        timer : 3000,
        length : 3
    }
    
   // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            activePage: 0
        };
    }

    _onScrollBegin(event) {
    }

    _onScrollEnd() {

    }
    //渲染单个图片
    renderItems(data) {
        return data.map(function(item,i){
            return(
                <TouchableOpacity key={i} >
                    <Image key={i} style={{width: width,height:itemHeight}} source={{uri: item.img}}/>
                </TouchableOpacity>
            );
        })
    }

    render() {
        var data = MockData;
        return (
            <View style={styles.container}>
                <ScrollView
                    ref='scrollView'
                    contentContainerStyle={styles.container}
                    automaticallyAdjustContentInsets={false}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.onAnimationEnd.bind(this)}
                    // onScrollBeginDrag={this._onScrollBegin}
                >
                    {this.renderItems(data)}
                </ScrollView>
                {this.renderPageIndicator()}
            </View>
        );
    }

    renderPageIndicator() {
        var indicators = [],
            style;

        for (var i=0; i< this.props.length; i++) {
            style = i === this.state.activePage ? styles.activeDot : styles.dot;
            indicators.push(<Text key={i} style = {style}></Text>)
        }

        return (
            <View style={styles.pageIndicator}>
            {indicators}
            </View>
        )
    }

    onAnimationEnd(e) {
        var activePage = e.nativeEvent.contentOffset.x / this.props.width;
        this.setState({
            activePage: activePage
        });
    }
}
