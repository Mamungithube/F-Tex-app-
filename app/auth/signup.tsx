import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import AuthInput from '../../components/AuthInput';
import CustomButton from '../../components/CustomButton';
// import { Colors } from '../../constants/theme';
import { router } from 'expo-router';

export default function SignUpScreen() {
    return (
        <SafeAreaView style={styles.container}>
            {/* ScrollView ব্যবহার করা হয়েছে যাতে অনেকগুলো ইনপুট ফিল্ড থাকলেও স্ক্রিন স্ক্রল করা যায় */}
            <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>

                {/* লোগো সেকশন */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.header}>
                    <Text style={styles.title}>Sign Up</Text>
                    <Text style={styles.subtitle}>{"Already have an account? Login"}</Text>
                </View>

                {/* ইনপুট ফিল্ডস (ডিজাইন অনুযায়ী) */}
                <View style={styles.form}>
                    <AuthInput
                        label="Name"
                        placeholder="Mustafiz Rahman"
                    />
                    <AuthInput
                        label="Email"
                        placeholder="Loisbakker@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <AuthInput
                        label="Phone Number"
                        placeholder="(454) 728-9902"
                        keyboardType="phone-pad"
                    />
                    <AuthInput
                        label="Password"
                        placeholder="*******"
                        secureTextEntry
                    />
                    <AuthInput
                        label="Confirm Password"
                        placeholder="*******"
                        secureTextEntry
                    />
                </View>

                {/* সাইন আপ বাটন */}
                <CustomButton
                    title="Sign Up"
                    onPress={() => router.push({
                        pathname: '/auth/verify',
                        params: { nextStep: 'login' }
                    })}
                />

                {/* ফুটার */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>{"Already have an account? "}</Text>
                    <TouchableOpacity onPress={() => router.push('/auth/login')}>
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { paddingHorizontal: 24, paddingBottom: 40 },
    logoContainer: { alignItems: 'center', marginVertical: 30 },
    logo: { width: 250, height: 120 },
    header: { alignItems: 'center', marginBottom: 25 },
    title: { fontSize: 26, fontWeight: 'bold', color: '#000' },
    subtitle: { fontSize: 14, color: '#136D3B', marginTop: 5, fontWeight: '500' },
    form: { width: '100%', marginBottom: 10 },
    footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 25 },
    footerText: { color: '#7D7D7D', fontSize: 14 },
    loginText: { color: '#136D3B', fontWeight: 'bold', fontSize: 14 }
});