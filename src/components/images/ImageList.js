import { useNavigation } from "@react-navigation/native";
import React, { Suspense, useRef } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import DeleteBottomSheet from "../common/DeleteBottomSheet";

const screenWidth = Dimensions.get("window").width;

const imageWidth = screenWidth / 3 - 16;

const LazyImage = React.lazy(() => import("./LazyImage"));

export default function ImageList({ images }) {
  const navigation = useNavigation();
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View>
      <Suspense fallback={<Text>Loading...</Text>}>
        <LazyImage
          image={item}
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
        contentContainerStyle={{ gap: 8 }}
        numColumns={3}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        initialNumToRender={21}
        maxToRenderPerBatch={21}
        windowSize={21}
        //  removeClippedSubviews={true}
        getItemLayout={(data, index) => ({
          length: imageWidth,
          offset: (imageWidth + 8) * index,
          index,
        })}
        ListHeaderComponent={<View style={styles.header} />}
        ListFooterComponent={<View style={styles.footer} />}
      />
      <DeleteBottomSheet bottomSheetRef={bottomSheetRef} isImage={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 12 },
  header: { height: 12 },
  footer: { height: 120 },
});
