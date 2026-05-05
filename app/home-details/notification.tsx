import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function NotificationScreen() {
  const notifications = [
    { title: 'Bank of America', desc: 'Bank of America - 256488 is the...', time: 'Today', icon: 'business' },
    { title: 'Account', desc: 'Your account is limited. Please tell...', time: '11/10', icon: 'person' },
    { title: 'Alert', desc: 'Your statement is ready for you to...', time: '11/10', icon: 'alert-circle' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Ionicons name="arrow-back" size={24} color="white" /></TouchableOpacity>
        <Text style={styles.headerTitle}>Notification</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.contentCard}>
        <ScrollView>
          {notifications.map((n, i) => (
            <View key={i} style={styles.notifItem}>
              <View style={styles.iconBox}><Ionicons name={n.icon as any} size={20} color="white" /></View>
              <View style={{ flex: 1, marginLeft: 15 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                   <Text style={{ fontWeight: 'bold' }}>{n.title}</Text>
                   <Text style={{ fontSize: 10, color: '#7D7D7D' }}>{n.time}</Text>
                </View>
                <Text style={{ fontSize: 12, color: '#7D7D7D' }} numberOfLines={1}>{n.desc}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#136D3B' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 },
  headerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
  notifItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  iconBox: { backgroundColor: '#136D3B', padding: 10, borderRadius: 10 }
});