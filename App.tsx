import React from 'react';
import { Button, StyleSheet, Alert, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Button  
      title='Takbeer'  
      onPress={ () => Alert.alert("ALLAHO AKBAR", "", [{text: 'Alhamdulellah'}])}> 
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'papayawhip',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
