import React, {
    Component,
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    default: {
        height: 30,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 14,
        paddingRight: 14,
        borderWidth: 1/PixelRatio.get(),
        borderColor: '#818181',
        backgroundColor: '#fff',
        marginLeft: 10,
        marginRight: 10,
    },
    defaultText: {
        fontSize: 15,
        backgroundColor: 'transparent'
    },
    //  尺寸大小
    smallSize: {
        height: 30,
        borderRadius: 2,
    },
    smallSizeText: {
        fontSize: 15,
    },
    largeSize: {
        height: 44,
        borderRadius: 3,
    },
    largeSizeText: {
        fontSize: 18,
    },
    // 常规默认类型
    defaultTypeNormal: {
    },
    defaultTypeActive: {
        borderColor: '#b6b6b6',
        backgroundColor: "#f3f3f3",
    },
    defaultTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#edefef",
    },
    defaultTypeTextNormal: {
        color: '#000',
    },
    defaultTypeTextActive: {
        color: '#000',
    },
    defaultTypeTextDisabled: {
        color: '#c7c7c7',
    },
    // 辅助类型
    auxiliaryTypeNormal: {
        borderColor: '#55ccf3',
        backgroundColor: "#fff",
    },
    auxiliaryTypeActive: {
        borderColor: '#64d0f5',
        backgroundColor: "#e3eef2",
    },
    auxiliaryTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#edefef",
    },
    auxiliaryTypeTextNormal: {
        color: '#37c6f2',
    },
    auxiliaryTypeTextActive: {
        color: '#35c6f2',
    },
    auxiliaryTypeTextDisabled: {
        color: '#c7c7c7',
    },
    // 正常类型
    primaryTypeNormal: {
        borderColor: 'transparent',
        backgroundColor: '#38c7f3',
    },
    primaryTypeActive: {
        borderColor: 'transparent',
        backgroundColor: "#23a9d3",
    },
    primaryTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#eeeff0",
    },
    primaryTypeTextNormal: {
        color: '#fff', 
    },
    primaryTypeTextActive: {
        color: 'rgba(255, 255, 255, .9)',
    },
    primaryTypeTextDisabled: {
        color: '#c7c7c7',
    },
    // 红色警告类型
    dangerTypeNormal: {
        borderColor: 'transparent',
        backgroundColor: '#fb7a6c',
    },
    dangerTypeActive: {
        borderColor: 'transparent',
        backgroundColor: "#d44d3d",
    },
    dangerTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#edefef",
    },
    dangerTypeTextNormal: {
        color: '#fff',
    },
    dangerTypeTextActive: {
        color: 'rgba(255, 255, 255, .9)',
    },
    dangerTypeTextDisabled: {
        color: '#c7c7c7',
    },
    // 反白类型
    highlightTypeNormal: {
        borderColor: '#fff',
        backgroundColor: 'transparent',
    },
    highlightTypeActive: {
        borderColor: '#fff',
        backgroundColor: "rgba(255,255,255,.5)",
    },
    highlightTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#969696",
    },
    highlightTypeTextNormal: {
        color: '#fff',
    },
    highlightTypeTextActive: {
        color: 'rgba(255, 255, 255, .9)',
    },
    highlightTypeTextDisabled: {
        color: '#b6b6b6',
    },
    // 圆形类
    circleType: {
        borderRadius: 60,
        width: 60,
        height: 60,
    },
    largeCircleSize: {
        borderRadius: 100,
        width: 100,
        height: 100,
    },
    circleTypeNormal: {
        borderColor: 'transparent',
        backgroundColor: '#38c7f3',
    },
    circleTypeActive: {
        borderColor: 'transparent',
        backgroundColor: "#23a9d3",
    },
    circleTypeDisabled: {
        borderColor: 'transparent',
        backgroundColor: "#eeeff0",
    },
    circleTypeTextNormal: {
        color: 'transparent',
    },
    circleTypeTextActive: {
        color: 'transparent',
    },
    circleTypeTextDisabled: {
        color: 'transparent',
    },
    // 空心圆
    circleLineTypeNormal: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#38c7f3',
        backgroundColor: 'transparent',
    },
    circleLineTypeActive: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#23a9d3',
        backgroundColor: "transparent",
    },
    circleLineTypeDisabled: {
        borderWidth: 2/PixelRatio.get(),
        borderColor: '#eeeff0',
        backgroundColor: "transparent",
    },
    circleLineTypeTextNormal: {
        color: 'transparent',
    },
    circleLineTypeTextActive: {
        color: 'transparent',
    },
    circleLineTypeTextDisabled: {
        color: 'transparent',
    }
});
