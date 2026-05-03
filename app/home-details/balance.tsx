import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function BalanceScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Balance</Text>
        {/* ব্যালেন্স করার জন্য একটি খালি ভিউ */}
        <View style={{ width: 40 }} /> 
      </View>

      {/* Content Card */}
      <View style={styles.contentCard}>
        <Text style={styles.label}>Current balance</Text>
        <Text style={styles.amount}>$76,030.50</Text>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Current Annual</Text>
          <Text style={styles.infoValue}>4.00%</Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.infoRow}>
          <Text style={styles.infoLabel}>Daily Interest</Text>
          <Text style={styles.infoValue}>$8.33</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#136D3B' 
  },
  header: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: 20, 
    paddingVertical: 20,
    marginTop: 10
  },
  backButton: { 
    backgroundColor: 'rgba(255,255,255,0.2)', 
    padding: 8, 
    borderRadius: 20 
  },
  headerTitle: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '600' 
  },
  contentCard: { 
    flex: 1, 
    backgroundColor: 'white', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 30,
    alignItems: 'center'
  },
  label: { 
    color: '#7D7D7D', 
    fontSize: 16, 
    marginBottom: 10 
  },
  amount: { 
    fontSize: 36, 
    fontWeight: 'bold', 
    marginBottom: 40 
  },
  divider: { 
    height: 1, 
    backgroundColor: '#EEEEEE', 
    width: '100%', 
    marginVertical: 10 
  },
  infoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    width: '100%',
    paddingVertical: 10
  },
  infoLabel: { 
    fontSize: 16, 
    color: '#333333' 
  },
  infoValue: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  }
});