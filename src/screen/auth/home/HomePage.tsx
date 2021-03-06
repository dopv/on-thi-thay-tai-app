import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

interface HomeProps {
  navigation: any;
  route: any;
}

const HomePage = (props: HomeProps) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text>HomePage</Text>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
        <Text>open Drawer </Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})