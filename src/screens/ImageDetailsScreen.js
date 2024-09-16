import React, { useRef } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from "react-redux";
import theme from "../assets/themes/theme";
import AppBar from "../components/common/AppBar";
import DeleteBottomSheet from "../components/common/DeleteBottomSheet";
import { photoToDelete, selectAnPhotoToDelete } from "../store/slices/albumsSlice";

const screenWidth = Dimensions.get("window").width;

const ImageDetailsScreen = ({ route }) => {
  const image = route.params.image;
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const selectedPhotoToDelete = useSelector(photoToDelete);


  const handlePressOptionsButton = () => {
    bottomSheetRef.current?.snapToIndex(0);
    dispatch(selectAnPhotoToDelete(image?.id))
  };

  return (
    <View style={styles.container}>
      <AppBar
        title={"Image Details"}
        isBackButton={true}
        isOptionsButton={true}
        handlePressOptionsButton={handlePressOptionsButton}
      />
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
      <DeleteBottomSheet bottomSheetRef={bottomSheetRef} isImage={true} />
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
