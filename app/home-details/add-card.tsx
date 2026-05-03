import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function AddCardScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Add New Payment</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.label}>Card Type</Text>
        <TextInput style={styles.input} placeholder="Mastercard" />

        <Text style={styles.label}>Card Number</Text>
        <TextInput style={styles.input} placeholder="*********" keyboardType="numeric" />

        <Text style={styles.label}>CVV</Text>
        <TextInput style={styles.input} placeholder="5386" keyboardType="numeric" />

        <Text style={styles.label}>Expire Date</Text>
        <View style={styles.inputRow}>
          <Ionicons name="calendar-outline" size={20} color="#7D7D7D" />
          <Text style={{marginLeft: 10}}> 23/07/2025</Text>
        </View>

        <TouchableOpacity style={styles.actionBtn} onPress={() => router.back()}>
          <Text style={styles.actionBtnText}>Add Card</Text>
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
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 8, marginTop: 15 },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, fontSize: 16, marginBottom: 5 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10 },
  actionBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  actionBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});