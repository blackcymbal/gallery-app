import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../assets/themes/theme";
import AlbumList from "../components/albums/AlbumList";
import AppBar from "../components/common/AppBar";
import Loader from "../components/common/Loader";
import { allAlbums, createAlbums } from "../store/slices/albumsSlice";
import { useFetchImagesQuery } from "../store/slices/imagesApiSlice";

export default function GalleryScreen() {
  const { data: images, isLoading } = useFetchImagesQuery();

  const albumsList = useSelector(allAlbums);

  const dispatch = useDispatch();

  useEffect(() => {
    if (albumsList.length === 0 && images) {
      const albums = images.reduce((acc, item) => {
        const album = acc.find((a) => a.albumId === item.albumId);

        if (album) {
          album.totalImages += 1;
        } else {
          acc.push({
            albumId: item.albumId,
            thumbnailImage: item.thumbnailUrl,
            totalImages: 1,
          });
        }
        return acc;
      }, []);

      dispatch(createAlbums(albums));
    }
  }, [images, dispatch]);

  return (
    <View style={styles.container}>
      <AppBar title={"Albums"} />

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Loader />
        </View>
      ) : images ? (
        <AlbumList albumsList={albumsList} images={images} />
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Something went wrong!</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.mintCream },
});
