import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function EditProfile() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Edit Profile</Text>
        <View style={{ width: 40 }} />
      </View>

      <View style={styles.contentCard}>
        <View style={styles.imageSection}>
          <Image source={{ uri: 'https://via.placeholder.com/100' }} style={styles.profileImg} />
          <TouchableOpacity style={styles.cameraIcon}><Ionicons name="camera" size={20} color="white" /></TouchableOpacity>
        </View>

        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} defaultValue="Mostafa Rahman" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} defaultValue="mostafarahman20194@gmail.com" />

        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} defaultValue="Gaibandha" />

        <Text style={styles.label}>Phone Number</Text>
        <View style={styles.inputRow}>
           <Text style={{fontWeight: 'bold'}}>🇺🇸 +44</Text>
           <TextInput style={{flex: 1, marginLeft: 10}} placeholder="Your phone number" />
        </View>

        <TouchableOpacity style={styles.saveBtn} onPress={() => router.back()}>
          <Text style={styles.saveBtnText}>Save Changes</Text>
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
  imageSection: { alignSelf: 'center', marginBottom: 30 },
  profileImg: { width: 100, height: 100, borderRadius: 50 },
  cameraIcon: { position: 'absolute', bottom: 0, right: 0, backgroundColor: '#136D3B', padding: 8, borderRadius: 15 },
  label: { fontSize: 13, fontWeight: 'bold', marginTop: 15, marginBottom: 5 },
  input: { backgroundColor: '#F5F5F5', padding: 12, borderRadius: 10 },
  inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 12, borderRadius: 10 },
  saveBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 'auto' },
  saveBtnText: { color: 'white', fontWeight: 'bold' }
});