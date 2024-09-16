import { useNavigation } from "@react-navigation/native";
import React, { Suspense, useRef } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import DeleteBottomSheet from "../common/DeleteBottomSheet";

const screenWidth = Dimensions.get("window").width;
const imageWidth = (screenWidth - 48) / 2;
const LazyAlbum = React.lazy(() => import("./LazyAlbum"));

export default function AlbumList({ albumsList, images }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const bottomSheetRef = useRef(null);

  const firstItem = {
    albumId: -1,
    thumbnailImage: images[0]?.thumbnailUrl,
    totalImages: images.length,
  };

  const combinedList = [firstItem, ...albumsList];

  const renderItem = ({ item }) => (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <LazyAlbum
          album={item}
          navigation={navigation}
          bottomSheetRef={bottomSheetRef}
          dispatch={dispatch}
        />
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
      <DeleteBottomSheet bottomSheetRef={bottomSheetRef} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center" },
  header: { height: 8 },
  footer: { height: 100 },
});
