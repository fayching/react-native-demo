'use strict';

import React, {
    Component,
    View,
    Image,
    StyleSheet,
    Text,
} from 'react-native';

import {TYPO,Button} from '../../fz';
import styles from '../../style/home/HomeMenu.css';


var MockData = [{
  img : 'http://qqread.qq.com/book/public/pic/index/icon_category.png',
  text : '分类',
  link : ''                      
},{
  img : 'http://qqread.qq.com/book/public/pic/index/icon_board.png',
  text : '排行',
  link : ''                      
},{
  img : 'http://qqread.qq.com/book/public/pic/index/icon_cheap.png',
  text : '超值',
  link : ''                      
},{
  img : 'http://qqread.qq.com/book/public/pic/index/icon_free.png',
  text : '免费',
  link : ''                      
}];
export default class HomeMenu extends Component{
   // 构造
    
    render() {
        console.log(Button)
        return (
            
            <View style={styles.container}>
                {this.renderItems(MockData)}
                <Button value="test"/>
            </View>
            
        )
    }
    //渲染单个图片
    renderItems(data) {
        return data.map(function(item,i){
            return(
                <View style={styles.listItem} key={i}>
                    <Image
                    source={{uri: item.img}}
                    style={styles.icon}
                    />
                    <Text style={[TYPO.base,styles.text]}>{item.text}</Text>
                </View>
            );
        })
    }
}

