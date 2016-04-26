/**
 * https://github.com/facebook/react-native
 */
'use strict';


import React, {
    Component,
    View,
    Text,
} from 'react-native';
//定义一个默认半径为30，颜色为#527fe4的圆组件
var Circle = React.createClass({
  render : function(){
    var size = this.props.size || 30;
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
				      <Text>center</Text>
			        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
			          {children}{children}{children}{children}
			        </View>
			        <Text>flexWrap: wrap</Text>
			        <View style={{flexDirection:'row', flexWrap:'wrap'}}>
			          {children}{children}{children}{children}
			        </View>
			        <Text>flexWrap: nowrap</Text>
			        <View style={{flexDirection:'row', flexWrap:'nowrap'}}>
			          {children}{children}{children}{children}
			        </View>
			      </View>
			
		);
    }
}

