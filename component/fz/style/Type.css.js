import React, {
    Component,
    StyleSheet,
    PropTypes,
    View,
    ScrollView,
    Platform,
    Text
} from 'react-native';
module.exports = require('react-native').StyleSheet.create({
  default:{
    color: '#000',
    lineHeight: 48,
    fontSize: 32,
  },
  fontSizeH1:{
    fontSize: 36,
  },
  fontSizeH2:{
    fontSize: 34,
  },
  fontSizeH3:{
    fontSize: 32,
  },
  fontSizeH4:{
    fontSize: 32,
  },
  fontSizeH5:{
    fontSize: 28,
  },
  fontSizeH6:{
    fontSize: 24,
  },
  uiTxtDefault:{
    color: '#000',
  },
  uiTxtWhite:{
    color: '#fff',
  },
  uiTxtInfo:{
    color: '#777',
  },
  uiTxtMuted:{
    color: '#bbb',
  },
  uiTxtWarning:{
    color: '#ff4222',
  },
  uiTxtHighlight:{
    color: '#ff8444',
  },
  a:{
    color: '#00a5e0',
  },
  uiTxtFeeds:{
    color: '#314c83',
  },
  uiTxtJustifyOne:{
    textAlign:(Platform.OS==='ios')?'justify':'left',
    overflow: 'hidden',
    height: 24,
    fontSize: 16,
  },
  uiTxtJustify:{
    textAlign:(Platform.OS==='ios')?'justify':'left',
  },
});

