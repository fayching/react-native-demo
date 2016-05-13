import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

import Avatar from '../view/Avatar';
import List from '../view/List';
import Divider from '../view/Divider';
const data = {
    'single': {
        'avatarText': [
            {
                'captionText': '1.faycheng  2月12日',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
                'size': 50,
                'primaryText': '这本书太赞了，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。',
                'secondaryText': '这是内容，加ui-nowrap可以超出长度截断这是内容',
                'badge': 'new'
            },
            {
                'captionText': '1.faycheng  2月12日',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
                'size': 28,
                'primaryText': '这本书太赞了，每次看都有不一样的体会和感悟，超级喜欢！期待大结局。',
                'secondaryText': '这是内容，加ui-nowrap可以超出长度截断这是内容，加ui-nowrap可以超出长度截断',
                'dot': true
            },
            {
                'captionText': '1.faycheng  2月12日',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
                'size': 40,
                'primaryText': '全屏滚动效果H5FullscreenPage.js测试版给力上线',
                'secondaryText': '这是内容，加ui-nowrap可以超出长度截断这是内容',
                'action': '使用中'
            },
            {
                'captionText': '1.faycheng  2月12日',
                'avatar': 'https://s3.amazonaws.com/uifaces/faces/twitter/ok/128.jpg',
                'size': 40,
                'primaryText': '长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字长文字',
                'secondaryText': '这是内容，加ui-nowrap可以超出长度截断这是内容'
            },]
    }
};

export default class ListExample extends Component {
    render() {
        return (
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.container}>
                    <View style={styles.subHeader}><Text style={styles.subheaderText}>简单列表</Text></View>
                    {data.single.avatarText.map((list, i) =>(
                        <View>
                            {i<=1 &&
                            <List
                                captionText={list.captionText}
                                primaryText={list.primaryText}
                                primaryTextLines={2}
                                total={2}
                                index={i}
                                isListBorder={true}
                                rightIcon={
                                    <View><Text>使用中</Text></View>
                                }
                            />
                            }
                        </View>
                    ))}

                    <View style={styles.subHeader}><Text style={styles.subheaderText}>右边有内容的列表</Text></View>
                    {data.single.avatarText.map((list,i) => (
                        <View>
                            {i <= 2 &&
                            <List
                                primaryText={list.primaryText}
                                total={3}
                                index={i}
                                isListBorder={true}
                                rightIcon={
                                    list.badge && (<View style={styles.badge}><Text style={styles.badgeText}>{list.badge}</Text></View>) ||

                                    list.dot &&   (<View style={styles.dot}></View>) ||

                                    list.action && (<Text style={{fontSize:16}}>{list.action}</Text>)
                                }
                            />
                            }
                        </View>
                    ))}


                    <View style={styles.subHeader}><Text style={styles.subheaderText}>文字列表</Text></View>
                    {data.single.avatarText.map((list,i) => (
                        <View>
                            {i ==3 &&
                            <List
                                primaryText={list.primaryText}
                                primaryTextLines={3}
                                total={1}
                                index={0}
                                isListBorder={true}
                                rightIcon={
                                    <View style={{flexDirection:'row'}}>
                                        <Text>男</Text>
                                        <Text>></Text>
                                    </View>
                                }
                            />
                            }
                        </View>
                    ))}

                    <View style={styles.subHeader}><Text style={styles.subheaderText}>图文一行列表</Text></View>
                    {data.single.avatarText.map((list,i) => (
                        <View>
                            {i <=1 &&
                            <List
                                leftIcon={<Avatar src={list.avatar} size={50}/>}
                                primaryText={list.primaryText}
                                primaryTextLines={1}
                                total={2}
                                index={i}
                                isListBorder={true}
                                rightIcon={
                                    <View style={{flexDirection:'row'}}>
                                        <Text>男</Text>
                                        <Text>></Text>
                                    </View>
                                }
                            />
                            }
                        </View>
                    ))}


                    <View style={styles.subHeader}><Text style={styles.subheaderText}>图文列表带头像</Text></View>
                    {data.single.avatarText.map((user, i) =>(
                        <View>
                            {i<=1 &&
                            <List
                                leftIcon={<Avatar src={user.avatar} size={50}/>}
                                primaryText={user.primaryText}
                                subText={user.secondaryText}
                                subTextLines={1}
                                total={2}
                                index={i}
                                isListBorder={true}
                                rightIcon={
                                    <View><Text>使用中</Text></View>
                                }
                            />
                            }
                        </View>
                    ))}
                    {data.single.avatarText.map((user, i) =>(
                        <View>
                            {i<=1 &&
                            <List
                                leftIcon={<Avatar src={user.avatar} size={64}/>}
                                primaryText={user.primaryText}
                                subText={user.secondaryText}
                                subTextLines={2}
                                index={i}
                                rightIcon={
                                    <View><Text>使用中</Text></View>
                                }
                            />
                            }
                            {i==2 &&
                            <List
                                leftIcon={<Avatar src={user.avatar} size={64}/>}
                                primaryText={user.primaryText}
                                subText={user.secondaryText}
                                subTextLines={1}
                                subTextMore={[{
                                    text:'523万人在玩'
                                }]}
                                index={i}
                            />
                            }

                            {i==3 &&
                            <List
                                leftIcon={
                                    <View style={{flexDirection:'row'}}>
                                        <Text style={{alignSelf:'center',marginRight:10}}>{i}</Text>
                                        <Avatar src={user.avatar} size={64}/>
                                    </View>
                                }
                                primaryText={user.primaryText}
                                subText={user.secondaryText}
                                subTextLines={1}
                                subTextMore={
                                    <Text style={{fontSize:12,color:'#a6a6a6',lineHeight:18}}><Text style={{color:'#ff8444'}}>523万</Text>人在玩</Text>
                                }
                                index={i}
                            />
                            }
                        </View>
                    ))}

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor:'rgba(255,255,255,1)'
    },
    container: {
        marginTop:10
    },

    subHeader: {
        height:44,
        justifyContent: 'center',
    },

    subheaderText: {
        color: '#000',
        fontSize:16
    },

    demoContainer: {
        height:42,
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    dot: {
        width:8,
        height:8,
        borderRadius:4,
        backgroundColor:'blue'
    },
    badge:{
        borderRadius:8,
        backgroundColor:'blue',
        height:16,
        overflow:'hidden',
    },
    badgeText: {
        fontSize:11,
        color:'#fff',
        paddingLeft:6,
        paddingRight:6,
        textAlign:'center'
    },

});

