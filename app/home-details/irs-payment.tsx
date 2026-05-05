import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function IRSPaymentScreen() {
  const [isRecurring, setIsRecurring] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>IRS Payment</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.totalBox}>
            <Text style={styles.totalLabel}>Total IRS Payment</Text>
            <Text style={styles.totalAmount}>$12345.35</Text>
          </View>

          <View style={styles.toggleContainer}>
            <TouchableOpacity 
              style={[styles.toggleBtn, !isRecurring && styles.activeToggle]} 
              onPress={() => setIsRecurring(false)}
            >
              <Text style={[styles.toggleText, !isRecurring && styles.activeToggleText]}>On-Time Payment</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.toggleBtn, isRecurring && styles.activeToggle]} 
              onPress={() => setIsRecurring(true)}
            >
              <Text style={[styles.toggleText, isRecurring && styles.activeToggleText]}>Recurring Payment</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>IRS Amount</Text>
          <TextInput style={styles.input} placeholder="$12345" keyboardType="numeric" />

          {!isRecurring ? (
            <>
              <Text style={styles.label}>Full Name</Text>
              <TextInput style={styles.input} placeholder="John Doe" />
              <Text style={styles.label}>Phone</Text>
              <TextInput style={styles.input} placeholder="+1 234..." keyboardType="phone-pad" />
              <Text style={styles.label}>EIN Number</Text>
              <TextInput style={styles.input} placeholder="12-345678" />
              <Text style={styles.label}>Address (city, state-zip)</Text>
              <TextInput style={styles.input} placeholder="New York, NY 10001" />
              <Text style={styles.label}>Tax Year Selection</Text>
              <View style={styles.dropdown}><Text>2025</Text><Ionicons name="chevron-down" size={18} /></View>
            </>
          ) : (
            <>
              <Text style={styles.label}>Frequency</Text>
              <View style={styles.radioGroup}>
                {['Annual', 'Quarterly', 'W2'].map((item) => (
                  <TouchableOpacity key={item} style={styles.radioBtn}>
                    <Ionicons name="radio-button-on" size={18} color="#136D3B" />
                    <Text style={{marginLeft: 5}}>{item}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </>
          )}

          <Text style={styles.label}>Payment Method</Text>
          <TouchableOpacity style={styles.methodBox}>
            <Ionicons name="radio-button-on" size={20} color="#136D3B" /><Text style={styles.methodText}>Stripe</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.actionBtn}
            onPress={() => router.push({ pathname: '/home-details/success', params: { type: 'IRS Payment' } })}
          >
            <Text style={styles.actionBtnText}>Payment Now</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  backButton: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 8, borderRadius: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  totalBox: { alignItems: 'center', marginVertical: 20 },
  totalLabel: { color: '#7D7D7D' },
  totalAmount: { fontSize: 24, fontWeight: 'bold' },
  toggleContainer: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 25, padding: 5, marginBottom: 20 },
  toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 20 },
  activeToggle: { backgroundColor: '#136D3B' },
  toggleText: { color: '#7D7D7D', fontSize: 12 },
  activeToggleText: { color: 'white' },
  label: { fontSize: 13, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  input: { backgroundColor: '#F5F5F5', padding: 12, borderRadius: 10 },
  dropdown: { flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#F5F5F5', padding: 12, borderRadius: 10 },
  radioGroup: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
  radioBtn: { flexDirection: 'row', alignItems: 'center' },
  methodBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 12, borderRadius: 10 },
  methodText: { marginLeft: 10 },
  actionBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginVertical: 30 },
  actionBtnText: { color: 'white', fontWeight: 'bold' }
});