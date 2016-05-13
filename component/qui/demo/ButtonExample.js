'use strict';

import React, {
    Component,
    View,
    StyleSheet,
    Platform,
} from 'react-native';

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
            <View style={styles.container}>
                <View style={styles.row}>
                    <Button theme="default" value="确定" />
                    <Button theme="default" value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button theme="primary" value="确定" />
                    <Button theme="primary" value="确定" disabled={true} />
                </View>
                <View style={styles.row}>
                    <Button theme="danger" value="确定" />
                    <Button theme="danger" value="确定" disabled={true} />
                </View>
                <View>
                    <Button style={styles.list} theme="default" size="large" value="长按试试" onLongPress={ this.longPress } />
                    <Button style={styles.list} theme="default" size="large" value="已领取" disabled={true} />
                    <Button style={styles.list} theme="primary" size="large" value="别碰我" onPress={ this.onPress } />
                    <Button style={styles.list} theme="primary" size="large" value="确定" disabled={true} />
                    <Button style={styles.list} theme="danger" size="large" value="按下后不准离开" onPressOut={ this.onPressOut } />
                    <Button style={styles.list} theme="danger" size="large" value="确定" disabled={true} />
                    <Button 
                        style={[styles.list, {backgroundColor: '#333',borderColor:'#333'}]} 
                        styleText={{color: 'rgba(255,255,255,.5)'}} 
                        size="large" 
                        value="自定义"
                        activeOpacity= {.7}
                        />
                </View>
            </View>
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