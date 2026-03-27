import { useState } from 'react';
import { Drawer } from 'react-native-drawer-layout';
import { Text, StyleSheet, Button, View } from 'react-native';

export default function DrawerScreen() {
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <Drawer
      open={rightOpen}
      onOpen={() => setRightOpen(true)}
      onClose={() => setRightOpen(false)}
      drawerType="front"
      drawerPosition="right"
      renderDrawerContent={() => {
        return (
          <View style={styles.container}>
            <Text>Right Drawer Content</Text>
          </View>
        );
      }}
    >
      <Drawer
        open={leftOpen}
        onOpen={() => setLeftOpen(true)}
        onClose={() => setLeftOpen(false)}
        drawerType="front"
        drawerPosition="left"
        renderDrawerContent={() => {
          return (
            <View style={styles.container}>
              <Text>Left Drawer Content</Text>
            </View>
          );
        }}
      >
        <View style={styles.container}>
          <Button
            title={`${leftOpen ? 'Close' : 'Open'} left drawer`}
            onPress={() => setLeftOpen((prevOpen) => !prevOpen)}
          />
          <View style={{ height: 16 }} />
          <Button
            title={`${rightOpen ? 'Close' : 'Open'} right drawer`}
            onPress={() => setRightOpen((prevOpen) => !prevOpen)}
          />
        </View>
      </Drawer>
    </Drawer>
  );
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
