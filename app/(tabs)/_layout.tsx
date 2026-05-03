import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ 
      headerShown: false,
      tabBarActiveTintColor: '#136D3B', 
      tabBarStyle: { height: 65, paddingBottom: 10 },
      tabBarShowLabel: false,
    }}>
      {/* ১. হোম ট্যাব (index.tsx) */}
      <Tabs.Screen name="index" options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="home" size={28} color={color} />
      }} />
      
      {/* ২. ওয়ালেট ট্যাব (wallet.tsx) */}
      <Tabs.Screen name="wallet" options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="wallet" size={28} color={color} />
      }} />

      {/* ৩. এনালিটিক্স ট্যাব (analytics.tsx) */}
      <Tabs.Screen name="analytics" options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="chart-pie" size={28} color={color} />
      }} />

      {/* ৪. প্রোফাইল ট্যাব (profile.tsx) */}
      <Tabs.Screen name="profile" options={{
        tabBarIcon: ({ color }) => <MaterialCommunityIcons name="account" size={28} color={color} />
      }} />
    </Tabs>
  );
}