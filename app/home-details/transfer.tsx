import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TransferScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Transfer</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="mostafarahman646@gmail.com" />

        <Text style={styles.label}>Amount</Text>
        <TextInput style={styles.input} placeholder="$500" keyboardType="numeric" />

        <Text style={styles.label}>Transfer Note (Optional)</Text>
        <TextInput 
          style={[styles.input, { height: 100, textAlignVertical: 'top' }]} 
          placeholder="Add a note" 
          multiline 
        />

        <TouchableOpacity 
            style={styles.actionBtn}
            onPress={() => router.push({ pathname: '/home-details/success', params: { type: 'Transfer' } })}
        >
          <Text style={styles.actionBtnText}>Transfer Now</Text>
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
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, fontSize: 16 },
  actionBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto', marginBottom: 20 },
  actionBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});