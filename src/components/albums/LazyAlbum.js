import React, { PureComponent } from "react";
import { Dimensions, Pressable, StyleSheet, Text } from "react-native";
import FastImage from "react-native-fast-image";
import { selectAnAlbumToDelete } from "../../store/slices/albumsSlice";

const screenWidth = Dimensions.get("window").width;

const imageWidth = (screenWidth - 48) / 2;

export class LazyAlbum extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }

  render() {
    const dispatch = this.props.dispatch;
    const navigation = this.props.navigation;
    const { thumbnailImage, albumId, totalImages } = this.props.album;

    const handlePress = () =>
      navigation.navigate("AlbumScreen", {
        albumId: albumId,
      });

    const handleLongPress = () => {
      dispatch(selectAnAlbumToDelete(albumId));
      this.props.bottomSheetRef.current?.snapToIndex(0);
    };

    const handlePressIn = () => this.setState({ value: true });
    const handlePressOut = () => this.setState({ value: false });

    return (
      <Pressable
        style={[styles.container, { opacity: this.state.value ? 0.4 : 1 }]}
        onPress={handlePress}
        onLongPress={handleLongPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
      >
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
      </Pressable>
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
