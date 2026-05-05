import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function PasswordChange() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Change Password</Text>
        <View style={{ width: 40 }} />
      </View>
      <View style={styles.contentCard}>
        <Text style={styles.label}>Current Password</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="********" />
        <Text style={styles.label}>New Password</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="********" />
        <Text style={styles.label}>Confirm New Password</Text>
        <TextInput style={styles.input} secureTextEntry placeholder="********" />
        <TouchableOpacity style={styles.saveBtn} onPress={() => router.back()}>
          <Text style={styles.saveBtnText}>Update Password</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  backBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 8, borderRadius: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  label: { fontSize: 14, fontWeight: 'bold', marginTop: 20, marginBottom: 8 },
  input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10 },
  saveBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto' },
  saveBtnText: { color: 'white', fontWeight: 'bold' }
});