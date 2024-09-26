import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Alert, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Button 
        title='Takbeer'
        onPress={ () => Alert.alert("ALLAHO AKBAAAAR", "", [{text: 'Alhamdulellah'}])}
      />
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
