import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import theme from "../assets/themes/theme";
import AppBar from "../components/common/AppBar";

const screenWidth = Dimensions.get("window").width;

const ImageDetailsScreen = ({ route }) => {
  const image = route.params.image;

  return (
    <View style={styles.container}>
      <AppBar title={"Image Details"} isBackButton={true} />
      <FastImage
        style={styles.image}
        source={{
          uri: image?.url,
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Text style={styles.title}>
        {image?.id}. {image?.title}
      </Text>
    </View>
  );
};

export default ImageDetailsScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.mintCream },
  image: {
    width: screenWidth,
    height: screenWidth,
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    paddingVertical: 4,
    color: "#000",
  },
});
