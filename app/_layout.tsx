import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="home-details/edit-profile" />
      <Stack.Screen name="home-details/password-change" />
      <Stack.Screen name="home-details/notification" />
      <Stack.Screen name="home-details/legal" />
      
      {/* এখানে পরিবর্তন করুন: home-details/faq এর বদলে শুধু faq হবে */}
      <Stack.Screen name="home-details/faq" /> 
      
      <Stack.Screen name="auth/login" />
    </Stack>
  );
}