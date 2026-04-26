import { Text, StyleSheet, Button, View } from 'react-native';
export default function BottomSheetScrollView() {
  return <Text style={styles.container}>Bottom Sheet Scroll View</Text>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  subtitle: {
    marginTop: 10,
    color: '#666',
  },
});