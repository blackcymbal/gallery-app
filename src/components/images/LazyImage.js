import React, { PureComponent } from "react";
import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

const screenWidth = Dimensions.get("window").width;

const imageWidth = screenWidth / 3 - 16;

export class LazyImage extends PureComponent {
  render() {
    const navigation = this.props.navigation;
    const { thumbnailUrl, url } = this.props.image;

    const handlePress = () => {
      navigation.navigate("ImageDetails", {
        image: this.props.image,
      });
    };

    FastImage.preload([
      {
        uri: url,
      },
    ]);

    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <FastImage
          style={styles.image}
          source={{
            uri: thumbnailUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 4,
  },
});

export default LazyImage;
