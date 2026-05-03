import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import AuthInput from '../../components/AuthInput';
import CustomButton from '../../components/CustomButton';

export default function ResetPasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Forgot password</Text>
        <Text style={styles.subtitle}>
          {"The password must be different than previous"}
        </Text>

        <View style={styles.form}>
          <AuthInput 
            label="Password" 
            placeholder="Enter your new password" 
            secureTextEntry 
          />
          <AuthInput 
            label="Confirm password" 
            placeholder="Re-enter password" 
            secureTextEntry 
          />
        </View>

        <CustomButton 
          title="Update Password" 
          onPress={() => console.log('Password updated')} 
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 24, justifyContent: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 },
  subtitle: { fontSize: 14, color: '#7D7D7D', textAlign: 'center', marginBottom: 30 },
  form: { marginBottom: 20 }
});