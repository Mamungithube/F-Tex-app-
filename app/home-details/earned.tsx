import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EarnedScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Earned Money</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.label}>Earned For this year</Text>
        <Text style={styles.amount}>$500</Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Daily Annual Interest Rate</Text>
          <Text style={styles.infoValue}>0.01096%</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20, paddingVertical: 20 },
  backButton: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 8, borderRadius: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: '600' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 30, alignItems: 'center' },
  label: { color: '#7D7D7D', fontSize: 16, marginBottom: 10 },
  amount: { fontSize: 36, fontWeight: 'bold', marginBottom: 40 },
  divider: { height: 1, backgroundColor: '#EEE', width: '100%', marginBottom: 20 },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
  infoLabel: { fontSize: 16, color: '#333' },
  infoValue: { fontSize: 16, fontWeight: 'bold' }
});