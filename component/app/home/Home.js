
'use strict';

import ButtonExample from '../../qui/demo/ButtonExample';
import TypeExample from '../../qui/demo/TypeExample';
import ListExample from '../../qui/demo/ListExample';
import LayoutExample from '../../qui/demo/LayoutExample';
// import IconExample from '../../qui/demo/IconExample';
// import GridExample from '../../qui/demo/GridExample';
import ListViewGridExample from '../../qui/demo/ListViewGridExample';

import React, {
    Component,
    View,
    Text,
    ScrollView,
    NavigatorIOS,
    ListView,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

import Icon from '../../qui/view/Icon';

const exampleList = [
    {
        "com": ButtonExample,
        "title": "Button"
    },
    {
        "com": ListExample,
        "title": "List"
    },
    {
        "com": LayoutExample,
        "title": "Layout"
    },
    // {
    //     "com": IconExample,
    //     "title": "Icon"
    // },
    // {
    //     "com": GridExample,
    //     "title": "Grid"
    // },
    {
        "com": ListViewGridExample,
        "title": "Grid"
    },
];

class HomeList extends Component {

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(exampleList)
        };
        this._renderRow = this._renderRow.bind(this);
        // 如果不在这里加则需要在用的地方使用bind
        // <ListView
        //     dataSource= {this.state.dataSource}
        //     renderRow= {this._renderRow.bind(this)}
        // />

    };

    render() {
        return (
            <ListView
                dataSource= {this.state.dataSource}
                renderRow= {this._renderRow}
            />
        )
    };

    _renderRow(rowData: object, sectionID: number, rowID: number) {
        console.log(this)
        return (
            <TouchableHighlight onPress={ () => this._handlePress(rowID) }>
                <View>
                    <View style={styles.row}>
                        <Text style={styles.text}>
                            {rowData["title"]}
                        </Text>
                        <View style={styles.icon}>
                            <Icon name="arrow" />
                        </View>
                    </View>
                </View>
            </TouchableHighlight>

        )
    };

    _handlePress(rowId) {
        console.log(rowId);
        this.props.navigator.push({
            component: exampleList[rowId]["com"],
            title: exampleList[rowId]["title"],
            wrapperStyle: {paddingTop: 50}
        });
    };
}

export default class Home extends Component{

    render() {
        return (
            <NavigatorIOS
                barTintColor='#f8f8f8'
                tintColor='#666'
                titleTextColor="#333"
                style={{flex:1}}
                initialRoute={{
                  component: HomeList,
                  title: "FrozenRN",
                  navigationBarHidden:false,
                  passProps:{}
                }}
            />
            //     <Avatar
				// 	src="https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg"
				// 	size={50}
            //     />
            //     <Icon name="arrow" />
        );
    }
}

var styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 10,
        backgroundColor: '#F6F6F6',
    },
    text: {
        flex: 1,
    },
    icon: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'flex-end',
        marginRight: 15
    }
});
