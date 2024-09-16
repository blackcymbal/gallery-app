import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../assets/themes/theme";

const AppBar = ({
  title,
  isBackButton = false,
  isOptionsButton = false,
  handlePressOptionsButton = () => {},
}) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <LinearGradient colors={[theme.colors.secondary, theme.colors.primary]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          {isBackButton ? (
            <TouchableOpacity onPress={handleGoBack}>
              <Feather
                name="chevron-left"
                size={30}
                color={theme.colors.mintCream}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.emptyView} />
          )}

          <Text style={styles.title}>{title}</Text>
          {isOptionsButton ? (
            <TouchableOpacity onPress={handlePressOptionsButton}>
              <Feather
                name="more-horizontal"
                size={30}
                color={theme.colors.mintCream}
              />
            </TouchableOpacity>
          ) : (
            <View style={styles.emptyView} />
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  insideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingHorizontal: 12,
    paddingTop: Platform.OS == "ios" ? 0 : 12,
  },
  title: { fontSize: 20, fontWeight: "500", color: theme.colors.mintCream },
  image: { height: 30, width: 30, borderRadius: 30 },
  emptyView: { width: 30 },
});
