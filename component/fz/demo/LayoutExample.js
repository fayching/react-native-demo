/**
 * https://github.com/facebook/react-native
 */
'use strict';


import React, {
    Component,
    View,
    Text,
    StyleSheet,
} from 'react-native';
import styles from '../style/Layout.css';
import Subheader from '../view/Subheader';
//定义一个默认半径为30，颜色为#527fe4的圆组件
var Circle = React.createClass({
  render : function(){
    var size = this.props.size || 20;
    var color = this.props.color || '#527fe4';
    return <View style={{backgroundColor:color,borderRadius:size/2,height:size,width:size,margin:1}}/>
  },
});



//定义一个数组放置5个圆
var children = [<Circle/>,<Circle/>,<Circle/>,<Circle/>];

export default class LayoutExample extends Component{

    render() {
    	return( 
				<View  style={{marginTop: 40}}>
                    <Subheader text="leftTop"/>
                    <View style={[styles.leftTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>centerTop</Text>
                    <View style={[styles.centerTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightTop</Text>
                    <View style={[styles.rightTop,demostyle.container]}>
                      {children}
                    </View>
                    <Text>leftCenter</Text>
                    <View style={[styles.leftCenter,demostyle.container]}>
                      {children}
                    </View>
                    <Text>center</Text>
                    <View style={[styles.center,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightCenter</Text>
                    <View style={[styles.rightCenter,demostyle.container]}>
                      {children}
                    </View>
                    <Text>leftBottom</Text>
                    <View style={[styles.leftBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>centerBottom</Text>
                    <View style={[styles.centerBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>rightBottom</Text>
                    <View style={[styles.rightBottom,demostyle.container]}>
                      {children}
                    </View>
                    <Text>spaceBetween</Text>
                    <View style={[styles.spaceBetween,demostyle.container]}>
                      {children}
                    </View>
                    <Text>spaceAround</Text>
                    <View style={[styles.spaceAround,demostyle.container]}>
                      {children}
                    </View>
                    <Text>flexWrap: wrap</Text>
                    <View style={[styles.flexWrap,demostyle.container]}>
                      {children}{children}{children}{children}
                    </View>
                    <Text>flexWrap: nowrap</Text>
                    <View style={[styles.flexNoWrap,demostyle.container]}>
                      {children}{children}{children}{children}
                    </View>
					<Text>alignSelf</Text>
					<View style={{flexDirection:'row',height:50,borderColor: 'red',borderWidth: 1,justifyContent: 'space-between'}}>
    			        <View style={{alignSelf:'flex-start'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-end'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'center'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-end'}}>
    				        <Circle/>
    				      </View>
    				      <View style={{alignSelf:'flex-start'}}>
    				        <Circle/>
    				      </View>
				      </View>
			        
			      </View>
			
		);
    }
}
const demostyle = StyleSheet.create({
    container: {
        height: 50,
    }
});

