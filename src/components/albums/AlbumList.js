import { useNavigation } from "@react-navigation/native";
import React, { Suspense } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useFetchImagesQuery } from "../../store/slices/imagesApiSlice";

const screenWidth = Dimensions.get("window").width;
const imageWidth = (screenWidth - 48) / 2;
const LazyAlbum = React.lazy(() => import("./LazyAlbum"));

export default function AlbumList({ albumsList }) {
  const navigation = useNavigation();
  const { data: images } = useFetchImagesQuery();

  const firstItem = {
    albumId: -1,
    thumbnailImage: images[0]?.thumbnailUrl,
    totalImages: images.length,
  };

  const combinedList = [firstItem, ...albumsList];

  const renderItem = ({ item }) => (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <LazyAlbum album={item} navigation={navigation} />
      </Suspense>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ gap: 12 }}
        numColumns={2}
        data={combinedList}
        renderItem={renderItem}
        keyExtractor={(item) => item.albumId.toString()}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={10}
        getItemLayout={(data, index) => ({
          length: imageWidth,
          offset: (imageWidth + 44 + 12) * index,
          index,
        })}
        ListHeaderComponent={<View style={styles.header} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: { height: 8 },
  footer: { height: 100 },
});
