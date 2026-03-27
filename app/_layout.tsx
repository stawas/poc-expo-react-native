import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="index" options={{ title: 'Menu' }} />
      <Stack.Screen name="drawer" options={{ title: 'Drawer', gestureEnabled: false }} />
      <Stack.Screen name="long-press-menu" options={{ title: 'Long Press Menu', gestureEnabled: false }} />
      <Stack.Screen name="zeego-example" options={{ title: 'Zeego Example' }} />
    </Stack>
  );
}
