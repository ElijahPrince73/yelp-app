import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ route }) => {
  const { id } = route.params

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;