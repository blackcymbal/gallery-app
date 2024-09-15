import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
    Platform,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Feather from "react-native-vector-icons/Feather";
import theme from "../../assets/themes/theme";

export default function TopSearchBar({
  title,
  isBackButton = false,
  images,
  setAllImages,
}) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleChangeText = (text) => {
    const filteredImages = images.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
    setAllImages(filteredImages)
  };


  return (
    <LinearGradient colors={[theme.colors.secondary, theme.colors.primary]}>
      <SafeAreaView style={styles.container}>
        <View style={styles.insideContainer}>
          <View style={styles.titleContainer}>
            {isBackButton && (
              <TouchableOpacity onPress={handleGoBack}>
                <Feather
                  name="chevron-left"
                  size={30}
                  color={theme.colors.mintCream}
                />
              </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={styles.searchContainer}>
            <TextInput
              onChangeText={handleChangeText}
              placeholder="Search"
              placeholderTextColor={theme.colors.font2}
              style={styles.searchInput}
            />
            <Pressable>
              <Feather
                name="search"
                size={16}
                color={"#000"}
                style={styles.searchIcon}
              />
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  insideContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 12,
    paddingHorizontal: 12,
    paddingTop: Platform.OS == "ios" ? 0 : 12,
  },
  titleContainer: { flexDirection: "row", alignItems: "center", gap: 8 },
  title: { fontSize: 20, fontWeight: "500", color: theme.colors.mintCream },
  image: { height: 30, width: 30, borderRadius: 30 },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 28,
    backgroundColor: "#fff",
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginLeft: 40,
  },
  searchInput: {
    flex: 1,
    color: "#000",
    fontSize: 14,
  },
  searchIcon: {
    marginLeft: 8,
  },
});
