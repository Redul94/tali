import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './app/navigations/tabNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
      <Text>
        helo
      </Text>
    </View>
      <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>
    
      <StatusBar style="auto" />
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
