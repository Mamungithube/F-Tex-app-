import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const faqData = [
  {
    id: 1,
    question: "Employer Withholding and W4",
    answer: "Morbi adipiscing gravida dolor dui tincidunt libero. Duis malesuada massa libero nec accumsan nunc gravida."
  },
  {
    id: 2,
    question: "How much taxes did I pay last year",
    answer: "You can find your last year's tax summary in the Tax Information section of the app."
  },
  {
    id: 3,
    question: "Where do I see exactly what i paid in taxes last year",
    answer: "All your tax payment history is available under the Analytics and Tax report tabs."
  },
  {
    id: 4,
    question: "What do you use to pay taxes to the IRS?",
    answer: "We use secure payment gateways authorized by the IRS to process your tax payments safely."
  }
];

export default function FAQScreen() {
  const [expandedId, setExpandedId] = useState<number | null>(1); // ডিফল্টভাবে প্রথমটি খোলা থাকবে

  const toggleAccordion = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>FAQ</Text>
        <View style={{ width: 40 }} />
      </View>

      {/* Content */}
      <View style={styles.contentCard}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Frequently Asked Questions</Text>

          {faqData.map((item) => (
            <View key={item.id} style={styles.faqItem}>
              <TouchableOpacity 
                style={styles.questionRow} 
                onPress={() => toggleAccordion(item.id)}
                activeOpacity={0.7}
              >
                <Text style={styles.questionText}>{item.question}</Text>
                <Ionicons 
                  name={expandedId === item.id ? "chevron-up" : "chevron-down"} 
                  size={20} 
                  color="black" 
                />
              </TouchableOpacity>
              
              {expandedId === item.id && (
                <Text style={styles.answerText}>{item.answer}</Text>
              )}
              <View style={styles.divider} />
            </View>
          ))}
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
  contentCard: { 
    flex: 1, 
    backgroundColor: 'white', 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    padding: 25 
  },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 30, marginTop: 10 },
  faqItem: { marginBottom: 15 },
  questionRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 10
  },
  questionText: { fontSize: 16, fontWeight: '500', width: '85%', color: '#333' },
  answerText: { fontSize: 14, color: '#7D7D7D', lineHeight: 22, marginTop: 10, marginBottom: 5 },
  divider: { height: 1, backgroundColor: '#F0F0F0', marginTop: 15 }
});