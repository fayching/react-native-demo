module.exports = require('react-native').StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: '#f8f9f9',
    flexDirection: 'row',
    alignItems: 'center'
  },
  listItem:{
    flex:1,
    height: 60,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon:{
    width: 26,
    height: 26
  },
  text:{
    fontSize: 14
  }
});