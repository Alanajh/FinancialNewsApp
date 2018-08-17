import React, {StyleSheet} from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(60, 60, 60)',
    justifyContent: 'center',
	paddingTop: 5,
  },
   item: {
	backgroundColor: 'rgba( 255, 255, 255, 0.5)', 
	borderColor: 'rgba( 211, 211, 211, 0.5)',
	borderWidth: 2,
	borderWidth: 5,
    padding: 10,
    fontSize: 24,
    height: 54,
  },
  mock: {
	backgroundColor: 'rgba( 0, 25, 25, 0.5)', 
	borderColor: 'rgba( 0, 0, 0, 0.5)', 
	color: 'white', 
	fontSize: 22,
	padding: 10,
	textAlign: 'center',
  },
});
