import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import theme from "../assets/themes/theme";
import Loader from "../components/common/Loader";
import TopSearchBar from "../components/common/TopSearchBar";
import ImageList from "../components/images/ImageList";
import { useFetchImagesQuery } from "../store/slices/imagesApiSlice";

export default function AlbumScreen({ route }) {
  const { data: images, isLoading } = useFetchImagesQuery();

  const albumId = route.params.albumId;
  const filteredImages = images?.filter((item) => item.albumId === albumId);

  const [allImages, setAllImages] = useState(
    albumId === -1 ? images : filteredImages
  );

  return (
    <View style={styles.container}>
      <TopSearchBar
        title={albumId === -1 ? "All Images" : `Album no ${albumId}`}
        isBackButton={true}
        images={albumId === -1 ? images : filteredImages}
        setAllImages={setAllImages}
      />
      {isLoading ? <Loader /> : <ImageList images={allImages} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.mintCream,
  },
});
