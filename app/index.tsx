import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function MenuScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main Menu</Text>
      
      <Link href="/drawer" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Drawer Page</Text>
        </Pressable>
      </Link>
      
      {/* Navigate to the Long Press Menu page */}
      <Link href="/long-press-menu" asChild style={{ marginTop: 15 }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Long Press Menu</Text>
        </Pressable>
      </Link>
      
      {/* Navigate to the Zeego Example page showing DropdownMenu and ContextMenu integrations */}
      <Link href="/zeego-example" asChild style={{ marginTop: 15 }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Zeego Example</Text>
        </Pressable>
      </Link>

      {/* Navigate to the Bottom Sheet Scroll View Example page */}
      <Link href="/bottom-sheet-scroll-view" asChild style={{ marginTop: 15 }}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Open Bottom Sheet Scroll View Example</Text>
        </Pressable>
      </Link>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
