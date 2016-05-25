'use strict';

import React, {
    Component,
    View,
    Text,
    StyleSheet,
    Platform,
    ScrollView,
    PixelRatio
} from 'react-native';

import Avatar from '../view/Avatar';
import Icon from '../view/Icon';
import Button from '../view/Button';

export default class ButtonExample extends Component{
    longPress(){
        alert("你按了好久啊");
    }
    onPress(){
        alert("别碰我！");
    }
    onPressOut(){
        alert("你还是离开了！");
    }
    // 构造
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button value="确定" />
                    <Button value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button type="auxiliary" value="确定">
                        <Icon childpos="before" name="search" />
                        <Icon childpos="beforePress" name="close" />
                    </Button>
                    <Button type="auxiliary" value="确定" disabled={true}>
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button type="primary" value="确定">
                        <Icon childpos="after" name="arrow" />
                    </Button>
                    <Button type="primary" value="确定" disabled={true}>
                    </Button>
                </View>
                <View style={styles.row}>
                    <Button type="danger" value="确定"></Button>
                    <Button type="danger" value="确定" disabled={true}></Button>
                </View>
                <View style={styles.row}>
                    <Button value="下载中">
                        <View childpos="before" style={{
                            backgroundColor: '#38c7f3',
                            position: 'absolute',
                            width: 60,
                            height: 30,
                            left: -1/PixelRatio.get(),
                            top: -1/PixelRatio.get(),
                            borderTopLeftRadius: 2,
                            borderBottomLeftRadius: 2
                        }}></View>
                    </Button>
                    <Button value="下载中" disabled={true}>
                    </Button>
                </View>
                <View style={[styles.row, {backgroundColor:'#333',paddingTop:10,paddingBottom:10}]}>
                    <Button type="highlight" value="确定" />
                    <Button type="highlight" value="确定" disabled={true}></Button>
                </View>
                <View>
                    <Button style={styles.list} type="default" size="large" value="长按试试" onLongPress={ this.longPress } >
                        <Avatar childpos="before" src={'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg'} size={24}></Avatar>
                        <Icon childpos="beforePress" name="fresh" />
                    </Button>
                    <Button style={styles.list} type="default" size="large" value="已领取" disabled={true} />
                    <Button style={styles.list} type="primary" size="large" value="别碰我" onPress={ this.onPress } />
                    <Button style={styles.list} type="primary" size="large" value="确定" disabled={true} />
                    <Button style={styles.list} type="danger" size="large" value="按下后不准离开" onPressOut={ this.onPressOut } />
                    <Button style={styles.list} type="danger" size="large" value="确定" disabled={true} />
                    <Button 
                        style={[styles.list, {backgroundColor: '#333',borderColor:'#333'}]} 
                        textStyle={{color: 'rgba(255,255,255,.5)'}} 
                        activeStyle={{backgroundColor: '#222',borderColor:'#222'}} 
                        activeTextStyle={{color: 'rgba(255,255,255,.3)'}} 
                        size="large" 
                        value="自定义"
                        >
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle" size="large" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle" size="large" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle-o" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle-o" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
                <View style={[styles.row]}>
                    <Button type="circle-o" size="large" value="">
                        <Icon name="fresh" />
                    </Button>
                    <Button type="circle-o" size="large" value="" disabled={true}>
                        <Icon name="fresh" />
                    </Button>
                </View>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: (Platform.OS === 'ios') ? 30 : 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  row: {
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginTop: 5,
    marginBottom: 5,
  }
});