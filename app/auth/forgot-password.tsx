import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import AuthInput from '../../components/AuthInput';
import CustomButton from '../../components/CustomButton';
import { router } from 'expo-router';

export default function ForgotPasswordScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Forgot password</Text>
                <Text style={styles.subtitle}>
                    {"Enter your email account to reset your password"}
                </Text>

                <View style={styles.form}>
                    <AuthInput
                        label="Your Email"
                        placeholder="Enter your email"
                        keyboardType="email-address"
                    />
                </View>

                <CustomButton
                    title="Send Code"
                    onPress={() => router.push({
                        pathname: '/auth/verify',
                        params: { nextStep: 'reset-password' }
                    })}
                />

                <TouchableOpacity style={styles.backBtn}>
                    <Text style={styles.backText}>Back to Login</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
    subtitle: { fontSize: 14, color: '#7D7D7D', textAlign: 'center', marginBottom: 30 },
    form: { marginBottom: 20 },
    backBtn: { marginTop: 20, alignItems: 'center' },
    backText: { color: '#136D3B', fontWeight: '600' }
});