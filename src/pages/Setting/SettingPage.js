import { View, Text, StyleSheet } from 'react-native'

const SettingPage = () => {
  return (
    <View style={styles.container}>
      <Text>This is setting page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SettingPage
