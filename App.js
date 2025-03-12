import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello 👋</Text>
        {/* Xóa phần Image để không hiển thị avatar */}
      </View>
      
      <Text style={styles.sectionTitle}>Your Insights</Text>
      
      <View style={styles.grid}>
        <TouchableOpacity onPress={() => navigation.navigate('Scan')} style={styles.cardPrimary}>
          <Text style={styles.cardText}>Scan New</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardSecondary}>
          <Text style={styles.cardText}>Counterfeits</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardSecondary}>
          <Text style={styles.cardText}>Success</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardSecondary}>
          <Text style={styles.cardText}>Directory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const ScanScreen = ({ navigation }) => {
  return (
    <View style={styles.scanContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.scanFrame}>
        {/* Giữ ảnh nhưng không có viền */}
        <Image source={require('./assets/1757_1.jpg')} style={styles.scanImage} />
      </View>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scan" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FB', padding: 20 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  greeting: { fontSize: 24, fontWeight: 'bold' },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  cardPrimary: { backgroundColor: '#E8F0FE', padding: 20, borderRadius: 10, alignItems: 'center', width: '48%', marginBottom: 10 },
  cardSecondary: { backgroundColor: '#F8F9FB', padding: 20, borderRadius: 10, alignItems: 'center', width: '48%', marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  cardText: { fontSize: 16, fontWeight: 'bold' },
  scanContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FAFAFA' },
  backButton: { position: 'absolute', top: 40, left: 20 },
  scanFrame: { width: 300, height: 500, justifyContent: 'center', alignItems: 'center', overflow: 'hidden' },
  scanImage: { width: '100%', height: '100%' },
  scanText: { fontSize: 18, fontWeight: 'bold', marginTop: 20 }
});

export default App;
