import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

export default function SuccessScreen() {
  const { type } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/(tabs)')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Deposit Successful</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <View style={styles.successCircle}>
            <View style={styles.innerCircle}>
                <Ionicons name="checkmark" size={60} color="white" />
            </View>
        </View>

        <Text style={styles.successText}>{type} successfully!</Text>

        <TouchableOpacity 
          style={styles.confirmBtn}
          onPress={() => router.replace('/(tabs)')}
        >
          <Text style={styles.confirmText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  backButton: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 8, borderRadius: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30, alignItems: 'center', justifyContent: 'center' },
  successCircle: { width: 150, height: 150, borderRadius: 75, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center', marginBottom: 30 },
  innerCircle: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#136D3B', justifyContent: 'center', alignItems: 'center' },
  successText: { fontSize: 18, fontWeight: 'bold', color: '#136D3B', marginBottom: 50 },
  confirmBtn: { backgroundColor: '#136D3B', width: '100%', padding: 18, borderRadius: 30, alignItems: 'center' },
  confirmText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});