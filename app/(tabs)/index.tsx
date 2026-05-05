import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* --- Header Section --- */}
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <View style={styles.profileInfo}>
              <Image 
                source={{ uri: 'https://i.pravatar.cc/100' }} // ডামি প্রোফাইল পিক
                style={styles.avatar} 
              />
              <View style={styles.textContainer}>
                <Text style={styles.greeting}>Hello, Larson</Text>
                <Text style={styles.subGreeting}>{"Let's Start Exploring"}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notificationBtn}>
              <Ionicons name="notifications-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Main Balance Card --- */}
        <View style={styles.cardContainer}>
          <View style={styles.balanceCard}>
            <TouchableOpacity 
              style={styles.balanceHeader} 
              onPress={() => router.push('/home-details/balance')}
            >
              <View>
                <Text style={styles.balanceLabel}>Total balance</Text>
                <Text style={styles.balanceAmount}>$76,030.5</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#7D7D7D" />
            </TouchableOpacity>

            <View style={styles.statsRow}>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Earned This Year</Text>
                <Text style={styles.statValue}>$76,35</Text>
              </View>
              <View style={styles.statBox}>
                <Text style={styles.statLabel}>Expected IRS</Text>
                <Text style={styles.statValue}>$7500.2</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <View style={styles.actionRow}>
              <TouchableOpacity style={[styles.actionBtn, styles.depositBtn]} onPress={() => router.push('/home-details/deposit')}>
                <Ionicons name="arrow-down-outline" size={20} color="white" />
                <Text style={styles.depositText}>Deposit</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionBtnOutline} onPress={() => router.push('/home-details/earned')}>
                <Ionicons name="wallet-outline" size={20} color="black" />
                <Text style={styles.actionText}>Withdraw</Text>
              </TouchableOpacity>
            </View>

            <View style={[styles.actionRow, {marginTop: 10}]}>
              <TouchableOpacity onPress={() => router.push('/home-details/irs-payment')} style={styles.actionBtnOutline}>
                <Ionicons name="receipt-outline" size={20} color="black" />
                <Text style={styles.actionText}>IRS Payment</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.actionBtnOutline}
                onPress={() => router.push('/home-details/tax-info')}
              >
                <Ionicons name="document-text-outline" size={20} color="black" />
                <Text style={styles.actionText}>Tax</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* --- Upcoming Transactions --- */}
        <View style={styles.transactionSection}>
          <Text style={styles.sectionTitle}>Upcoming Transactions</Text>
          
          {/* ট্রানজেকশন আইটেম ১ */}
          <View style={styles.transactionItem}>
            <View style={styles.itemLeft}>
              <View style={styles.iconCircle}><Ionicons name="cash" size={20} color="#136D3B" /></View>
              <View>
                <Text style={styles.itemTitle}>Deposit</Text>
                <Text style={styles.itemDate}>Due on April 15, 2025</Text>
              </View>
            </View>
            <Text style={styles.itemAmount}>$500</Text>
          </View>

          {/* ট্রানজেকশন আইটেম ২ */}
          <View style={styles.transactionItem}>
            <View style={styles.itemLeft}>
              <View style={[styles.iconCircle, {backgroundColor: '#FFE5E5'}]}><Ionicons name="send" size={20} color="#FF0000" /></View>
              <View>
                <Text style={styles.itemTitle}>Payment to IRS</Text>
                <Text style={styles.itemDate}>Due on April 15, 2025</Text>
              </View>
            </View>
            <Text style={styles.itemAmount}>$500</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F8F8' },
  header: { backgroundColor: '#136D3B', height: 180, paddingHorizontal: 20, paddingTop: 20 },
  headerTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  profileInfo: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 50, height: 50, borderRadius: 25, borderWidth: 2, borderColor: 'white' },
  textContainer: { marginLeft: 12 },
  greeting: { color: 'rgba(255,255,255,0.7)', fontSize: 14 },
  subGreeting: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  notificationBtn: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 10, borderRadius: 20 },
  
  cardContainer: { paddingHorizontal: 20, marginTop: -20 },
  balanceCard: { backgroundColor: 'white', borderRadius: 20, padding: 20, elevation: 5, shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 10 },
  balanceHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  balanceLabel: { color: '#7D7D7D', fontSize: 14 },
  balanceAmount: { fontSize: 32, fontWeight: 'bold', marginTop: 5 },
  
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statBox: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 12, width: '48%' },
  statLabel: { color: '#7D7D7D', fontSize: 12, marginBottom: 5 },
  statValue: { fontSize: 18, fontWeight: 'bold' },
  
  actionRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 25, width: '48%' },
  depositBtn: { backgroundColor: '#136D3B' },
  depositText: { color: 'white', fontWeight: 'bold', marginLeft: 5 },
  actionBtnOutline: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingVertical: 12, borderRadius: 25, width: '48%', borderWidth: 1, borderColor: '#E0E0E0' },
  actionText: { color: 'black', fontWeight: '600', marginLeft: 5 },

  transactionSection: { padding: 20 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 15 },
  transactionItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', padding: 15, borderRadius: 15, marginBottom: 10 },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  iconCircle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#E8F5E9', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  itemTitle: { fontWeight: 'bold', fontSize: 16 },
  itemDate: { color: '#7D7D7D', fontSize: 12 },
  itemAmount: { fontWeight: 'bold', fontSize: 16 }
});