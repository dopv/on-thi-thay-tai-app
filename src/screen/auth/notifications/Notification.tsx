import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';

interface NotificationProps {
  navigation: any;
  route: any;
}

const Notification = (props: NotificationProps) => {
  const { navigation, route } = props;
  return (
    <View style={styles.container}>
      <Text>Notification</Text>
      <TouchableOpacity onPress={()=>{navigation.openDrawer()}}>
        <Text>open Drawer </Text>
      </TouchableOpacity>
    </View>
  )
}

export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
})