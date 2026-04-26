import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const { height } = Dimensions.get('window');

const SNAP_TOP = 120;
const SNAP_MIDDLE = height * 0.45;
const SNAP_CLOSED = height;

export default function BottomSheetScrollView() {
  const translateY = useSharedValue(SNAP_MIDDLE);
  const startY = useSharedValue(0);
  const scrollY = useSharedValue(0);

  const scrollGesture = Gesture.Native();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const panGesture = Gesture.Pan()
    .simultaneousWithExternalGesture(scrollGesture)
    .onStart(() => {
      startY.value = translateY.value;
    })
    .onUpdate(event => {
      const draggingDown = event.translationY > 0;
      const scrollIsAtTop = scrollY.value <= 0;

      // Allow sheet drag only when:
      // 1. dragging upward, or
      // 2. dragging downward while ScrollView is already at top
      if (!draggingDown || scrollIsAtTop) {
        const nextY = startY.value + event.translationY;

        // Clamp top boundary
        translateY.value = Math.max(SNAP_TOP, nextY);
      }
    })
    .onEnd(event => {
      const currentY = translateY.value;
      const velocityY = event.velocityY;

      if (currentY < height * 0.3) {
        translateY.value = withSpring(SNAP_TOP);
      } else {
        translateY.value = withSpring(SNAP_MIDDLE);
      }
    });

  const sheetStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.sheet, sheetStyle]}>
          <View style={styles.handle} />

          <GestureDetector gesture={scrollGesture}>
            <Animated.ScrollView
              onScroll={scrollHandler}
              scrollEventThrottle={16}
              contentContainerStyle={styles.content}
            >
              {Array.from({ length: 40 }).map((_, index) => (
                <View key={index} style={styles.item} />
              ))}
            </Animated.ScrollView>
          </GestureDetector>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#ddd',
  },
  sheet: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height,
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    overflow: 'hidden',
  },
  handle: {
    width: 48,
    height: 5,
    borderRadius: 999,
    backgroundColor: '#ccc',
    alignSelf: 'center',
    marginVertical: 12,
  },
  content: {
    padding: 16,
    paddingBottom: 120,
  },
  item: {
    height: 56,
    borderRadius: 12,
    backgroundColor: '#eee',
    marginBottom: 12,
  },
});