import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TaxInfoScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Tax Information</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* White Card Section */}
      <View style={styles.card}>
        <View style={styles.yearRow}>
          <Text style={styles.yearText}>2023</Text>
          <TouchableOpacity style={styles.dropdown}>
            <Text>Change Year </Text>
            <Ionicons name="chevron-down" size={16} />
          </TouchableOpacity>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Interest Earned</Text>
            <Text style={styles.dataValue}>$12,347</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Fee charged</Text>
            <Text style={styles.dataValue}>$125</Text>
          </View>
          <View style={styles.dataRow}>
            <Text style={styles.dataLabel}>Amount Sent To IRS</Text>
            <Text style={styles.dataValue}>$12,365</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.downloadBtn}>
          <Text style={styles.downloadText}>Download Tax report PDF</Text>
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
  card: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  yearRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  yearText: { fontSize: 32, fontWeight: 'bold' },
  dropdown: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0F0F0', padding: 10, borderRadius: 20 },
  infoBox: { borderWidth: 1, borderColor: '#E0E0E0', borderRadius: 15, padding: 20, marginBottom: 40 },
  dataRow: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  dataLabel: { color: '#7D7D7D', fontSize: 16 },
  dataValue: { fontWeight: 'bold', fontSize: 16 },
  downloadBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center' },
  downloadText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});