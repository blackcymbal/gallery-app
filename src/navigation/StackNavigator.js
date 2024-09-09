import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import GalleryScreen from "../screens/GalleryScreen";
import ImageDetailsScreen from "../screens/ImageDetailsScreen";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"GalleryScreen"}
    >
      <Stack.Screen name="GalleryScreen" component={GalleryScreen} />
      <Stack.Screen name="ImageDetails" component={ImageDetailsScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
