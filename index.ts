// Keep the entrypoint aligned with Expo Router. The old Expo template imported
// `./App`, which TypeScript resolved against the `app/` directory on macOS and
// caused a casing conflict between `App` and `app`.
import 'expo-router/entry';
