import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router'; // router এবং params ইমপোর্ট
import OtpInput from '../../components/OtpInput';
import CustomButton from '../../components/CustomButton';

export default function VerifyScreen() {
  const router = useRouter();
  
  // অন্য পেজ থেকে পাঠানো ডেটা (nextStep) এখানে রিসিভ করা হচ্ছে
  const { nextStep } = useLocalSearchParams();

  const handleVerify = () => {
    console.log('Verifying OTP...');
    console.log('Next destination:', nextStep);

    // লজিক: যদি 'forgot-password' থেকে আসে, তবে 'reset-password' এ যাবে
    if (nextStep === 'reset-password') {
      router.push('/auth/reset-password');
    } 
    // অন্যথায় (যেমন সাইনআপ থেকে আসলে) 'login' পেজে যাবে
    else {
      router.push('/auth/login');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* রকেট ইলাস্ট্রেশন */}
        <View style={styles.imageContainer}>
           <Image 
            source={require('../../assets/images/rocket.png')} 
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.title}>Verify your email</Text>
        <Text style={styles.subtitle}>
          {"Please enter the verification code we sent to your email address to complete the verification process."}
        </Text>

        {/* OTP ইনপুট বক্স (যেটি আমরা আগে তৈরি করেছিলাম) */}
        <OtpInput />

        {/* ডাইনামিক ভেরিফাই বাটন */}
        <CustomButton 
          title="Verify" 
          onPress={handleVerify} 
        />

        <View style={styles.resendContainer}>
          <TouchableOpacity>
            <Text style={styles.resendText}>Resend code in</Text>
          </TouchableOpacity>
          <Text style={styles.timer}> 01:26</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 30, justifyContent: 'center' },
  imageContainer: { alignItems: 'center', marginBottom: 30 },
  image: { width: 150, height: 150 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#7D7D7D', textAlign: 'center', lineHeight: 20 },
  resendContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  resendText: { color: '#7D7D7D', textDecorationLine: 'underline' },
  timer: { fontWeight: 'bold', color: '#000' }
});