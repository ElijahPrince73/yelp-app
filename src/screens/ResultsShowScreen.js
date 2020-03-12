import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import yelp from '../api/yelp'

const ResultsShowScreen = ({ route }) => {
  const [result, setResult] = useState(null)
  const { id } = route.params

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if(!result) {
    return null
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 300
  }
})

export default ResultsShowScreen;