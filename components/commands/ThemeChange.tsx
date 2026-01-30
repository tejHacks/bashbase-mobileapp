import { Pressable, StatusBar, StyleSheet, Text } from "react-native";

type ThemeChangeProps = {
  title: string;
  onPress: () => void;
};

export default function ThemeChange({ title, onPress }: ThemeChangeProps) {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
      {/* <StatusBar style="auto" /> */}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#4267B5",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});

// npx create-expo-app@latest appName --template blank-typescript
// expo install react-native-safe-area-context
// expo install react-native-screens
// npm install @react-navigation/native
// npm install @react-navigation/native-stack
