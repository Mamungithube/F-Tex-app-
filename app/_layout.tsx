import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* index ফাইলটি অটোমেটিক রান হবে এবং রিডাইরেক্ট করবে */}
      <Stack.Screen name="index" />
      <Stack.Screen name="auth/login" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}