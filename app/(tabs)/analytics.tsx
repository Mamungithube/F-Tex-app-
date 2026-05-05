import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function PerformanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Performance</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.chartCard}>
          <Text style={styles.cardLabel}>Current balance</Text>
          <Text style={styles.balance}>$76030.50</Text>
          <Text style={styles.growth}>+12.3% This Year</Text>
          
          {/* Mock Chart */}
          <View style={styles.chartContainer}>
            {[40, 70, 50, 90, 60, 80].map((h, i) => (
              <View key={i} style={[styles.bar, { height: h, backgroundColor: i === 3 ? '#136D3B' : '#E0E0E0' }]} />
            ))}
          </View>
          <View style={styles.chartLabels}>
            {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map(m => <Text key={m} style={styles.monthText}>{m}</Text>)}
          </View>
        </View>

        <View style={styles.infoRow}>
          <Text>Year-End Value</Text>
          <Text style={{fontWeight: 'bold'}}>$12345</Text>
        </View>
        <View style={styles.infoRow}>
          <Text>Growth This Year</Text>
          <Text style={{color: '#136D3B', fontWeight: 'bold'}}>$12345</Text>
        </View>

        <Text style={styles.sectionTitle}>Upcoming Transactions</Text>
        {[1, 2].map((i) => (
          <View key={i} style={styles.transItem}>
             <View style={styles.iconCircle}><Ionicons name="cash-outline" size={20} color="#136D3B" /></View>
             <View style={{flex: 1, marginLeft: 10}}>
               <Text style={{fontWeight: 'bold'}}>Deposit</Text>
               <Text style={{fontSize: 12, color: '#7D7D7D'}}>Due on April 15, 2025</Text>
             </View>
             <Text style={{fontWeight: 'bold'}}>$500</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: { backgroundColor: '#136D3B', padding: 20, paddingTop: 40, alignItems: 'center' },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  content: { padding: 20 },
  chartCard: { backgroundColor: 'white', padding: 20, borderRadius: 20, elevation: 3 },
  cardLabel: { color: '#7D7D7D' },
  balance: { fontSize: 28, fontWeight: 'bold' },
  growth: { color: '#136D3B', fontSize: 12, marginBottom: 20 },
  chartContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', height: 100 },
  bar: { width: 10, borderRadius: 5 },
  chartLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 },
  monthText: { fontSize: 10, color: '#7D7D7D' },
  infoRow: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', padding: 15, borderRadius: 15, marginTop: 10 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 20 },
  transItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 10 },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center' }
});