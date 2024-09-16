import React, { PureComponent } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { selectAnPhotoToDelete } from "../../store/slices/albumsSlice";

const screenWidth = Dimensions.get("window").width;

const imageWidth = screenWidth / 3 - 16;

export class LazyImage extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: false,
    };
  }
  render() {
    const dispatch = this.props.dispatch;
    const navigation = this.props.navigation;
    const { thumbnailUrl, url, id } = this.props.image;

    const handlePress = () => {
      navigation.navigate("ImageDetails", {
        image: this.props.image,
      });
    };

    const handleLongPress = () => {
      dispatch(selectAnPhotoToDelete(id))
      this.props.bottomSheetRef.current?.snapToIndex(0);
    };

    const handlePressIn = () => this.setState({ value: true });
    const handlePressOut = () => this.setState({ value: false });

    FastImage.preload([
      {
        uri: url,
      },
    ]);

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
            uri: thumbnailUrl,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}
        />
      </Pressable>
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
