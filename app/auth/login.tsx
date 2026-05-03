import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import AuthInput from '../../components/AuthInput';
import CustomButton from '../../components/CustomButton';
import { Colors } from '../../constants/theme'; // নিশ্চিত হোন theme.ts এ primary কালার আছে
import { router } from 'expo-router';

export default function LoginScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>

                {/* লোগো সেকশন */}
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logo}
                        resizeMode="contain"
                    />
                </View>

                {/* হেডার টেক্সট */}
                <View style={styles.header}>
                    <Text style={styles.title}>Log In</Text>
                    <Text style={styles.subtitle}>{"Create an account or login to use our app"}</Text>
                </View>

                {/* ইনপুট ফিল্ডস */}
                <View style={styles.form}>
                    <AuthInput
                        label="Email"
                        placeholder="Example@gmail.com"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <AuthInput
                        label="Password"
                        placeholder="********"
                        secureTextEntry
                    />

                    <TouchableOpacity style={styles.forgotBtn}>
                        <Text style={styles.forgotText}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>

                {/* অ্যাকশন বাটন */}
                <CustomButton
                    title="Log In"
                    onPress={() => {
                        console.log('Login Successful');
                        // লগইন সফল হলে হোম ড্যাশবোর্ডে পাঠাবে
                        router.replace('/(tabs)');
                    }}
                />

                <Text style={styles.orText}>Or sign in with Google</Text>

                <TouchableOpacity style={styles.googleBtn} activeOpacity={0.7}>
                    <Text style={styles.googleText}>Sign in with Google</Text>
                </TouchableOpacity>

                {/* ফুটার */}
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <View style={styles.footer}>
                            <Text style={styles.footerText}>{"Don't have an account? "}</Text>
                            <TouchableOpacity onPress={() => router.push('/auth/signup')}>
                                <Text style={styles.signUpText}>Sign Up</Text>
                            </TouchableOpacity>
                        </View>
                    </TouchableOpacity>
                </View>

            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
    logoContainer: { alignItems: 'center', marginBottom: 20 },
    logo: { width: 250, height: 120 },
    header: { alignItems: 'center', marginBottom: 30 },
    title: { fontSize: 28, fontWeight: 'bold', color: '#000' },
    subtitle: { fontSize: 14, color: '#7D7D7D', marginTop: 5, textAlign: 'center' },
    form: { width: '100%', marginBottom: 10 },
    forgotBtn: { alignSelf: 'flex-end', marginTop: -5, marginBottom: 20 },
    forgotText: { color: '#136D3B', fontWeight: '600', fontSize: 13 },
    orText: { textAlign: 'center', marginVertical: 20, color: '#999', fontSize: 14 },
    googleBtn: {
        borderWidth: 1,
        borderColor: '#E0E0E0',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    googleText: { fontSize: 16, color: '#333', fontWeight: '500' },
    footer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
    footerText: { color: '#7D7D7D', fontSize: 16 },
    signUpText: { color: '#136D3B', fontWeight: 'bold', fontSize: 14 }
});