import { View, Text, StyleSheet, Pressable } from 'react-native';
// Importing DropdownMenu and ContextMenu components from zeego for native-like menus
import * as DropdownMenu from 'zeego/dropdown-menu';
import * as ContextMenu from 'zeego/context-menu';

export default function ZeegoExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zeego Components</Text>

      {/* DropdownMenu example - triggers on a single tap and displays a menu 
          This provides a native iOS/Android dropdown feel. */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Dropdown Menu (Tap)</Text>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Tap for Options</Text>
            </View>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item key="edit">
              <DropdownMenu.ItemTitle>Edit</DropdownMenu.ItemTitle>
              {/* Optional icons specifically available for iOS system symbols */}
              <DropdownMenu.ItemIcon ios={{ name: 'pencil' }} />
            </DropdownMenu.Item>
            <DropdownMenu.Item key="delete" destructive>
              <DropdownMenu.ItemTitle>Delete</DropdownMenu.ItemTitle>
              <DropdownMenu.ItemIcon ios={{ name: 'trash' }} />
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </View>

      {/* ContextMenu example - triggers on long press 
          This behaves more like a standard long-press system menu. */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Context Menu (Long Press)</Text>
        <ContextMenu.Root>
          <ContextMenu.Trigger>
            <View style={[styles.button, styles.altButton]}>
              <Text style={styles.buttonText}>Long Press for Options</Text>
            </View>
          </ContextMenu.Trigger>
          <ContextMenu.Content>
            {/* Context menu item for a Copy action, using the doc.on.doc icon for iOS */}
            <ContextMenu.Item key="copy">
              <ContextMenu.ItemTitle>
                Copy
              </ContextMenu.ItemTitle>
              <ContextMenu.ItemIcon ios={{ name: 'doc.on.doc' }} />
            </ContextMenu.Item>
            <ContextMenu.Item key="favorite">
              <ContextMenu.ItemTitle>Favorite</ContextMenu.ItemTitle>
              <ContextMenu.ItemIcon ios={{ name: 'star' }} />
            </ContextMenu.Item>
            <ContextMenu.Item key="Expo">
              <ContextMenu.ItemTitle>Expo</ContextMenu.ItemTitle>
              {/* Renders an image inside the context menu item from the local assets folder */}
              <ContextMenu.ItemImage
                source={require('../assets/favicon.png')}
                height={3}
                width={3}
              />
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  section: {
    marginBottom: 40,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  altButton: {
    backgroundColor: '#34C759',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
