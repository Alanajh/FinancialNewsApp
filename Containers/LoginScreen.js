import React from 'react';
import { StyleSheet, ScrollView, Text, View, Button, Alert} from 'react-native';
import StackNavigator from 'react-navigation';
import styles from './stylesheets/style'


export default class App extends React.Component {
	
	constructor(){
		console.disableYellowBox = true;
		super();
	}


  render() {
    return (
      <View style={styles.container}>
		<View style={{marginTop: 5}}>
          <Text style={styles.mock}>Login Screen</Text>
		  </View>
      </View>	
    );
  }
}


