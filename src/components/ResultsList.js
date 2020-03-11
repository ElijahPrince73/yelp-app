import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDeatail from './ResultsDetail'
const ResultsList = ({ title, results }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList 
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => <ResultsDeatail result={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
})

export default ResultsList