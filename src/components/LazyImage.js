import React, { memo } from "react";
import { Dimensions, Image, StyleSheet, TouchableOpacity } from "react-native";

const screenWidth = Dimensions.get('window').width;

const imageWidth = (screenWidth / 3) - 16; 


const LazyImage = memo(({ thumbnailUrl }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: thumbnailUrl }} style={styles.image} />
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 4
  },
  image: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: 8,
  }
});

export default LazyImage;
