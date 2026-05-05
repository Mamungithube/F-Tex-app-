import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LegalScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Legal & Compliance</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={styles.contentCard}>
        <ScrollView>
          <Text style={styles.sectionTitle}>Privacy Policy</Text>
          <Text style={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
          <Text style={styles.sectionTitle}>Terms of Service</Text>
          <Text style={styles.text}>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, marginTop: 20 },
  text: { color: '#666', lineHeight: 20 }
});