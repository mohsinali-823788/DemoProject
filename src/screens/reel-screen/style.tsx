import {Dimensions, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  reelStyle: {
    width: screenWidth,
    height: screenHeight,
    backgroundColor: 'black',
  },
  itemSeperatorStyle: {
    width: '100%',
    height: 10,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loaderStyle: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    zIndex: 100000,
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
});
