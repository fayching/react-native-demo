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
import Grid from '../view/GridCell';

export default class GridExample extends Component{

    render() {
    	return(
				<View>
                    <Subheader text="网格"/>
                    <View style={{flexDirection: 'row'}}>
                        <GridCell title="标题" text="内容"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                        <GridCell title="标题2" text="内容2"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                        <GridCell title="标题3" text="内容3"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <GridCell title="标题" text="内容"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                        <GridCell title="标题2" text="内容2"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                        <GridCell title="标题3" text="内容3"
                        imgUri="http://qvas.xyz/vipstyle/mobile/client/cartoon/v2/pic/tribe/tribe1.png"
                        imgType="vertical" columns="3"/>
                    </View>
			      </View>

		);
    }
}
