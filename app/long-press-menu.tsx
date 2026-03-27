import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Pressable, 
  Modal, 
  GestureResponderEvent, 
  Dimensions 
} from 'react-native';

interface MenuPosition {
  x: number;
  y: number;
}

const ContextMenuExample = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState<MenuPosition>({ x: 0, y: 0 });

  const handleLongPress = (event: GestureResponderEvent) => {
    const { pageX, pageY } = event.nativeEvent;
    
    // Offset logic: adjust these values so the menu doesn't appear 
    // directly under the finger or off-screen.
    setPosition({ x: pageX, y: pageY });
    setVisible(true);
  };

  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <Pressable onLongPress={handleLongPress} style={styles.targetButton}>
        <Text style={styles.buttonText}>Long Press Me</Text>
      </Pressable>

      <Modal
        visible={visible}
        transparent={true}
        animationType="fade"
        onRequestClose={closeMenu}
      >
        <Pressable style={styles.modalOverlay} onPress={closeMenu}>
          <View 
            style={[
              styles.menuContainer, 
              { top: position.y, left: Math.min(position.x, Dimensions.get('window').width - 160) }
            ]}
          >
            <Pressable style={styles.menuItem} onPress={() => { /* Handle Copy */ closeMenu(); }}>
              <Text style={styles.menuText}>Copy</Text>
            </Pressable>
            <View style={styles.separator} />
            <Pressable style={styles.menuItem} onPress={() => { /* Handle Edit */ closeMenu(); }}>
              <Text style={styles.menuText}>Edit</Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  targetButton: {
    padding: 20,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)', // Subtle dimming
  },
  menuContainer: {
    position: 'absolute',
    width: 150,
    backgroundColor: 'white',
    borderRadius: 12,
    paddingVertical: 5,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 5,
  },
  menuItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#EEE',
  },
});

export default ContextMenuExample;