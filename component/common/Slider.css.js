module.exports = require('react-native').StyleSheet.create({
  container: {
    flex: 1
  },
  pageIndicator:{
    position:"absolute",
    backgroundColor:"transparent",
    right:4,
    bottom:10,
    flexDirection:"row"
  },
  dot: {
    backgroundColor:'rgba(0,0,0,.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDot:{
    backgroundColor:'rgba(255,255,255,1)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
    borderColor: 'rgba(0,0,0,.3)',
    borderWidth: 1,
    overflow: 'hidden'
  }
});