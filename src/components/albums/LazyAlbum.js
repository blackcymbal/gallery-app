import React, { PureComponent } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import FastImage from "react-native-fast-image";

const screenWidth = Dimensions.get("window").width;

const imageWidth = (screenWidth - 48) / 2;

export class LazyAlbum extends PureComponent {
  render() {
    const navigation = this.props.navigation;
    const { thumbnailImage, albumId, totalImages } = this.props.album;

    const handlePress = () => {
      navigation.navigate("AlbumScreen", {
        albumId: albumId,
      });
    };

    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <FastImage
          style={styles.image}
          source={{
            uri: thumbnailImage,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <Text style={styles.title}>
          {albumId === -1 ? "All Images" : `Album no ${albumId}`}
        </Text>
        <Text style={styles.subTitle}>Total images {totalImages}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    height: imageWidth + 44,
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 8,
  },
  title: { color: "#000", fontSize: 18 },
  subTitle: { color: "#484848", fontSize: 14 },
});

export default LazyAlbum;
