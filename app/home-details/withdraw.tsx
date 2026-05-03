import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function WithdrawScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Withdraw</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.balanceLabel}>Current balance</Text>
        <Text style={styles.balanceAmount}>$76030.50</Text>

        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} placeholder="$76030.50" keyboardType="numeric" />
        <Text style={styles.feePreview}>Fee preview: $0.00</Text>

        <Text style={styles.label}>Withdraw to</Text>
        <TouchableOpacity style={styles.methodBox} onPress={() => router.push('/home-details/add-card')}>
          <Ionicons name="radio-button-on" size={20} color="#136D3B" />
          <Text style={styles.methodText}>Stripe</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[styles.methodBox, {marginTop: 10}]}>
          <Ionicons name="radio-button-off" size={20} color="#7D7D7D" />
          <Text style={styles.methodText}>Venmo</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.actionBtn}
          onPress={() => router.push({ pathname: '/home-details/success', params: { type: 'Withdraw' } })}
        >
          <Text style={styles.actionBtnText}>Withdraw</Text>
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
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  balanceLabel: { textAlign: 'center', color: '#7D7D7D', marginTop: 20 },
  balanceAmount: { textAlign: 'center', fontSize: 28, fontWeight: 'bold', marginBottom: 30 },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 10, marginTop: 20 },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, fontSize: 16 },
  feePreview: { color: '#7D7D7D', fontSize: 12, marginTop: 5, textAlign: 'center' },
  methodBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10 },
  methodText: { marginLeft: 10, fontSize: 16 },
  actionBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  actionBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});