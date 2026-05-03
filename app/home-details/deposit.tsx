import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function DepositScreen() {
    const [isRecurring, setIsRecurring] = useState(false);

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Add Deposit</Text>
                <View style={{ width: 40 }} />
            </View>

            <View style={styles.contentCard}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {/* Toggle Switch (On-Time / Recurring) */}
                    <View style={styles.toggleContainer}>
                        <TouchableOpacity
                            style={[styles.toggleBtn, !isRecurring && styles.activeToggle]}
                            onPress={() => setIsRecurring(false)}
                        >
                            <Text style={[styles.toggleText, !isRecurring && styles.activeToggleText]}>On-Time</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.toggleBtn, isRecurring && styles.activeToggle]}
                            onPress={() => setIsRecurring(true)}
                        >
                            <Text style={[styles.toggleText, isRecurring && styles.activeToggleText]}>Recurring Deposit</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Amount Input */}
                    <Text style={styles.label}>Amount</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="$76030.50"
                        keyboardType="numeric"
                    />

                    {/* Recurring Options (Only shows if Recurring is selected) */}
                    {isRecurring && (
                        <>
                            <Text style={styles.label}>Frequency</Text>
                            <View style={styles.radioGroup}>
                                {['Monthly', 'Weekly', 'Quarterly'].map((item) => (
                                    <TouchableOpacity key={item} style={styles.radioBtn}>
                                        <Ionicons name="radio-button-on" size={20} color="#136D3B" />
                                        <Text style={styles.radioText}>{item}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text style={styles.label}>Expire Date</Text>
                            <View style={styles.inputRow}>
                                <Ionicons name="calendar-outline" size={20} color="#7D7D7D" />
                                <Text style={styles.dateText}> 23/07/2025</Text>
                            </View>
                        </>
                    )}

                    {/* Payment Method */}
                    <Text style={styles.label}>Payment Method</Text>
                    <TouchableOpacity style={styles.methodBox}>
                        <Ionicons name="radio-button-on" size={20} color="#136D3B" />
                        <Text style={styles.methodText}>Stripe</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.methodBox, { marginTop: 10 }]}>
                        <Ionicons name="radio-button-off" size={20} color="#7D7D7D" />
                        <Text style={styles.methodText}>Venmo</Text>
                    </TouchableOpacity>

                    {/* Confirm Button */}
                    <TouchableOpacity
                        style={styles.confirmBtn}
                        onPress={() => {
                            // সরাসরি পুশ করা হচ্ছে
                            router.push({
                                pathname: '/home-details/success',
                                params: { type: isRecurring ? 'Recurring Deposit' : 'Deposit' }
                            });
                        }}
                    >
                        <Text style={styles.confirmText}>Confirm Deposit</Text>
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
    contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 25 },
    toggleContainer: { flexDirection: 'row', backgroundColor: '#F0F0F0', borderRadius: 25, padding: 5, marginBottom: 25 },
    toggleBtn: { flex: 1, paddingVertical: 10, alignItems: 'center', borderRadius: 20 },
    activeToggle: { backgroundColor: '#136D3B' },
    toggleText: { color: '#7D7D7D', fontWeight: '600' },
    activeToggleText: { color: 'white' },
    label: { fontSize: 14, fontWeight: 'bold', marginBottom: 10, marginTop: 15 },
    input: { backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10, fontSize: 16 },
    radioGroup: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 },
    radioBtn: { flexDirection: 'row', alignItems: 'center' },
    radioText: { marginLeft: 5, color: '#333' },
    inputRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10 },
    dateText: { color: '#333', fontSize: 16 },
    methodBox: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F5F5F5', padding: 15, borderRadius: 10 },
    methodText: { marginLeft: 10, fontSize: 16 },
    confirmBtn: { backgroundColor: '#136D3B', padding: 18, borderRadius: 30, alignItems: 'center', marginTop: 40, marginBottom: 20 },
    confirmText: { color: 'white', fontWeight: 'bold', fontSize: 16 }
});