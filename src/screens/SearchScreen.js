import React, { useState } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
      return results.filter((result) => result.price === price)
    }

    return (
      <View style={styles.container}>
        <SearchBar 
          term={term} 
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        {errorMessage ? <Text>{errorMessage}</Text> : null}
        <Text style={styles.count}>We have found {results.length}</Text>
        <ScrollView>
          <ResultsList results={filterResultsByPrice("$")} title="Cost Effective" />
          <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
          <ResultsList results={filterResultsByPrice("$$$")} title="Big Spender" />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  count: {
    marginLeft: 15,
    marginVertical: 5
  }
})

export default SearchScreen