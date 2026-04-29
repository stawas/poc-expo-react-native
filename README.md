# MyFirstExpoApp

Expo React Native proof-of-concept app for testing native UI patterns with a custom development build.

## What This App Includes

- Expo Router navigation with a main menu screen.
- Left and right drawers using `react-native-drawer-layout`.
- A custom long-press menu built with React Native `Modal`.
- Native-style dropdown and context menus using `zeego`.
- A draggable bottom sheet with a nested scroll view using `react-native-reanimated` and `react-native-gesture-handler`.

## Requirements

- Bun
- Node.js supported by Expo/React Native
- Xcode for iOS builds
- Android Studio for Android builds
- A physical iPhone or simulator for iOS testing

This project includes `expo-dev-client`, so the installed app is a development build. It needs Metro running while you develop.

## Install Dependencies

```sh
bun install
```

## Run On iOS

For a simulator:

```sh
bun run ios
```

For a connected physical iPhone:

```sh
bun run ios:device
```

The physical-device script uses port `8081` because the development build expects Metro to be reachable from the phone on that port.

## Start Metro For An Installed Development Build

After the development build is already installed, start Metro with:

```sh
bun run start
```

This starts Expo in development-client mode on the LAN:

```sh
expo start --dev-client --host lan --port 8081
```

If the phone cannot find the server on LAN, use tunnel mode:

```sh
bun run start:tunnel
```

## Expo Go

This app uses native packages that require a custom development build. Expo Go is not the default workflow.

If you still need to start Expo Go mode for compatible screens, run:

```sh
bun run start:expo-go
```

## Android

```sh
bun run android
```

## Web

```sh
bun run web
```

## Prebuild Native Projects

```sh
bun run prebuild
```

This regenerates the native `ios` and `android` folders from the Expo config.

## Troubleshooting

### The iPhone Shows "No Development Servers Found"

Start Metro from the project root:

```sh
bun run start
```

Make sure the Mac and iPhone are on the same network. If LAN discovery still fails, run:

```sh
bun run start:tunnel
```

You can also enter the Metro URL manually in the development build. The URL usually looks like:

```text
http://<your-mac-ip>:8081
```

### Metro Does Not Start Correctly

Use a Node.js version supported by Expo/React Native. Very new Node versions can cause Expo CLI or Metro issues.

### Watchman Recrawl Warning

If Expo prints a Watchman recrawl warning, reset the project watch:

```sh
watchman watch-del '/Users/luna/ReactProjects/poc-expo-react-native'
watchman watch-project '/Users/luna/ReactProjects/poc-expo-react-native'
```

## Project Structure

```text
app/
  _layout.tsx                    Expo Router stack configuration
  index.tsx                      Main menu
  drawer.tsx                     Left and right drawer example
  long-press-menu.tsx            Custom long-press modal menu
  zeego-example.tsx              Zeego dropdown/context menu examples
  bottom-sheet-scroll-view.tsx   Bottom sheet with nested scrolling
assets/                          App icons and splash assets
android/                         Generated Android native project
ios/                             Generated iOS native project
```

## Useful Checks

```sh
bunx tsc --noEmit
```
