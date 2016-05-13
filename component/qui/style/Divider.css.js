import React, {
    Component,
    StyleSheet,
    PixelRatio
} from 'react-native';

module.exports = require('react-native').StyleSheet.create({
    divider: {
        backgroundColor: '#e9e9e9',
        height:1/PixelRatio.get()
    }
})
