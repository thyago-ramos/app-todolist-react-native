import React from 'react';

import { View, Text, StyleSheet, Image } from 'react-native';

import { Rocket } from 'phosphor-react-native';

export function Header() {
  
  return (
    <View style={styles.container}>
      
      <Rocket 
        size={40}
        color='#4EA8DE'
      />

      <View style={{ marginLeft: 5, flexDirection: 'row'}}>
        <Text style={styles.textTo}>to</Text>

        <Text style={styles.textDo}>do</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 24,
    paddingBottom: 60,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  textTo: {
    fontSize: 45,
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold',
  },
  textDo: {
    fontSize: 45,
    color: '#5E60CE',
    fontFamily: 'Inter_700Bold'
  },
});