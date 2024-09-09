import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import theme from "../assets/themes/theme";
import ImageList from "../components/ImageList";
import { useFetchImagesQuery } from "../store/slices/imagesApiSlice";

const GalleryScreen = ({ navigation }) => {
  const { data: images, error, isLoading } = useFetchImagesQuery();

  const dispatch = useDispatch();

  console.log(images?.length);

  return (
    <SafeAreaView  style={styles.container}>
        <ImageList images={images} />
    </SafeAreaView>
  );
};

export default GalleryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    backgroundColor: theme.colors.mintCream,
  },
});
