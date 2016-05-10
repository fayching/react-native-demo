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

import Subheader from '../view/Subheader';
import Grid from '../view/Grid';

export default class GridExample extends Component{

    render() {
    	return( 
				<View>
                    <Subheader text="网格"/>
                    <View style={{flexDirection: 'row'}}>
                        <Grid title="标题" text="内容" imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png" imgHeight={100}/>
                        <Grid title="标题2" text="内容2" imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"  imgHeight={100}/>
                        <Grid title="标题3" text="内容3" imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"  imgHeight={100}/>
                    </View>
			        
			      </View>
			
		);
    }
}


