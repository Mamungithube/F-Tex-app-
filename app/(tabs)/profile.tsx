import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ProfileScreen() {
    const menuItems = [
        { title: 'Personal Information', icon: 'person-outline', route: '/home-details/edit-profile' },
        { title: 'Password change', icon: 'lock-closed-outline', route: '/home-details/password-change' },
        { title: 'Notification', icon: 'notifications-outline', route: '/home-details/notification' },
        { title: 'Help & Support', icon: 'help-circle-outline', route: '/home-details/faq' },
        { title: 'Legal & Compliance', icon: 'shield-checkmark-outline', route: '/home-details/legal' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <View style={styles.profileInfo}>
                    <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.avatar} />
                    <View>
                        <Text style={styles.userName}>Mostafa Rahman</Text>
                        <Text style={styles.userEmail}>mostafa@gmail.com</Text>
                    </View>
                </View>
                <TouchableOpacity><Ionicons name="create-outline" size={24} color="white" /></TouchableOpacity>
            </View>

            <View style={styles.contentCard}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity
                            key={index}
                            style={styles.menuItem}
                            onPress={() => item.route !== '#' && router.push(item.route as any)}
                        >
                            <View style={styles.menuLeft}>
                                <Ionicons name={item.icon as any} size={20} color="#136D3B" />
                                <Text style={styles.menuText}>{item.title}</Text>
                            </View>
                            <Ionicons name="chevron-forward" size={18} color="#7D7D7D" />
                        </TouchableOpacity>
                    ))}

                    <TouchableOpacity style={styles.logoutBtn} onPress={() => router.replace('/auth/login')}>
                        <Ionicons name="log-out-outline" size={20} color="#FF3B30" />
                        <Text style={styles.logoutText}>Log Out</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#136D3B' },
    header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 25, paddingTop: 40 },
    profileInfo: { flexDirection: 'row', alignItems: 'center' },
    avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 15, backgroundColor: '#eee' },
    userName: { color: 'white', fontSize: 18, fontWeight: 'bold' },
    userEmail: { color: 'rgba(255,255,255,0.7)', fontSize: 12 },
    contentCard: { flex: 1, backgroundColor: 'white', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 },
    menuItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 18, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
    menuLeft: { flexDirection: 'row', alignItems: 'center' },
    menuText: { marginLeft: 15, fontSize: 15, color: '#333' },
    logoutBtn: { flexDirection: 'row', alignItems: 'center', marginTop: 30, paddingVertical: 10 },
    logoutText: { marginLeft: 15, fontSize: 15, color: '#FF3B30', fontWeight: 'bold' }
});