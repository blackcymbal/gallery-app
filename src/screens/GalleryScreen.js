import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import theme from "../assets/themes/theme";
import AlbumList from "../components/albums/AlbumList";
import AppBar from "../components/common/AppBar";
import Loader from "../components/common/Loader";
import { allAlbums, createAlbums } from "../store/slices/albumsSlice";
import { useFetchImagesQuery } from "../store/slices/imagesApiSlice";

export default function GalleryScreen() {
  const [isLoading, setLoading] = useState(false);
  const { data: images } = useFetchImagesQuery();

  const albumsList = useSelector(allAlbums);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    if (images) {
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
      setLoading(false);
    }
  }, [images, dispatch]);

  return (
    <View style={styles.container}>
      <AppBar title={"Albums"} />

      {isLoading ? (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Loader />
        </View>
      ) : (
        <AlbumList albumsList={albumsList} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: theme.colors.mintCream },
});
