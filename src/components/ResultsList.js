import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import ResultsDeatail from './ResultsDetail'
const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
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
  container: {
    marginBottom: 10
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
})

export default ResultsList