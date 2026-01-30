import { Dimensions, Text, View } from "react-native";
import AppButton from "../components/commands/AppButton";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();
  const screenWidth = Dimensions.get("window").width;

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#0d0f0e", // dark terminal bg
          justifyContent: "center",
          alignItems: "center",
          padding: 16,
        }}
      >
        <View
          style={{
            width: screenWidth - 32,
            alignItems: "center",
          }}
        >
          {/* App Title */}
          <Text
            style={{
              fontSize: 38,
              fontWeight: "bold",
              color: "#00ff88", // terminal green
              marginBottom: 12,
              textAlign: "center",
            }}
          >
            BashBase
          </Text>

          {/* Tagline */}
          <Text
            style={{
              fontSize: 16,
              color: "#9aa5a1",
              textAlign: "center",
              marginBottom: 32,
              lineHeight: 22,
            }}
          >
            Learn the command line from scratch.
            {"\n"}
            Linux • Windows • macOS
          </Text>

          {/* Feature bullets */}
          <View style={{ marginBottom: 40 }}>
            <Text style={featureText}>› CLI basics & navigation</Text>
            <Text style={featureText}>
              › Real Linux, Windows & macOS commands
            </Text>
            <Text style={featureText}>› Beginner-friendly explanations</Text>
          </View>

          {/* CTA */}
          <AppButton
            title="Start Learning"
            onPress={() => navigation.navigate("CommandList" as never)}
          />

          {/* Footer text */}
          <Text
            style={{
              marginTop: 24,
              fontSize: 12,
              color: "#4f5b57",
            }}
          >
            No fluff. Just commands.
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const featureText = {
  color: "#c3fbd8",
  fontSize: 14,
  marginBottom: 8,
};
