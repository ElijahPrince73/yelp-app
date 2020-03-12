import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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

  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ResultsShowScreen;